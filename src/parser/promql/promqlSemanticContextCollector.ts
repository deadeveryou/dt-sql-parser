import { PromQLParserListener } from '../../lib';
import { PromQLParser } from '../../lib/promql/PromQLParser';
import SemanticContextCollector from '../common/semanticContextCollector';

class PromQLSemanticContextCollector
    extends SemanticContextCollector
    implements PromQLParserListener
{
    override getWhiteSpaceRuleType(): number {
        return PromQLParser.WS;
    }
    override getStatementRuleType(): number {
        return PromQLParser.RULE_singleStmt;
    }
}

export { PromQLSemanticContextCollector };
