import { CodeCompletionCore } from 'antlr4-c3';
import { ParseErrorListener } from '../common/parseErrorListener';
import { Parser, Token } from 'antlr4ng';
import { PromQLParser } from '../../lib/promql/PromQLParser';

export class PromQLErrorListener extends ParseErrorListener {
    // 语法规则到可读名称的映射
    private objectNames: Map<number, string> = new Map([
        [PromQLParser.RULE_function, 'function'],
        [PromQLParser.RULE_labelName, 'label'],
        [PromQLParser.RULE_aggregationOperator, 'aggregation operator'],
        [PromQLParser.RULE_labelMatcher, 'label matcher'],
        [PromQLParser.RULE_stmt, 'PromQL statement'],
        [PromQLParser.RULE_vector, 'vector selector'],
    ]);

    /**
     * 获取预期输入建议
     * @param parser 当前解析器实例
     * @param token 出错位置的token
     */
    public getExpectedText(parser: Parser, token: Token): string {
        let expectedText = '';
        const input = this.parserContext.getParsedInput();
        // 收集候选建议
        let currentContext = parser.context ?? undefined;
        while (currentContext?.parent) {
            currentContext = currentContext.parent;
        }

        const parserInfo = this.parserContext.getMinimumParserInfo(
            input,
            token.tokenIndex,
            currentContext
        );

        if (!parserInfo) return '';

        const { parser: c3Parser, newTokenIndex, parseTree: c3Context } = parserInfo;

        const core = new CodeCompletionCore(c3Parser);
        core.preferredRules = this.preferredRules;

        const candidates = core.collectCandidates(newTokenIndex, c3Context);
        // 处理token/操作符建议
        if (candidates.rules.size) {
            const result: string[] = [];
            // get expectedText as collect rules first
            for (const candidate of candidates.rules) {
                const [ruleType] = candidate;
                const name = this.objectNames.get(ruleType);
                switch (ruleType) {
                    case PromQLParser.RULE_matrixSelector:
                    case PromQLParser.RULE_function:
                    case PromQLParser.RULE_literal: {
                        if (!result.includes(`{existing}${name}`)) {
                            result.push(`{existing}${name}`);
                        }
                        break;
                    }
                    case PromQLParser.RULE_instantSelector: {
                        if (!result.includes(`{new}${name}`)) {
                            result.push(`{new}${name}`);
                        }
                        break;
                    }
                }
            }
            expectedText = result.join(`{or}`);
        }

        // 生成友好提示
        if (candidates.tokens.size) {
            expectedText += expectedText ? '{orKeyword}' : '{keyword}';
        }
        return expectedText;
    }
}
