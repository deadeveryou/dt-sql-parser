// Generated from dt-sql-parser/src/grammar/promql/PromQLParser.g4 by ANTLR 4.13.1

// @ts-nocheck

import { AbstractParseTreeVisitor } from "antlr4ng";


import { SQLParserBase } from '../SQLParserBase';  // 在生成的代码中导入基类


import { ProgramContext } from "./PromQLParser.js";
import { SingleStmtContext } from "./PromQLParser.js";
import { StmtContext } from "./PromQLParser.js";
import { UnaryOpContext } from "./PromQLParser.js";
import { PowOpContext } from "./PromQLParser.js";
import { MultOpContext } from "./PromQLParser.js";
import { AddOpContext } from "./PromQLParser.js";
import { CompareOpContext } from "./PromQLParser.js";
import { VectorContext } from "./PromQLParser.js";
import { InstantSelectorContext } from "./PromQLParser.js";
import { LabelMatcherContext } from "./PromQLParser.js";
import { LabelMatcherOperatorContext } from "./PromQLParser.js";
import { LabelMatcherListContext } from "./PromQLParser.js";
import { MatrixSelectorContext } from "./PromQLParser.js";
import { ParameterContext } from "./PromQLParser.js";
import { ParameterListContext } from "./PromQLParser.js";
import { ByContext } from "./PromQLParser.js";
import { WithoutContext } from "./PromQLParser.js";
import { GroupingContext } from "./PromQLParser.js";
import { On_Context } from "./PromQLParser.js";
import { IgnoringContext } from "./PromQLParser.js";
import { GroupLeftContext } from "./PromQLParser.js";
import { GroupRightContext } from "./PromQLParser.js";
import { LabelNameContext } from "./PromQLParser.js";
import { LabelNameListContext } from "./PromQLParser.js";
import { AggregationOperatorContext } from "./PromQLParser.js";
import { FunctionContext } from "./PromQLParser.js";
import { KeywordContext } from "./PromQLParser.js";
import { LiteralContext } from "./PromQLParser.js";


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `PromQLParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export class PromQLParserVisitor<Result> extends AbstractParseTreeVisitor<Result> {
    /**
     * Visit a parse tree produced by `PromQLParser.program`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitProgram?: (ctx: ProgramContext) => Result;
    /**
     * Visit a parse tree produced by `PromQLParser.singleStmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitSingleStmt?: (ctx: SingleStmtContext) => Result;
    /**
     * Visit a parse tree produced by `PromQLParser.stmt`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitStmt?: (ctx: StmtContext) => Result;
    /**
     * Visit a parse tree produced by `PromQLParser.unaryOp`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitUnaryOp?: (ctx: UnaryOpContext) => Result;
    /**
     * Visit a parse tree produced by `PromQLParser.powOp`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitPowOp?: (ctx: PowOpContext) => Result;
    /**
     * Visit a parse tree produced by `PromQLParser.multOp`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMultOp?: (ctx: MultOpContext) => Result;
    /**
     * Visit a parse tree produced by `PromQLParser.addOp`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAddOp?: (ctx: AddOpContext) => Result;
    /**
     * Visit a parse tree produced by `PromQLParser.compareOp`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitCompareOp?: (ctx: CompareOpContext) => Result;
    /**
     * Visit a parse tree produced by `PromQLParser.vector`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitVector?: (ctx: VectorContext) => Result;
    /**
     * Visit a parse tree produced by `PromQLParser.instantSelector`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitInstantSelector?: (ctx: InstantSelectorContext) => Result;
    /**
     * Visit a parse tree produced by `PromQLParser.labelMatcher`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLabelMatcher?: (ctx: LabelMatcherContext) => Result;
    /**
     * Visit a parse tree produced by `PromQLParser.labelMatcherOperator`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLabelMatcherOperator?: (ctx: LabelMatcherOperatorContext) => Result;
    /**
     * Visit a parse tree produced by `PromQLParser.labelMatcherList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLabelMatcherList?: (ctx: LabelMatcherListContext) => Result;
    /**
     * Visit a parse tree produced by `PromQLParser.matrixSelector`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitMatrixSelector?: (ctx: MatrixSelectorContext) => Result;
    /**
     * Visit a parse tree produced by `PromQLParser.parameter`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParameter?: (ctx: ParameterContext) => Result;
    /**
     * Visit a parse tree produced by `PromQLParser.parameterList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitParameterList?: (ctx: ParameterListContext) => Result;
    /**
     * Visit a parse tree produced by `PromQLParser.by`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitBy?: (ctx: ByContext) => Result;
    /**
     * Visit a parse tree produced by `PromQLParser.without`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitWithout?: (ctx: WithoutContext) => Result;
    /**
     * Visit a parse tree produced by `PromQLParser.grouping`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGrouping?: (ctx: GroupingContext) => Result;
    /**
     * Visit a parse tree produced by `PromQLParser.on_`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitOn_?: (ctx: On_Context) => Result;
    /**
     * Visit a parse tree produced by `PromQLParser.ignoring`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitIgnoring?: (ctx: IgnoringContext) => Result;
    /**
     * Visit a parse tree produced by `PromQLParser.groupLeft`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGroupLeft?: (ctx: GroupLeftContext) => Result;
    /**
     * Visit a parse tree produced by `PromQLParser.groupRight`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitGroupRight?: (ctx: GroupRightContext) => Result;
    /**
     * Visit a parse tree produced by `PromQLParser.labelName`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLabelName?: (ctx: LabelNameContext) => Result;
    /**
     * Visit a parse tree produced by `PromQLParser.labelNameList`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLabelNameList?: (ctx: LabelNameListContext) => Result;
    /**
     * Visit a parse tree produced by `PromQLParser.aggregationOperator`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitAggregationOperator?: (ctx: AggregationOperatorContext) => Result;
    /**
     * Visit a parse tree produced by `PromQLParser.function`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitFunction?: (ctx: FunctionContext) => Result;
    /**
     * Visit a parse tree produced by `PromQLParser.keyword`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitKeyword?: (ctx: KeywordContext) => Result;
    /**
     * Visit a parse tree produced by `PromQLParser.literal`.
     * @param ctx the parse tree
     * @return the visitor result
     */
    visitLiteral?: (ctx: LiteralContext) => Result;
}

