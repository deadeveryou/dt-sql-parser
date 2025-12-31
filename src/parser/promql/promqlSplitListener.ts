import { StmtContext } from '../../lib/promql/PromQLParser';
import { PromQLParserListener } from '../../lib/promql/PromQLParserListener';
import { SplitListener } from '../common/splitListener';

export class PromQLSplitListener
    extends SplitListener<StmtContext>
    implements PromQLParserListener
{
    exitStmt(ctx: StmtContext) {
        this._statementsContext.push(ctx);
    }
}
