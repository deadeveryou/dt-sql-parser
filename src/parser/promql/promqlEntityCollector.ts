import { PromQLParserListener } from '../../lib/promql/PromQLParserListener';
import { FunctionContext, LabelNameContext, StmtContext } from '../../lib/promql/PromQLParser';
import { AttrName, EntityCollector, StmtContextType } from '../common/entityCollector';
import { EntityContextType } from '../common/types';

export class PromQLEntityCollector extends EntityCollector implements PromQLParserListener {
    /**
     * 处理标签名称
     * @param ctx 标签名称上下文
     */
    exitLabelName(ctx: LabelNameContext) {
        // 只在标签匹配器中收集标签名
        if (this.isInLabelMatcherContext()) {
            this.pushEntity(ctx, EntityContextType.LABEL);
        }
    }

    /**
     * 检查是否在标签匹配器上下文中
     * @private
     */
    private isInLabelMatcherContext(): boolean {
        // 使用更可靠的方式检查上下文
        const currentCtx = this.getEntities()?.[0]?.belongStmt;
        return currentCtx?.constructor?.name === 'LabelMatcherContext';
    }

    /**
     * 处理函数调用
     * @param ctx 函数调用上下文
     */
    exitFunction(ctx: FunctionContext) {
        const funcName = ctx.children?.[0]?.getText?.() || '';
        if (funcName) {
            this.pushEntity(ctx, EntityContextType.FUNCTION, [
                {
                    attrName: AttrName.comment,
                    endContextList: [funcName],
                },
            ]);
        }
    }

    // ========== 查询上下文跟踪 ==========
    enterVectorOperation(ctx: StmtContext) {
        this.pushStmt(ctx, StmtContextType.ALTER_TABLE_STMT);
    }

    exitVectorOperation(ctx: StmtContext) {
        this.popStmt();
    }
}
