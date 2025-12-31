import { CandidatesCollection } from 'antlr4-c3';
import { CharStream, CommonTokenStream, Token } from 'antlr4ng';

import { PromQLLexer } from '../../lib/promql/PromQLLexer';
import { ProgramContext, PromQLParser } from '../../lib/promql/PromQLParser';
import { BasicSQL } from '../common/basicSQL';
import {
    CaretPosition,
    EntityContextType,
    SemanticCollectOptions,
    Suggestions,
    SyntaxSuggestion,
} from '../common/types';
import { ErrorListener } from '../common/parseErrorListener';
import { PromQLErrorListener } from './promqlErrorListener';
import { PromQLSemanticContextCollector } from './promqlSemanticContextCollector';
import { PromQLEntityCollector } from './promqlEntityCollector';
import { PromQLSplitListener } from './promqlSplitListener';
import { StmtContextType } from '../common/entityCollector';
import { processTokenCandidates } from '../common/tokenUtils';

export class PromQL extends BasicSQL<PromQLLexer, ProgramContext, PromQLParser> {
    protected createLexerFromCharStream(charStream: CharStream) {
        return new PromQLLexer(charStream);
    }

    protected createParserFromTokenStream(tokenStream: CommonTokenStream) {
        return new PromQLParser(tokenStream);
    }

    protected preferredRules: Set<number> = new Set([
        PromQLParser.RULE_function,
        PromQLParser.RULE_labelName,
        PromQLParser.RULE_vector,
        PromQLParser.RULE_aggregationOperator,
        PromQLParser.RULE_labelMatcher,
        PromQLParser.RULE_stmt,
    ]);

    protected get splitListener() {
        return new PromQLSplitListener();
    }

    protected createErrorListener(_errorListener: ErrorListener): PromQLErrorListener {
        const parserContext = this;
        return new PromQLErrorListener(_errorListener, parserContext, this.preferredRules);
    }

    protected createEntityCollector(input: string, allTokens?: Token[], caretTokenIndex?: number) {
        return new PromQLEntityCollector(input, allTokens, caretTokenIndex);
    }

    protected createSemanticContextCollector(
        input: string,
        caretPosition: CaretPosition,
        allTokens: Token[],
        options?: SemanticCollectOptions
    ) {
        return new PromQLSemanticContextCollector(input, caretPosition, allTokens, options);
    }

    protected override processCandidates(
        candidates: CandidatesCollection,
        allTokens: Token[],
        caretTokenIndex: number
    ): Suggestions<Token> {
        const originalSyntaxSuggestions: SyntaxSuggestion<Token>[] = [];
        const keywords: string[] = [];

        for (let candidate of candidates.rules) {
            const [ruleType, candidateRule] = candidate;
            const tokenRanges = allTokens.slice(candidateRule.startTokenIndex, caretTokenIndex + 1);

            let syntaxContextType: EntityContextType | StmtContextType | undefined = void 0;
            switch (ruleType) {
                case PromQLParser.RULE_function: {
                    syntaxContextType = EntityContextType.FUNCTION;
                    break;
                }
                case PromQLParser.RULE_labelName: {
                    syntaxContextType = EntityContextType.LABEL;
                    break;
                }
                case PromQLParser.RULE_aggregationOperator: {
                    syntaxContextType = EntityContextType.AGGREGATION;
                    break;
                }
                default:
                    break;
            }

            if (syntaxContextType) {
                originalSyntaxSuggestions.push({
                    syntaxContextType,
                    wordRanges: tokenRanges,
                });
            }
        }
        const processedKeywords = processTokenCandidates(this._parser, candidates.tokens);
        keywords.push(...processedKeywords);

        return {
            syntax: originalSyntaxSuggestions,
            keywords,
        };
    }
}
