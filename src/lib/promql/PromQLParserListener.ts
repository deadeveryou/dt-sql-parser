// Generated from dt-sql-parser/src/grammar/promql/PromQLParser.g4 by ANTLR 4.13.1

// @ts-nocheck

import { ErrorNode, ParseTreeListener, ParserRuleContext, TerminalNode } from "antlr4ng";


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
 * This interface defines a complete listener for a parse tree produced by
 * `PromQLParser`.
 */
export class PromQLParserListener implements ParseTreeListener {
    /**
     * Enter a parse tree produced by `PromQLParser.program`.
     * @param ctx the parse tree
     */
    enterProgram?: (ctx: ProgramContext) => void;
    /**
     * Exit a parse tree produced by `PromQLParser.program`.
     * @param ctx the parse tree
     */
    exitProgram?: (ctx: ProgramContext) => void;
    /**
     * Enter a parse tree produced by `PromQLParser.singleStmt`.
     * @param ctx the parse tree
     */
    enterSingleStmt?: (ctx: SingleStmtContext) => void;
    /**
     * Exit a parse tree produced by `PromQLParser.singleStmt`.
     * @param ctx the parse tree
     */
    exitSingleStmt?: (ctx: SingleStmtContext) => void;
    /**
     * Enter a parse tree produced by `PromQLParser.stmt`.
     * @param ctx the parse tree
     */
    enterStmt?: (ctx: StmtContext) => void;
    /**
     * Exit a parse tree produced by `PromQLParser.stmt`.
     * @param ctx the parse tree
     */
    exitStmt?: (ctx: StmtContext) => void;
    /**
     * Enter a parse tree produced by `PromQLParser.unaryOp`.
     * @param ctx the parse tree
     */
    enterUnaryOp?: (ctx: UnaryOpContext) => void;
    /**
     * Exit a parse tree produced by `PromQLParser.unaryOp`.
     * @param ctx the parse tree
     */
    exitUnaryOp?: (ctx: UnaryOpContext) => void;
    /**
     * Enter a parse tree produced by `PromQLParser.powOp`.
     * @param ctx the parse tree
     */
    enterPowOp?: (ctx: PowOpContext) => void;
    /**
     * Exit a parse tree produced by `PromQLParser.powOp`.
     * @param ctx the parse tree
     */
    exitPowOp?: (ctx: PowOpContext) => void;
    /**
     * Enter a parse tree produced by `PromQLParser.multOp`.
     * @param ctx the parse tree
     */
    enterMultOp?: (ctx: MultOpContext) => void;
    /**
     * Exit a parse tree produced by `PromQLParser.multOp`.
     * @param ctx the parse tree
     */
    exitMultOp?: (ctx: MultOpContext) => void;
    /**
     * Enter a parse tree produced by `PromQLParser.addOp`.
     * @param ctx the parse tree
     */
    enterAddOp?: (ctx: AddOpContext) => void;
    /**
     * Exit a parse tree produced by `PromQLParser.addOp`.
     * @param ctx the parse tree
     */
    exitAddOp?: (ctx: AddOpContext) => void;
    /**
     * Enter a parse tree produced by `PromQLParser.compareOp`.
     * @param ctx the parse tree
     */
    enterCompareOp?: (ctx: CompareOpContext) => void;
    /**
     * Exit a parse tree produced by `PromQLParser.compareOp`.
     * @param ctx the parse tree
     */
    exitCompareOp?: (ctx: CompareOpContext) => void;
    /**
     * Enter a parse tree produced by `PromQLParser.vector`.
     * @param ctx the parse tree
     */
    enterVector?: (ctx: VectorContext) => void;
    /**
     * Exit a parse tree produced by `PromQLParser.vector`.
     * @param ctx the parse tree
     */
    exitVector?: (ctx: VectorContext) => void;
    /**
     * Enter a parse tree produced by `PromQLParser.instantSelector`.
     * @param ctx the parse tree
     */
    enterInstantSelector?: (ctx: InstantSelectorContext) => void;
    /**
     * Exit a parse tree produced by `PromQLParser.instantSelector`.
     * @param ctx the parse tree
     */
    exitInstantSelector?: (ctx: InstantSelectorContext) => void;
    /**
     * Enter a parse tree produced by `PromQLParser.labelMatcher`.
     * @param ctx the parse tree
     */
    enterLabelMatcher?: (ctx: LabelMatcherContext) => void;
    /**
     * Exit a parse tree produced by `PromQLParser.labelMatcher`.
     * @param ctx the parse tree
     */
    exitLabelMatcher?: (ctx: LabelMatcherContext) => void;
    /**
     * Enter a parse tree produced by `PromQLParser.labelMatcherOperator`.
     * @param ctx the parse tree
     */
    enterLabelMatcherOperator?: (ctx: LabelMatcherOperatorContext) => void;
    /**
     * Exit a parse tree produced by `PromQLParser.labelMatcherOperator`.
     * @param ctx the parse tree
     */
    exitLabelMatcherOperator?: (ctx: LabelMatcherOperatorContext) => void;
    /**
     * Enter a parse tree produced by `PromQLParser.labelMatcherList`.
     * @param ctx the parse tree
     */
    enterLabelMatcherList?: (ctx: LabelMatcherListContext) => void;
    /**
     * Exit a parse tree produced by `PromQLParser.labelMatcherList`.
     * @param ctx the parse tree
     */
    exitLabelMatcherList?: (ctx: LabelMatcherListContext) => void;
    /**
     * Enter a parse tree produced by `PromQLParser.matrixSelector`.
     * @param ctx the parse tree
     */
    enterMatrixSelector?: (ctx: MatrixSelectorContext) => void;
    /**
     * Exit a parse tree produced by `PromQLParser.matrixSelector`.
     * @param ctx the parse tree
     */
    exitMatrixSelector?: (ctx: MatrixSelectorContext) => void;
    /**
     * Enter a parse tree produced by `PromQLParser.parameter`.
     * @param ctx the parse tree
     */
    enterParameter?: (ctx: ParameterContext) => void;
    /**
     * Exit a parse tree produced by `PromQLParser.parameter`.
     * @param ctx the parse tree
     */
    exitParameter?: (ctx: ParameterContext) => void;
    /**
     * Enter a parse tree produced by `PromQLParser.parameterList`.
     * @param ctx the parse tree
     */
    enterParameterList?: (ctx: ParameterListContext) => void;
    /**
     * Exit a parse tree produced by `PromQLParser.parameterList`.
     * @param ctx the parse tree
     */
    exitParameterList?: (ctx: ParameterListContext) => void;
    /**
     * Enter a parse tree produced by `PromQLParser.by`.
     * @param ctx the parse tree
     */
    enterBy?: (ctx: ByContext) => void;
    /**
     * Exit a parse tree produced by `PromQLParser.by`.
     * @param ctx the parse tree
     */
    exitBy?: (ctx: ByContext) => void;
    /**
     * Enter a parse tree produced by `PromQLParser.without`.
     * @param ctx the parse tree
     */
    enterWithout?: (ctx: WithoutContext) => void;
    /**
     * Exit a parse tree produced by `PromQLParser.without`.
     * @param ctx the parse tree
     */
    exitWithout?: (ctx: WithoutContext) => void;
    /**
     * Enter a parse tree produced by `PromQLParser.grouping`.
     * @param ctx the parse tree
     */
    enterGrouping?: (ctx: GroupingContext) => void;
    /**
     * Exit a parse tree produced by `PromQLParser.grouping`.
     * @param ctx the parse tree
     */
    exitGrouping?: (ctx: GroupingContext) => void;
    /**
     * Enter a parse tree produced by `PromQLParser.on_`.
     * @param ctx the parse tree
     */
    enterOn_?: (ctx: On_Context) => void;
    /**
     * Exit a parse tree produced by `PromQLParser.on_`.
     * @param ctx the parse tree
     */
    exitOn_?: (ctx: On_Context) => void;
    /**
     * Enter a parse tree produced by `PromQLParser.ignoring`.
     * @param ctx the parse tree
     */
    enterIgnoring?: (ctx: IgnoringContext) => void;
    /**
     * Exit a parse tree produced by `PromQLParser.ignoring`.
     * @param ctx the parse tree
     */
    exitIgnoring?: (ctx: IgnoringContext) => void;
    /**
     * Enter a parse tree produced by `PromQLParser.groupLeft`.
     * @param ctx the parse tree
     */
    enterGroupLeft?: (ctx: GroupLeftContext) => void;
    /**
     * Exit a parse tree produced by `PromQLParser.groupLeft`.
     * @param ctx the parse tree
     */
    exitGroupLeft?: (ctx: GroupLeftContext) => void;
    /**
     * Enter a parse tree produced by `PromQLParser.groupRight`.
     * @param ctx the parse tree
     */
    enterGroupRight?: (ctx: GroupRightContext) => void;
    /**
     * Exit a parse tree produced by `PromQLParser.groupRight`.
     * @param ctx the parse tree
     */
    exitGroupRight?: (ctx: GroupRightContext) => void;
    /**
     * Enter a parse tree produced by `PromQLParser.labelName`.
     * @param ctx the parse tree
     */
    enterLabelName?: (ctx: LabelNameContext) => void;
    /**
     * Exit a parse tree produced by `PromQLParser.labelName`.
     * @param ctx the parse tree
     */
    exitLabelName?: (ctx: LabelNameContext) => void;
    /**
     * Enter a parse tree produced by `PromQLParser.labelNameList`.
     * @param ctx the parse tree
     */
    enterLabelNameList?: (ctx: LabelNameListContext) => void;
    /**
     * Exit a parse tree produced by `PromQLParser.labelNameList`.
     * @param ctx the parse tree
     */
    exitLabelNameList?: (ctx: LabelNameListContext) => void;
    /**
     * Enter a parse tree produced by `PromQLParser.aggregationOperator`.
     * @param ctx the parse tree
     */
    enterAggregationOperator?: (ctx: AggregationOperatorContext) => void;
    /**
     * Exit a parse tree produced by `PromQLParser.aggregationOperator`.
     * @param ctx the parse tree
     */
    exitAggregationOperator?: (ctx: AggregationOperatorContext) => void;
    /**
     * Enter a parse tree produced by `PromQLParser.function`.
     * @param ctx the parse tree
     */
    enterFunction?: (ctx: FunctionContext) => void;
    /**
     * Exit a parse tree produced by `PromQLParser.function`.
     * @param ctx the parse tree
     */
    exitFunction?: (ctx: FunctionContext) => void;
    /**
     * Enter a parse tree produced by `PromQLParser.keyword`.
     * @param ctx the parse tree
     */
    enterKeyword?: (ctx: KeywordContext) => void;
    /**
     * Exit a parse tree produced by `PromQLParser.keyword`.
     * @param ctx the parse tree
     */
    exitKeyword?: (ctx: KeywordContext) => void;
    /**
     * Enter a parse tree produced by `PromQLParser.literal`.
     * @param ctx the parse tree
     */
    enterLiteral?: (ctx: LiteralContext) => void;
    /**
     * Exit a parse tree produced by `PromQLParser.literal`.
     * @param ctx the parse tree
     */
    exitLiteral?: (ctx: LiteralContext) => void;

    visitTerminal(node: TerminalNode): void {}
    visitErrorNode(node: ErrorNode): void {}
    enterEveryRule(node: ParserRuleContext): void {}
    exitEveryRule(node: ParserRuleContext): void {}
}

