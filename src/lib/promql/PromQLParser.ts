// Generated from dt-sql-parser/src/grammar/promql/PromQLParser.g4 by ANTLR 4.13.1

// @ts-nocheck

import * as antlr from "antlr4ng";
import { Token } from "antlr4ng";

import { PromQLParserListener } from "./PromQLParserListener.js";
import { PromQLParserVisitor } from "./PromQLParserVisitor.js";

// for running tests with parameters, TODO: discuss strategy for typed parameters in CI
// eslint-disable-next-line no-unused-vars
type int = number;


import { SQLParserBase } from '../SQLParserBase';  // 在生成的代码中导入基类


export class PromQLParser extends SQLParserBase {
    public static readonly NUMERAL = 1;
    public static readonly SCIENTIFIC_NUMBER = 2;
    public static readonly STRING = 3;
    public static readonly KW_AND = 4;
    public static readonly KW_OR = 5;
    public static readonly KW_UNLESS = 6;
    public static readonly KW_BY = 7;
    public static readonly KW_WITHOUT = 8;
    public static readonly KW_ON = 9;
    public static readonly KW_IGNORING = 10;
    public static readonly KW_GROUP_LEFT = 11;
    public static readonly KW_GROUP_RIGHT = 12;
    public static readonly KW_OFFSET = 13;
    public static readonly KW_BOOL = 14;
    public static readonly KW_SUM = 15;
    public static readonly KW_MIN = 16;
    public static readonly KW_MAX = 17;
    public static readonly KW_AVG = 18;
    public static readonly KW_GROUP = 19;
    public static readonly KW_STDDEV = 20;
    public static readonly KW_STDVAR = 21;
    public static readonly KW_COUNT = 22;
    public static readonly KW_COUNT_VALUES = 23;
    public static readonly KW_BOTTOMK = 24;
    public static readonly KW_TOPK = 25;
    public static readonly KW_QUANTILE = 26;
    public static readonly KW_ABS = 27;
    public static readonly KW_CEIL = 28;
    public static readonly KW_FLOOR = 29;
    public static readonly KW_ROUND = 30;
    public static readonly KW_SQRT = 31;
    public static readonly KW_EXP = 32;
    public static readonly KW_LN = 33;
    public static readonly KW_LOG2 = 34;
    public static readonly KW_LOG10 = 35;
    public static readonly KW_SGN = 36;
    public static readonly KW_PI = 37;
    public static readonly KW_DEG = 38;
    public static readonly KW_RAD = 39;
    public static readonly KW_ACOS = 40;
    public static readonly KW_ACOSH = 41;
    public static readonly KW_ASIN = 42;
    public static readonly KW_ASINH = 43;
    public static readonly KW_ATAN = 44;
    public static readonly KW_ATANH = 45;
    public static readonly KW_COS = 46;
    public static readonly KW_COSH = 47;
    public static readonly KW_SIN = 48;
    public static readonly KW_SINH = 49;
    public static readonly KW_TAN = 50;
    public static readonly KW_TANH = 51;
    public static readonly KW_TIME = 52;
    public static readonly KW_TIMESTAMP = 53;
    public static readonly KW_HOUR = 54;
    public static readonly KW_MINUTE = 55;
    public static readonly KW_MONTH = 56;
    public static readonly KW_YEAR = 57;
    public static readonly KW_DAY_OF_MONTH = 58;
    public static readonly KW_DAY_OF_WEEK = 59;
    public static readonly KW_DAY_OF_YEAR = 60;
    public static readonly KW_DAYS_IN_MONTH = 61;
    public static readonly KW_DELTA = 62;
    public static readonly KW_DERIV = 63;
    public static readonly KW_IDELTA = 64;
    public static readonly KW_INCREASE = 65;
    public static readonly KW_RATE = 66;
    public static readonly KW_IRATE = 67;
    public static readonly KW_RESETS = 68;
    public static readonly KW_PRESENT_OVER_TIME = 69;
    public static readonly KW_HISTOGRAM_COUNT = 70;
    public static readonly KW_HISTOGRAM_SUM = 71;
    public static readonly KW_HISTOGRAM_FRACTION = 72;
    public static readonly KW_HISTOGRAM_QUANTILE = 73;
    public static readonly KW_QUANTILE_OVER_TIME = 74;
    public static readonly KW_AVG_OVER_TIME = 75;
    public static readonly KW_MIN_OVER_TIME = 76;
    public static readonly KW_MAX_OVER_TIME = 77;
    public static readonly KW_SUM_OVER_TIME = 78;
    public static readonly KW_COUNT_OVER_TIME = 79;
    public static readonly KW_STDDEV_OVER_TIME = 80;
    public static readonly KW_STDVAR_OVER_TIME = 81;
    public static readonly KW_LAST_OVER_TIME = 82;
    public static readonly KW_ABSENT = 83;
    public static readonly KW_ABSENT_OVER_TIME = 84;
    public static readonly KW_PREDICT_LINEAR = 85;
    public static readonly KW_HOLT_WINTERS = 86;
    public static readonly KW_LABEL_JOIN = 87;
    public static readonly KW_LABEL_REPLACE = 88;
    public static readonly KW_SCALAR = 89;
    public static readonly KW_VECTOR = 90;
    public static readonly KW_SORT = 91;
    public static readonly KW_SORT_DESC = 92;
    public static readonly KW_CHANGES = 93;
    public static readonly KW_CLAMP = 94;
    public static readonly KW_CLAMP_MAX = 95;
    public static readonly KW_CLAMP_MIN = 96;
    public static readonly ADD = 97;
    public static readonly SUB = 98;
    public static readonly MULT = 99;
    public static readonly DIV = 100;
    public static readonly MOD = 101;
    public static readonly POW = 102;
    public static readonly EQ = 103;
    public static readonly DEQ = 104;
    public static readonly NE = 105;
    public static readonly GT = 106;
    public static readonly LT = 107;
    public static readonly GE = 108;
    public static readonly LE = 109;
    public static readonly RE = 110;
    public static readonly NRE = 111;
    public static readonly LEFT_BRACE = 112;
    public static readonly RIGHT_BRACE = 113;
    public static readonly LEFT_PAREN = 114;
    public static readonly RIGHT_PAREN = 115;
    public static readonly LEFT_BRACKET = 116;
    public static readonly RIGHT_BRACKET = 117;
    public static readonly COMMA = 118;
    public static readonly SEMI = 119;
    public static readonly AT = 120;
    public static readonly SUBQUERY_RANGE = 121;
    public static readonly TIME_RANGE = 122;
    public static readonly DURATION = 123;
    public static readonly METRIC_NAME = 124;
    public static readonly LABEL_NAME = 125;
    public static readonly WS = 126;
    public static readonly SL_COMMENT = 127;
    public static readonly RULE_program = 0;
    public static readonly RULE_singleStmt = 1;
    public static readonly RULE_stmt = 2;
    public static readonly RULE_unaryOp = 3;
    public static readonly RULE_powOp = 4;
    public static readonly RULE_multOp = 5;
    public static readonly RULE_addOp = 6;
    public static readonly RULE_compareOp = 7;
    public static readonly RULE_vector = 8;
    public static readonly RULE_instantSelector = 9;
    public static readonly RULE_labelMatcher = 10;
    public static readonly RULE_labelMatcherOperator = 11;
    public static readonly RULE_labelMatcherList = 12;
    public static readonly RULE_matrixSelector = 13;
    public static readonly RULE_parameter = 14;
    public static readonly RULE_parameterList = 15;
    public static readonly RULE_by = 16;
    public static readonly RULE_without = 17;
    public static readonly RULE_grouping = 18;
    public static readonly RULE_on_ = 19;
    public static readonly RULE_ignoring = 20;
    public static readonly RULE_groupLeft = 21;
    public static readonly RULE_groupRight = 22;
    public static readonly RULE_labelName = 23;
    public static readonly RULE_labelNameList = 24;
    public static readonly RULE_aggregationOperator = 25;
    public static readonly RULE_function = 26;
    public static readonly RULE_keyword = 27;
    public static readonly RULE_literal = 28;

    public static readonly literalNames = [
        null, null, null, null, "'and'", "'or'", "'unless'", "'by'", "'without'", 
        "'on'", "'ignoring'", "'group_left'", "'group_right'", "'offset'", 
        "'bool'", "'sum'", "'min'", "'max'", "'avg'", "'group'", "'stddev'", 
        "'stdvar'", "'count'", "'count_values'", "'bottomk'", "'topk'", 
        "'quantile'", "'abs'", "'ceil'", "'floor'", "'round'", "'sqrt'", 
        "'exp'", "'ln'", "'log2'", "'log10'", "'sgn'", "'pi'", "'deg'", 
        "'rad'", "'acos'", "'acosh'", "'asin'", "'asinh'", "'atan'", "'atanh'", 
        "'cos'", "'cosh'", "'sin'", "'sinh'", "'tan'", "'tanh'", "'time'", 
        "'timestamp'", "'hour'", "'minute'", "'month'", "'year'", "'day_of_month'", 
        "'day_of_week'", "'day_of_year'", "'days_in_month'", "'delta'", 
        "'deriv'", "'idelta'", "'increase'", "'rate'", "'irate'", "'resets'", 
        "'present_over_time'", "'histogram_count'", "'histogram_sum'", "'histogram_fraction'", 
        "'histogram_quantile'", "'quantile_over_time'", "'avg_over_time'", 
        "'min_over_time'", "'max_over_time'", "'sum_over_time'", "'count_over_time'", 
        "'stddev_over_time'", "'stdvar_over_time'", "'last_over_time'", 
        "'absent'", "'absent_over_time'", "'predict_linear'", "'holt_winters'", 
        "'label_join'", "'label_replace'", "'scalar'", "'vector'", "'sort'", 
        "'sort_desc'", "'changes'", "'clamp'", "'clamp_max'", "'clamp_min'", 
        "'+'", "'-'", "'*'", "'/'", "'%'", "'^'", "'='", "'=='", "'!='", 
        "'>'", "'<'", "'>='", "'<='", "'=~'", "'!~'", "'{'", "'}'", "'('", 
        "')'", "'['", "']'", "','", "';'", "'@'"
    ];

    public static readonly symbolicNames = [
        null, "NUMERAL", "SCIENTIFIC_NUMBER", "STRING", "KW_AND", "KW_OR", 
        "KW_UNLESS", "KW_BY", "KW_WITHOUT", "KW_ON", "KW_IGNORING", "KW_GROUP_LEFT", 
        "KW_GROUP_RIGHT", "KW_OFFSET", "KW_BOOL", "KW_SUM", "KW_MIN", "KW_MAX", 
        "KW_AVG", "KW_GROUP", "KW_STDDEV", "KW_STDVAR", "KW_COUNT", "KW_COUNT_VALUES", 
        "KW_BOTTOMK", "KW_TOPK", "KW_QUANTILE", "KW_ABS", "KW_CEIL", "KW_FLOOR", 
        "KW_ROUND", "KW_SQRT", "KW_EXP", "KW_LN", "KW_LOG2", "KW_LOG10", 
        "KW_SGN", "KW_PI", "KW_DEG", "KW_RAD", "KW_ACOS", "KW_ACOSH", "KW_ASIN", 
        "KW_ASINH", "KW_ATAN", "KW_ATANH", "KW_COS", "KW_COSH", "KW_SIN", 
        "KW_SINH", "KW_TAN", "KW_TANH", "KW_TIME", "KW_TIMESTAMP", "KW_HOUR", 
        "KW_MINUTE", "KW_MONTH", "KW_YEAR", "KW_DAY_OF_MONTH", "KW_DAY_OF_WEEK", 
        "KW_DAY_OF_YEAR", "KW_DAYS_IN_MONTH", "KW_DELTA", "KW_DERIV", "KW_IDELTA", 
        "KW_INCREASE", "KW_RATE", "KW_IRATE", "KW_RESETS", "KW_PRESENT_OVER_TIME", 
        "KW_HISTOGRAM_COUNT", "KW_HISTOGRAM_SUM", "KW_HISTOGRAM_FRACTION", 
        "KW_HISTOGRAM_QUANTILE", "KW_QUANTILE_OVER_TIME", "KW_AVG_OVER_TIME", 
        "KW_MIN_OVER_TIME", "KW_MAX_OVER_TIME", "KW_SUM_OVER_TIME", "KW_COUNT_OVER_TIME", 
        "KW_STDDEV_OVER_TIME", "KW_STDVAR_OVER_TIME", "KW_LAST_OVER_TIME", 
        "KW_ABSENT", "KW_ABSENT_OVER_TIME", "KW_PREDICT_LINEAR", "KW_HOLT_WINTERS", 
        "KW_LABEL_JOIN", "KW_LABEL_REPLACE", "KW_SCALAR", "KW_VECTOR", "KW_SORT", 
        "KW_SORT_DESC", "KW_CHANGES", "KW_CLAMP", "KW_CLAMP_MAX", "KW_CLAMP_MIN", 
        "ADD", "SUB", "MULT", "DIV", "MOD", "POW", "EQ", "DEQ", "NE", "GT", 
        "LT", "GE", "LE", "RE", "NRE", "LEFT_BRACE", "RIGHT_BRACE", "LEFT_PAREN", 
        "RIGHT_PAREN", "LEFT_BRACKET", "RIGHT_BRACKET", "COMMA", "SEMI", 
        "AT", "SUBQUERY_RANGE", "TIME_RANGE", "DURATION", "METRIC_NAME", 
        "LABEL_NAME", "WS", "SL_COMMENT"
    ];
    public static readonly ruleNames = [
        "program", "singleStmt", "stmt", "unaryOp", "powOp", "multOp", "addOp", 
        "compareOp", "vector", "instantSelector", "labelMatcher", "labelMatcherOperator", 
        "labelMatcherList", "matrixSelector", "parameter", "parameterList", 
        "by", "without", "grouping", "on_", "ignoring", "groupLeft", "groupRight", 
        "labelName", "labelNameList", "aggregationOperator", "function", 
        "keyword", "literal",
    ];

    public get grammarFileName(): string { return "PromQLParser.g4"; }
    public get literalNames(): (string | null)[] { return PromQLParser.literalNames; }
    public get symbolicNames(): (string | null)[] { return PromQLParser.symbolicNames; }
    public get ruleNames(): string[] { return PromQLParser.ruleNames; }
    public get serializedATN(): number[] { return PromQLParser._serializedATN; }

    protected createFailedPredicateException(predicate?: string, message?: string): antlr.FailedPredicateException {
        return new antlr.FailedPredicateException(this, predicate, message);
    }

    public constructor(input: antlr.TokenStream) {
        super(input);
        this.interpreter = new antlr.ParserATNSimulator(this, PromQLParser._ATN, PromQLParser.decisionsToDFA, new antlr.PredictionContextCache());
    }
    public program(): ProgramContext {
        let localContext = new ProgramContext(this.context, this.state);
        this.enterRule(localContext, 0, PromQLParser.RULE_program);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 61;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            while ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4294934528) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 4294967295) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 4294967295) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 268763143) !== 0)) {
                {
                {
                this.state = 58;
                this.singleStmt();
                }
                }
                this.state = 63;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
            }
            this.state = 64;
            this.match(PromQLParser.EOF);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public singleStmt(): SingleStmtContext {
        let localContext = new SingleStmtContext(this.context, this.state);
        this.enterRule(localContext, 2, PromQLParser.RULE_singleStmt);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 66;
            this.stmt(0);
            this.state = 68;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 119) {
                {
                this.state = 67;
                this.match(PromQLParser.SEMI);
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public stmt(): StmtContext;
    public stmt(_p: number): StmtContext;
    public stmt(_p?: number): StmtContext {
        if (_p === undefined) {
            _p = 0;
        }

        let parentContext = this.context;
        let parentState = this.state;
        let localContext = new StmtContext(this.context, parentState);
        let previousContext = localContext;
        let _startState = 4;
        this.enterRecursionRule(localContext, 4, PromQLParser.RULE_stmt, _p);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 75;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case PromQLParser.ADD:
            case PromQLParser.SUB:
                {
                this.state = 71;
                this.unaryOp();
                this.state = 72;
                this.stmt(9);
                }
                break;
            case PromQLParser.KW_SUM:
            case PromQLParser.KW_MIN:
            case PromQLParser.KW_MAX:
            case PromQLParser.KW_AVG:
            case PromQLParser.KW_GROUP:
            case PromQLParser.KW_STDDEV:
            case PromQLParser.KW_STDVAR:
            case PromQLParser.KW_COUNT:
            case PromQLParser.KW_COUNT_VALUES:
            case PromQLParser.KW_BOTTOMK:
            case PromQLParser.KW_TOPK:
            case PromQLParser.KW_QUANTILE:
            case PromQLParser.KW_ABS:
            case PromQLParser.KW_CEIL:
            case PromQLParser.KW_FLOOR:
            case PromQLParser.KW_ROUND:
            case PromQLParser.KW_SQRT:
            case PromQLParser.KW_EXP:
            case PromQLParser.KW_LN:
            case PromQLParser.KW_LOG2:
            case PromQLParser.KW_LOG10:
            case PromQLParser.KW_SGN:
            case PromQLParser.KW_PI:
            case PromQLParser.KW_DEG:
            case PromQLParser.KW_RAD:
            case PromQLParser.KW_ACOS:
            case PromQLParser.KW_ACOSH:
            case PromQLParser.KW_ASIN:
            case PromQLParser.KW_ASINH:
            case PromQLParser.KW_ATAN:
            case PromQLParser.KW_ATANH:
            case PromQLParser.KW_COS:
            case PromQLParser.KW_COSH:
            case PromQLParser.KW_SIN:
            case PromQLParser.KW_SINH:
            case PromQLParser.KW_TAN:
            case PromQLParser.KW_TANH:
            case PromQLParser.KW_TIME:
            case PromQLParser.KW_TIMESTAMP:
            case PromQLParser.KW_HOUR:
            case PromQLParser.KW_MINUTE:
            case PromQLParser.KW_MONTH:
            case PromQLParser.KW_YEAR:
            case PromQLParser.KW_DAY_OF_MONTH:
            case PromQLParser.KW_DAY_OF_WEEK:
            case PromQLParser.KW_DAY_OF_YEAR:
            case PromQLParser.KW_DAYS_IN_MONTH:
            case PromQLParser.KW_DELTA:
            case PromQLParser.KW_DERIV:
            case PromQLParser.KW_IDELTA:
            case PromQLParser.KW_INCREASE:
            case PromQLParser.KW_RATE:
            case PromQLParser.KW_IRATE:
            case PromQLParser.KW_RESETS:
            case PromQLParser.KW_PRESENT_OVER_TIME:
            case PromQLParser.KW_HISTOGRAM_COUNT:
            case PromQLParser.KW_HISTOGRAM_SUM:
            case PromQLParser.KW_HISTOGRAM_FRACTION:
            case PromQLParser.KW_HISTOGRAM_QUANTILE:
            case PromQLParser.KW_QUANTILE_OVER_TIME:
            case PromQLParser.KW_AVG_OVER_TIME:
            case PromQLParser.KW_MIN_OVER_TIME:
            case PromQLParser.KW_MAX_OVER_TIME:
            case PromQLParser.KW_SUM_OVER_TIME:
            case PromQLParser.KW_COUNT_OVER_TIME:
            case PromQLParser.KW_STDDEV_OVER_TIME:
            case PromQLParser.KW_STDVAR_OVER_TIME:
            case PromQLParser.KW_LAST_OVER_TIME:
            case PromQLParser.KW_ABSENT:
            case PromQLParser.KW_ABSENT_OVER_TIME:
            case PromQLParser.KW_PREDICT_LINEAR:
            case PromQLParser.KW_HOLT_WINTERS:
            case PromQLParser.KW_LABEL_JOIN:
            case PromQLParser.KW_LABEL_REPLACE:
            case PromQLParser.KW_SCALAR:
            case PromQLParser.KW_VECTOR:
            case PromQLParser.KW_SORT:
            case PromQLParser.KW_SORT_DESC:
            case PromQLParser.KW_CHANGES:
            case PromQLParser.KW_CLAMP:
            case PromQLParser.KW_CLAMP_MAX:
            case PromQLParser.KW_CLAMP_MIN:
            case PromQLParser.LEFT_BRACE:
            case PromQLParser.LEFT_PAREN:
            case PromQLParser.METRIC_NAME:
                {
                this.state = 74;
                this.vector();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.context!.stop = this.tokenStream.LT(-1);
            this.state = 122;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 8, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    if (this._parseListeners != null) {
                        this.triggerExitRuleEvent();
                    }
                    previousContext = localContext;
                    {
                    this.state = 120;
                    this.errorHandler.sync(this);
                    switch (this.interpreter.adaptivePredict(this.tokenStream, 7, this.context) ) {
                    case 1:
                        {
                        localContext = new StmtContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, PromQLParser.RULE_stmt);
                        this.state = 77;
                        if (!(this.precpred(this.context, 11))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 11)");
                        }
                        this.state = 78;
                        this.powOp();
                        this.state = 79;
                        this.stmt(11);
                        }
                        break;
                    case 2:
                        {
                        localContext = new StmtContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, PromQLParser.RULE_stmt);
                        this.state = 81;
                        if (!(this.precpred(this.context, 8))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 8)");
                        }
                        this.state = 82;
                        this.multOp();
                        this.state = 83;
                        this.stmt(9);
                        }
                        break;
                    case 3:
                        {
                        localContext = new StmtContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, PromQLParser.RULE_stmt);
                        this.state = 85;
                        if (!(this.precpred(this.context, 7))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 7)");
                        }
                        this.state = 86;
                        this.addOp();
                        this.state = 87;
                        this.stmt(8);
                        }
                        break;
                    case 4:
                        {
                        localContext = new StmtContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, PromQLParser.RULE_stmt);
                        this.state = 89;
                        if (!(this.precpred(this.context, 6))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 6)");
                        }
                        this.state = 90;
                        this.compareOp();
                        this.state = 91;
                        this.stmt(7);
                        }
                        break;
                    case 5:
                        {
                        localContext = new StmtContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, PromQLParser.RULE_stmt);
                        this.state = 93;
                        if (!(this.precpred(this.context, 5))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 5)");
                        }
                        this.state = 94;
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 4 || _la === 6)) {
                        this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 96;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 9 || _la === 10) {
                            {
                            this.state = 95;
                            this.grouping();
                            }
                        }

                        this.state = 98;
                        this.stmt(6);
                        }
                        break;
                    case 6:
                        {
                        localContext = new StmtContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, PromQLParser.RULE_stmt);
                        this.state = 99;
                        if (!(this.precpred(this.context, 4))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 4)");
                        }
                        this.state = 100;
                        this.match(PromQLParser.KW_OR);
                        this.state = 102;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 9 || _la === 10) {
                            {
                            this.state = 101;
                            this.grouping();
                            }
                        }

                        this.state = 104;
                        this.stmt(5);
                        }
                        break;
                    case 7:
                        {
                        localContext = new StmtContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, PromQLParser.RULE_stmt);
                        this.state = 105;
                        if (!(this.precpred(this.context, 3))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 3)");
                        }
                        this.state = 106;
                        _la = this.tokenStream.LA(1);
                        if(!(_la === 6 || _la === 9)) {
                        this.errorHandler.recoverInline(this);
                        }
                        else {
                            this.errorHandler.reportMatch(this);
                            this.consume();
                        }
                        this.state = 108;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                        if (_la === 9 || _la === 10) {
                            {
                            this.state = 107;
                            this.grouping();
                            }
                        }

                        this.state = 110;
                        this.stmt(4);
                        }
                        break;
                    case 8:
                        {
                        localContext = new StmtContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, PromQLParser.RULE_stmt);
                        this.state = 111;
                        if (!(this.precpred(this.context, 10))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 10)");
                        }
                        this.state = 112;
                        this.match(PromQLParser.SUBQUERY_RANGE);
                        this.state = 113;
                        this.match(PromQLParser.KW_OFFSET);
                        this.state = 115;
                        this.errorHandler.sync(this);
                        switch (this.interpreter.adaptivePredict(this.tokenStream, 6, this.context) ) {
                        case 1:
                            {
                            this.state = 114;
                            this.match(PromQLParser.DURATION);
                            }
                            break;
                        }
                        }
                        break;
                    case 9:
                        {
                        localContext = new StmtContext(parentContext, parentState);
                        this.pushNewRecursionContext(localContext, _startState, PromQLParser.RULE_stmt);
                        this.state = 117;
                        if (!(this.precpred(this.context, 2))) {
                            throw this.createFailedPredicateException("this.precpred(this.context, 2)");
                        }
                        this.state = 118;
                        this.match(PromQLParser.AT);
                        this.state = 119;
                        this.match(PromQLParser.KW_TIMESTAMP);
                        }
                        break;
                    }
                    }
                }
                this.state = 124;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 8, this.context);
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.unrollRecursionContexts(parentContext);
        }
        return localContext;
    }
    public unaryOp(): UnaryOpContext {
        let localContext = new UnaryOpContext(this.context, this.state);
        this.enterRule(localContext, 6, PromQLParser.RULE_unaryOp);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 125;
            _la = this.tokenStream.LA(1);
            if(!(_la === 97 || _la === 98)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public powOp(): PowOpContext {
        let localContext = new PowOpContext(this.context, this.state);
        this.enterRule(localContext, 8, PromQLParser.RULE_powOp);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 127;
            this.match(PromQLParser.POW);
            this.state = 129;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 9 || _la === 10) {
                {
                this.state = 128;
                this.grouping();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public multOp(): MultOpContext {
        let localContext = new MultOpContext(this.context, this.state);
        this.enterRule(localContext, 10, PromQLParser.RULE_multOp);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 131;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 99)) & ~0x1F) === 0 && ((1 << (_la - 99)) & 7) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 133;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 9 || _la === 10) {
                {
                this.state = 132;
                this.grouping();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public addOp(): AddOpContext {
        let localContext = new AddOpContext(this.context, this.state);
        this.enterRule(localContext, 12, PromQLParser.RULE_addOp);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 135;
            _la = this.tokenStream.LA(1);
            if(!(_la === 97 || _la === 98)) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 137;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 9 || _la === 10) {
                {
                this.state = 136;
                this.grouping();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public compareOp(): CompareOpContext {
        let localContext = new CompareOpContext(this.context, this.state);
        this.enterRule(localContext, 14, PromQLParser.RULE_compareOp);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 139;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 104)) & ~0x1F) === 0 && ((1 << (_la - 104)) & 63) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            this.state = 141;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 14) {
                {
                this.state = 140;
                this.match(PromQLParser.KW_BOOL);
                }
            }

            this.state = 144;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 9 || _la === 10) {
                {
                this.state = 143;
                this.grouping();
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public vector(): VectorContext {
        let localContext = new VectorContext(this.context, this.state);
        this.enterRule(localContext, 16, PromQLParser.RULE_vector);
        let _la: number;
        try {
            this.state = 193;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 18, this.context) ) {
            case 1:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 146;
                this.function_();
                this.state = 147;
                this.match(PromQLParser.LEFT_PAREN);
                this.state = 156;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4294934542) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 4294967295) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 4294967295) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 268763143) !== 0)) {
                    {
                    this.state = 148;
                    this.parameter();
                    this.state = 153;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    while (_la === 118) {
                        {
                        {
                        this.state = 149;
                        this.match(PromQLParser.COMMA);
                        this.state = 150;
                        this.parameter();
                        }
                        }
                        this.state = 155;
                        this.errorHandler.sync(this);
                        _la = this.tokenStream.LA(1);
                    }
                    }
                }

                this.state = 158;
                this.match(PromQLParser.RIGHT_PAREN);
                }
                break;
            case 2:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 160;
                this.aggregationOperator();
                this.state = 161;
                this.parameterList();
                }
                break;
            case 3:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 163;
                this.aggregationOperator();
                this.state = 166;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case PromQLParser.KW_BY:
                    {
                    this.state = 164;
                    this.by();
                    }
                    break;
                case PromQLParser.KW_WITHOUT:
                    {
                    this.state = 165;
                    this.without();
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                this.state = 168;
                this.parameterList();
                }
                break;
            case 4:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 170;
                this.aggregationOperator();
                this.state = 171;
                this.parameterList();
                this.state = 174;
                this.errorHandler.sync(this);
                switch (this.tokenStream.LA(1)) {
                case PromQLParser.KW_BY:
                    {
                    this.state = 172;
                    this.by();
                    }
                    break;
                case PromQLParser.KW_WITHOUT:
                    {
                    this.state = 173;
                    this.without();
                    }
                    break;
                default:
                    throw new antlr.NoViableAltException(this);
                }
                }
                break;
            case 5:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 176;
                this.instantSelector();
                }
                break;
            case 6:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 177;
                this.instantSelector();
                this.state = 178;
                this.match(PromQLParser.TIME_RANGE);
                }
                break;
            case 7:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 180;
                this.instantSelector();
                this.state = 181;
                this.match(PromQLParser.KW_OFFSET);
                this.state = 182;
                this.match(PromQLParser.DURATION);
                }
                break;
            case 8:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 184;
                this.instantSelector();
                this.state = 185;
                this.match(PromQLParser.TIME_RANGE);
                this.state = 186;
                this.match(PromQLParser.KW_OFFSET);
                this.state = 187;
                this.match(PromQLParser.DURATION);
                }
                break;
            case 9:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 189;
                this.match(PromQLParser.LEFT_PAREN);
                this.state = 190;
                this.stmt(0);
                this.state = 191;
                this.match(PromQLParser.RIGHT_PAREN);
                }
                break;
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public instantSelector(): InstantSelectorContext {
        let localContext = new InstantSelectorContext(this.context, this.state);
        this.enterRule(localContext, 18, PromQLParser.RULE_instantSelector);
        let _la: number;
        try {
            this.state = 207;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case PromQLParser.METRIC_NAME:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 195;
                this.match(PromQLParser.METRIC_NAME);
                this.state = 201;
                this.errorHandler.sync(this);
                switch (this.interpreter.adaptivePredict(this.tokenStream, 20, this.context) ) {
                case 1:
                    {
                    this.state = 196;
                    this.match(PromQLParser.LEFT_BRACE);
                    this.state = 198;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                    if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4294967280) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 4294967295) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 4294967295) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 805306369) !== 0)) {
                        {
                        this.state = 197;
                        this.labelMatcherList();
                        }
                    }

                    this.state = 200;
                    this.match(PromQLParser.RIGHT_BRACE);
                    }
                    break;
                }
                }
                break;
            case PromQLParser.LEFT_BRACE:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 203;
                this.match(PromQLParser.LEFT_BRACE);
                this.state = 204;
                this.labelMatcherList();
                this.state = 205;
                this.match(PromQLParser.RIGHT_BRACE);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public labelMatcher(): LabelMatcherContext {
        let localContext = new LabelMatcherContext(this.context, this.state);
        this.enterRule(localContext, 20, PromQLParser.RULE_labelMatcher);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 209;
            this.labelName();
            this.state = 210;
            this.labelMatcherOperator();
            this.state = 211;
            this.match(PromQLParser.STRING);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public labelMatcherOperator(): LabelMatcherOperatorContext {
        let localContext = new LabelMatcherOperatorContext(this.context, this.state);
        this.enterRule(localContext, 22, PromQLParser.RULE_labelMatcherOperator);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 213;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 103)) & ~0x1F) === 0 && ((1 << (_la - 103)) & 389) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public labelMatcherList(): LabelMatcherListContext {
        let localContext = new LabelMatcherListContext(this.context, this.state);
        this.enterRule(localContext, 24, PromQLParser.RULE_labelMatcherList);
        let _la: number;
        try {
            let alternative: number;
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 215;
            this.labelMatcher();
            this.state = 220;
            this.errorHandler.sync(this);
            alternative = this.interpreter.adaptivePredict(this.tokenStream, 22, this.context);
            while (alternative !== 2 && alternative !== antlr.ATN.INVALID_ALT_NUMBER) {
                if (alternative === 1) {
                    {
                    {
                    this.state = 216;
                    this.match(PromQLParser.COMMA);
                    this.state = 217;
                    this.labelMatcher();
                    }
                    }
                }
                this.state = 222;
                this.errorHandler.sync(this);
                alternative = this.interpreter.adaptivePredict(this.tokenStream, 22, this.context);
            }
            this.state = 224;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if (_la === 118) {
                {
                this.state = 223;
                this.match(PromQLParser.COMMA);
                }
            }

            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public matrixSelector(): MatrixSelectorContext {
        let localContext = new MatrixSelectorContext(this.context, this.state);
        this.enterRule(localContext, 26, PromQLParser.RULE_matrixSelector);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 226;
            this.instantSelector();
            this.state = 227;
            this.match(PromQLParser.TIME_RANGE);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public parameter(): ParameterContext {
        let localContext = new ParameterContext(this.context, this.state);
        this.enterRule(localContext, 28, PromQLParser.RULE_parameter);
        try {
            this.state = 231;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case PromQLParser.NUMERAL:
            case PromQLParser.SCIENTIFIC_NUMBER:
            case PromQLParser.STRING:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 229;
                this.literal();
                }
                break;
            case PromQLParser.KW_SUM:
            case PromQLParser.KW_MIN:
            case PromQLParser.KW_MAX:
            case PromQLParser.KW_AVG:
            case PromQLParser.KW_GROUP:
            case PromQLParser.KW_STDDEV:
            case PromQLParser.KW_STDVAR:
            case PromQLParser.KW_COUNT:
            case PromQLParser.KW_COUNT_VALUES:
            case PromQLParser.KW_BOTTOMK:
            case PromQLParser.KW_TOPK:
            case PromQLParser.KW_QUANTILE:
            case PromQLParser.KW_ABS:
            case PromQLParser.KW_CEIL:
            case PromQLParser.KW_FLOOR:
            case PromQLParser.KW_ROUND:
            case PromQLParser.KW_SQRT:
            case PromQLParser.KW_EXP:
            case PromQLParser.KW_LN:
            case PromQLParser.KW_LOG2:
            case PromQLParser.KW_LOG10:
            case PromQLParser.KW_SGN:
            case PromQLParser.KW_PI:
            case PromQLParser.KW_DEG:
            case PromQLParser.KW_RAD:
            case PromQLParser.KW_ACOS:
            case PromQLParser.KW_ACOSH:
            case PromQLParser.KW_ASIN:
            case PromQLParser.KW_ASINH:
            case PromQLParser.KW_ATAN:
            case PromQLParser.KW_ATANH:
            case PromQLParser.KW_COS:
            case PromQLParser.KW_COSH:
            case PromQLParser.KW_SIN:
            case PromQLParser.KW_SINH:
            case PromQLParser.KW_TAN:
            case PromQLParser.KW_TANH:
            case PromQLParser.KW_TIME:
            case PromQLParser.KW_TIMESTAMP:
            case PromQLParser.KW_HOUR:
            case PromQLParser.KW_MINUTE:
            case PromQLParser.KW_MONTH:
            case PromQLParser.KW_YEAR:
            case PromQLParser.KW_DAY_OF_MONTH:
            case PromQLParser.KW_DAY_OF_WEEK:
            case PromQLParser.KW_DAY_OF_YEAR:
            case PromQLParser.KW_DAYS_IN_MONTH:
            case PromQLParser.KW_DELTA:
            case PromQLParser.KW_DERIV:
            case PromQLParser.KW_IDELTA:
            case PromQLParser.KW_INCREASE:
            case PromQLParser.KW_RATE:
            case PromQLParser.KW_IRATE:
            case PromQLParser.KW_RESETS:
            case PromQLParser.KW_PRESENT_OVER_TIME:
            case PromQLParser.KW_HISTOGRAM_COUNT:
            case PromQLParser.KW_HISTOGRAM_SUM:
            case PromQLParser.KW_HISTOGRAM_FRACTION:
            case PromQLParser.KW_HISTOGRAM_QUANTILE:
            case PromQLParser.KW_QUANTILE_OVER_TIME:
            case PromQLParser.KW_AVG_OVER_TIME:
            case PromQLParser.KW_MIN_OVER_TIME:
            case PromQLParser.KW_MAX_OVER_TIME:
            case PromQLParser.KW_SUM_OVER_TIME:
            case PromQLParser.KW_COUNT_OVER_TIME:
            case PromQLParser.KW_STDDEV_OVER_TIME:
            case PromQLParser.KW_STDVAR_OVER_TIME:
            case PromQLParser.KW_LAST_OVER_TIME:
            case PromQLParser.KW_ABSENT:
            case PromQLParser.KW_ABSENT_OVER_TIME:
            case PromQLParser.KW_PREDICT_LINEAR:
            case PromQLParser.KW_HOLT_WINTERS:
            case PromQLParser.KW_LABEL_JOIN:
            case PromQLParser.KW_LABEL_REPLACE:
            case PromQLParser.KW_SCALAR:
            case PromQLParser.KW_VECTOR:
            case PromQLParser.KW_SORT:
            case PromQLParser.KW_SORT_DESC:
            case PromQLParser.KW_CHANGES:
            case PromQLParser.KW_CLAMP:
            case PromQLParser.KW_CLAMP_MAX:
            case PromQLParser.KW_CLAMP_MIN:
            case PromQLParser.ADD:
            case PromQLParser.SUB:
            case PromQLParser.LEFT_BRACE:
            case PromQLParser.LEFT_PAREN:
            case PromQLParser.METRIC_NAME:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 230;
                this.stmt(0);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public parameterList(): ParameterListContext {
        let localContext = new ParameterListContext(this.context, this.state);
        this.enterRule(localContext, 30, PromQLParser.RULE_parameterList);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 233;
            this.match(PromQLParser.LEFT_PAREN);
            this.state = 242;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4294934542) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 4294967295) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 4294967295) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 268763143) !== 0)) {
                {
                this.state = 234;
                this.parameter();
                this.state = 239;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 118) {
                    {
                    {
                    this.state = 235;
                    this.match(PromQLParser.COMMA);
                    this.state = 236;
                    this.parameter();
                    }
                    }
                    this.state = 241;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                }
            }

            this.state = 244;
            this.match(PromQLParser.RIGHT_PAREN);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public by(): ByContext {
        let localContext = new ByContext(this.context, this.state);
        this.enterRule(localContext, 32, PromQLParser.RULE_by);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 246;
            this.match(PromQLParser.KW_BY);
            this.state = 247;
            this.labelNameList();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public without(): WithoutContext {
        let localContext = new WithoutContext(this.context, this.state);
        this.enterRule(localContext, 34, PromQLParser.RULE_without);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 249;
            this.match(PromQLParser.KW_WITHOUT);
            this.state = 250;
            this.labelNameList();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public grouping(): GroupingContext {
        let localContext = new GroupingContext(this.context, this.state);
        this.enterRule(localContext, 36, PromQLParser.RULE_grouping);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 254;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case PromQLParser.KW_ON:
                {
                this.state = 252;
                this.on_();
                }
                break;
            case PromQLParser.KW_IGNORING:
                {
                this.state = 253;
                this.ignoring();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
            this.state = 258;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case PromQLParser.KW_GROUP_LEFT:
                {
                this.state = 256;
                this.groupLeft();
                }
                break;
            case PromQLParser.KW_GROUP_RIGHT:
                {
                this.state = 257;
                this.groupRight();
                }
                break;
            case PromQLParser.KW_SUM:
            case PromQLParser.KW_MIN:
            case PromQLParser.KW_MAX:
            case PromQLParser.KW_AVG:
            case PromQLParser.KW_GROUP:
            case PromQLParser.KW_STDDEV:
            case PromQLParser.KW_STDVAR:
            case PromQLParser.KW_COUNT:
            case PromQLParser.KW_COUNT_VALUES:
            case PromQLParser.KW_BOTTOMK:
            case PromQLParser.KW_TOPK:
            case PromQLParser.KW_QUANTILE:
            case PromQLParser.KW_ABS:
            case PromQLParser.KW_CEIL:
            case PromQLParser.KW_FLOOR:
            case PromQLParser.KW_ROUND:
            case PromQLParser.KW_SQRT:
            case PromQLParser.KW_EXP:
            case PromQLParser.KW_LN:
            case PromQLParser.KW_LOG2:
            case PromQLParser.KW_LOG10:
            case PromQLParser.KW_SGN:
            case PromQLParser.KW_PI:
            case PromQLParser.KW_DEG:
            case PromQLParser.KW_RAD:
            case PromQLParser.KW_ACOS:
            case PromQLParser.KW_ACOSH:
            case PromQLParser.KW_ASIN:
            case PromQLParser.KW_ASINH:
            case PromQLParser.KW_ATAN:
            case PromQLParser.KW_ATANH:
            case PromQLParser.KW_COS:
            case PromQLParser.KW_COSH:
            case PromQLParser.KW_SIN:
            case PromQLParser.KW_SINH:
            case PromQLParser.KW_TAN:
            case PromQLParser.KW_TANH:
            case PromQLParser.KW_TIME:
            case PromQLParser.KW_TIMESTAMP:
            case PromQLParser.KW_HOUR:
            case PromQLParser.KW_MINUTE:
            case PromQLParser.KW_MONTH:
            case PromQLParser.KW_YEAR:
            case PromQLParser.KW_DAY_OF_MONTH:
            case PromQLParser.KW_DAY_OF_WEEK:
            case PromQLParser.KW_DAY_OF_YEAR:
            case PromQLParser.KW_DAYS_IN_MONTH:
            case PromQLParser.KW_DELTA:
            case PromQLParser.KW_DERIV:
            case PromQLParser.KW_IDELTA:
            case PromQLParser.KW_INCREASE:
            case PromQLParser.KW_RATE:
            case PromQLParser.KW_IRATE:
            case PromQLParser.KW_RESETS:
            case PromQLParser.KW_PRESENT_OVER_TIME:
            case PromQLParser.KW_HISTOGRAM_COUNT:
            case PromQLParser.KW_HISTOGRAM_SUM:
            case PromQLParser.KW_HISTOGRAM_FRACTION:
            case PromQLParser.KW_HISTOGRAM_QUANTILE:
            case PromQLParser.KW_QUANTILE_OVER_TIME:
            case PromQLParser.KW_AVG_OVER_TIME:
            case PromQLParser.KW_MIN_OVER_TIME:
            case PromQLParser.KW_MAX_OVER_TIME:
            case PromQLParser.KW_SUM_OVER_TIME:
            case PromQLParser.KW_COUNT_OVER_TIME:
            case PromQLParser.KW_STDDEV_OVER_TIME:
            case PromQLParser.KW_STDVAR_OVER_TIME:
            case PromQLParser.KW_LAST_OVER_TIME:
            case PromQLParser.KW_ABSENT:
            case PromQLParser.KW_ABSENT_OVER_TIME:
            case PromQLParser.KW_PREDICT_LINEAR:
            case PromQLParser.KW_HOLT_WINTERS:
            case PromQLParser.KW_LABEL_JOIN:
            case PromQLParser.KW_LABEL_REPLACE:
            case PromQLParser.KW_SCALAR:
            case PromQLParser.KW_VECTOR:
            case PromQLParser.KW_SORT:
            case PromQLParser.KW_SORT_DESC:
            case PromQLParser.KW_CHANGES:
            case PromQLParser.KW_CLAMP:
            case PromQLParser.KW_CLAMP_MAX:
            case PromQLParser.KW_CLAMP_MIN:
            case PromQLParser.ADD:
            case PromQLParser.SUB:
            case PromQLParser.LEFT_BRACE:
            case PromQLParser.LEFT_PAREN:
            case PromQLParser.METRIC_NAME:
                break;
            default:
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public on_(): On_Context {
        let localContext = new On_Context(this.context, this.state);
        this.enterRule(localContext, 38, PromQLParser.RULE_on_);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 260;
            this.match(PromQLParser.KW_ON);
            this.state = 261;
            this.labelNameList();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public ignoring(): IgnoringContext {
        let localContext = new IgnoringContext(this.context, this.state);
        this.enterRule(localContext, 40, PromQLParser.RULE_ignoring);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 263;
            this.match(PromQLParser.KW_IGNORING);
            this.state = 264;
            this.labelNameList();
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public groupLeft(): GroupLeftContext {
        let localContext = new GroupLeftContext(this.context, this.state);
        this.enterRule(localContext, 42, PromQLParser.RULE_groupLeft);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 266;
            this.match(PromQLParser.KW_GROUP_LEFT);
            this.state = 268;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 29, this.context) ) {
            case 1:
                {
                this.state = 267;
                this.labelNameList();
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public groupRight(): GroupRightContext {
        let localContext = new GroupRightContext(this.context, this.state);
        this.enterRule(localContext, 44, PromQLParser.RULE_groupRight);
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 270;
            this.match(PromQLParser.KW_GROUP_RIGHT);
            this.state = 272;
            this.errorHandler.sync(this);
            switch (this.interpreter.adaptivePredict(this.tokenStream, 30, this.context) ) {
            case 1:
                {
                this.state = 271;
                this.labelNameList();
                }
                break;
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public labelName(): LabelNameContext {
        let localContext = new LabelNameContext(this.context, this.state);
        this.enterRule(localContext, 46, PromQLParser.RULE_labelName);
        try {
            this.state = 277;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case PromQLParser.KW_AND:
            case PromQLParser.KW_OR:
            case PromQLParser.KW_UNLESS:
            case PromQLParser.KW_BY:
            case PromQLParser.KW_WITHOUT:
            case PromQLParser.KW_ON:
            case PromQLParser.KW_IGNORING:
            case PromQLParser.KW_GROUP_LEFT:
            case PromQLParser.KW_GROUP_RIGHT:
            case PromQLParser.KW_OFFSET:
            case PromQLParser.KW_BOOL:
            case PromQLParser.KW_SUM:
            case PromQLParser.KW_MIN:
            case PromQLParser.KW_MAX:
            case PromQLParser.KW_AVG:
            case PromQLParser.KW_GROUP:
            case PromQLParser.KW_STDDEV:
            case PromQLParser.KW_STDVAR:
            case PromQLParser.KW_COUNT:
            case PromQLParser.KW_COUNT_VALUES:
            case PromQLParser.KW_BOTTOMK:
            case PromQLParser.KW_TOPK:
            case PromQLParser.KW_QUANTILE:
            case PromQLParser.KW_ABS:
            case PromQLParser.KW_CEIL:
            case PromQLParser.KW_FLOOR:
            case PromQLParser.KW_ROUND:
            case PromQLParser.KW_SQRT:
            case PromQLParser.KW_EXP:
            case PromQLParser.KW_LN:
            case PromQLParser.KW_LOG2:
            case PromQLParser.KW_LOG10:
            case PromQLParser.KW_SGN:
            case PromQLParser.KW_PI:
            case PromQLParser.KW_DEG:
            case PromQLParser.KW_RAD:
            case PromQLParser.KW_ACOS:
            case PromQLParser.KW_ACOSH:
            case PromQLParser.KW_ASIN:
            case PromQLParser.KW_ASINH:
            case PromQLParser.KW_ATAN:
            case PromQLParser.KW_ATANH:
            case PromQLParser.KW_COS:
            case PromQLParser.KW_COSH:
            case PromQLParser.KW_SIN:
            case PromQLParser.KW_SINH:
            case PromQLParser.KW_TAN:
            case PromQLParser.KW_TANH:
            case PromQLParser.KW_TIME:
            case PromQLParser.KW_TIMESTAMP:
            case PromQLParser.KW_HOUR:
            case PromQLParser.KW_MINUTE:
            case PromQLParser.KW_MONTH:
            case PromQLParser.KW_YEAR:
            case PromQLParser.KW_DAY_OF_MONTH:
            case PromQLParser.KW_DAY_OF_WEEK:
            case PromQLParser.KW_DAY_OF_YEAR:
            case PromQLParser.KW_DAYS_IN_MONTH:
            case PromQLParser.KW_DELTA:
            case PromQLParser.KW_DERIV:
            case PromQLParser.KW_IDELTA:
            case PromQLParser.KW_INCREASE:
            case PromQLParser.KW_RATE:
            case PromQLParser.KW_IRATE:
            case PromQLParser.KW_RESETS:
            case PromQLParser.KW_PRESENT_OVER_TIME:
            case PromQLParser.KW_HISTOGRAM_COUNT:
            case PromQLParser.KW_HISTOGRAM_SUM:
            case PromQLParser.KW_HISTOGRAM_FRACTION:
            case PromQLParser.KW_HISTOGRAM_QUANTILE:
            case PromQLParser.KW_QUANTILE_OVER_TIME:
            case PromQLParser.KW_AVG_OVER_TIME:
            case PromQLParser.KW_MIN_OVER_TIME:
            case PromQLParser.KW_MAX_OVER_TIME:
            case PromQLParser.KW_SUM_OVER_TIME:
            case PromQLParser.KW_COUNT_OVER_TIME:
            case PromQLParser.KW_STDDEV_OVER_TIME:
            case PromQLParser.KW_STDVAR_OVER_TIME:
            case PromQLParser.KW_LAST_OVER_TIME:
            case PromQLParser.KW_ABSENT:
            case PromQLParser.KW_ABSENT_OVER_TIME:
            case PromQLParser.KW_PREDICT_LINEAR:
            case PromQLParser.KW_HOLT_WINTERS:
            case PromQLParser.KW_LABEL_JOIN:
            case PromQLParser.KW_LABEL_REPLACE:
            case PromQLParser.KW_SCALAR:
            case PromQLParser.KW_VECTOR:
            case PromQLParser.KW_SORT:
            case PromQLParser.KW_SORT_DESC:
            case PromQLParser.KW_CHANGES:
            case PromQLParser.KW_CLAMP:
            case PromQLParser.KW_CLAMP_MAX:
            case PromQLParser.KW_CLAMP_MIN:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 274;
                this.keyword();
                }
                break;
            case PromQLParser.METRIC_NAME:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 275;
                this.match(PromQLParser.METRIC_NAME);
                }
                break;
            case PromQLParser.LABEL_NAME:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 276;
                this.match(PromQLParser.LABEL_NAME);
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public labelNameList(): LabelNameListContext {
        let localContext = new LabelNameListContext(this.context, this.state);
        this.enterRule(localContext, 48, PromQLParser.RULE_labelNameList);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 279;
            this.match(PromQLParser.LEFT_PAREN);
            this.state = 288;
            this.errorHandler.sync(this);
            _la = this.tokenStream.LA(1);
            if ((((_la) & ~0x1F) === 0 && ((1 << _la) & 4294967280) !== 0) || ((((_la - 32)) & ~0x1F) === 0 && ((1 << (_la - 32)) & 4294967295) !== 0) || ((((_la - 64)) & ~0x1F) === 0 && ((1 << (_la - 64)) & 4294967295) !== 0) || ((((_la - 96)) & ~0x1F) === 0 && ((1 << (_la - 96)) & 805306369) !== 0)) {
                {
                this.state = 280;
                this.labelName();
                this.state = 285;
                this.errorHandler.sync(this);
                _la = this.tokenStream.LA(1);
                while (_la === 118) {
                    {
                    {
                    this.state = 281;
                    this.match(PromQLParser.COMMA);
                    this.state = 282;
                    this.labelName();
                    }
                    }
                    this.state = 287;
                    this.errorHandler.sync(this);
                    _la = this.tokenStream.LA(1);
                }
                }
            }

            this.state = 290;
            this.match(PromQLParser.RIGHT_PAREN);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public aggregationOperator(): AggregationOperatorContext {
        let localContext = new AggregationOperatorContext(this.context, this.state);
        this.enterRule(localContext, 50, PromQLParser.RULE_aggregationOperator);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 292;
            _la = this.tokenStream.LA(1);
            if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 134184960) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public function_(): FunctionContext {
        let localContext = new FunctionContext(this.context, this.state);
        this.enterRule(localContext, 52, PromQLParser.RULE_function);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 294;
            _la = this.tokenStream.LA(1);
            if(!(((((_la - 27)) & ~0x1F) === 0 && ((1 << (_la - 27)) & 4294967295) !== 0) || ((((_la - 59)) & ~0x1F) === 0 && ((1 << (_la - 59)) & 4294967295) !== 0) || ((((_la - 91)) & ~0x1F) === 0 && ((1 << (_la - 91)) & 63) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public keyword(): KeywordContext {
        let localContext = new KeywordContext(this.context, this.state);
        this.enterRule(localContext, 54, PromQLParser.RULE_keyword);
        try {
            this.state = 309;
            this.errorHandler.sync(this);
            switch (this.tokenStream.LA(1)) {
            case PromQLParser.KW_AND:
                this.enterOuterAlt(localContext, 1);
                {
                this.state = 296;
                this.match(PromQLParser.KW_AND);
                }
                break;
            case PromQLParser.KW_OR:
                this.enterOuterAlt(localContext, 2);
                {
                this.state = 297;
                this.match(PromQLParser.KW_OR);
                }
                break;
            case PromQLParser.KW_UNLESS:
                this.enterOuterAlt(localContext, 3);
                {
                this.state = 298;
                this.match(PromQLParser.KW_UNLESS);
                }
                break;
            case PromQLParser.KW_BY:
                this.enterOuterAlt(localContext, 4);
                {
                this.state = 299;
                this.match(PromQLParser.KW_BY);
                }
                break;
            case PromQLParser.KW_WITHOUT:
                this.enterOuterAlt(localContext, 5);
                {
                this.state = 300;
                this.match(PromQLParser.KW_WITHOUT);
                }
                break;
            case PromQLParser.KW_ON:
                this.enterOuterAlt(localContext, 6);
                {
                this.state = 301;
                this.match(PromQLParser.KW_ON);
                }
                break;
            case PromQLParser.KW_IGNORING:
                this.enterOuterAlt(localContext, 7);
                {
                this.state = 302;
                this.match(PromQLParser.KW_IGNORING);
                }
                break;
            case PromQLParser.KW_GROUP_LEFT:
                this.enterOuterAlt(localContext, 8);
                {
                this.state = 303;
                this.match(PromQLParser.KW_GROUP_LEFT);
                }
                break;
            case PromQLParser.KW_GROUP_RIGHT:
                this.enterOuterAlt(localContext, 9);
                {
                this.state = 304;
                this.match(PromQLParser.KW_GROUP_RIGHT);
                }
                break;
            case PromQLParser.KW_OFFSET:
                this.enterOuterAlt(localContext, 10);
                {
                this.state = 305;
                this.match(PromQLParser.KW_OFFSET);
                }
                break;
            case PromQLParser.KW_BOOL:
                this.enterOuterAlt(localContext, 11);
                {
                this.state = 306;
                this.match(PromQLParser.KW_BOOL);
                }
                break;
            case PromQLParser.KW_SUM:
            case PromQLParser.KW_MIN:
            case PromQLParser.KW_MAX:
            case PromQLParser.KW_AVG:
            case PromQLParser.KW_GROUP:
            case PromQLParser.KW_STDDEV:
            case PromQLParser.KW_STDVAR:
            case PromQLParser.KW_COUNT:
            case PromQLParser.KW_COUNT_VALUES:
            case PromQLParser.KW_BOTTOMK:
            case PromQLParser.KW_TOPK:
            case PromQLParser.KW_QUANTILE:
                this.enterOuterAlt(localContext, 12);
                {
                this.state = 307;
                this.aggregationOperator();
                }
                break;
            case PromQLParser.KW_ABS:
            case PromQLParser.KW_CEIL:
            case PromQLParser.KW_FLOOR:
            case PromQLParser.KW_ROUND:
            case PromQLParser.KW_SQRT:
            case PromQLParser.KW_EXP:
            case PromQLParser.KW_LN:
            case PromQLParser.KW_LOG2:
            case PromQLParser.KW_LOG10:
            case PromQLParser.KW_SGN:
            case PromQLParser.KW_PI:
            case PromQLParser.KW_DEG:
            case PromQLParser.KW_RAD:
            case PromQLParser.KW_ACOS:
            case PromQLParser.KW_ACOSH:
            case PromQLParser.KW_ASIN:
            case PromQLParser.KW_ASINH:
            case PromQLParser.KW_ATAN:
            case PromQLParser.KW_ATANH:
            case PromQLParser.KW_COS:
            case PromQLParser.KW_COSH:
            case PromQLParser.KW_SIN:
            case PromQLParser.KW_SINH:
            case PromQLParser.KW_TAN:
            case PromQLParser.KW_TANH:
            case PromQLParser.KW_TIME:
            case PromQLParser.KW_TIMESTAMP:
            case PromQLParser.KW_HOUR:
            case PromQLParser.KW_MINUTE:
            case PromQLParser.KW_MONTH:
            case PromQLParser.KW_YEAR:
            case PromQLParser.KW_DAY_OF_MONTH:
            case PromQLParser.KW_DAY_OF_WEEK:
            case PromQLParser.KW_DAY_OF_YEAR:
            case PromQLParser.KW_DAYS_IN_MONTH:
            case PromQLParser.KW_DELTA:
            case PromQLParser.KW_DERIV:
            case PromQLParser.KW_IDELTA:
            case PromQLParser.KW_INCREASE:
            case PromQLParser.KW_RATE:
            case PromQLParser.KW_IRATE:
            case PromQLParser.KW_RESETS:
            case PromQLParser.KW_PRESENT_OVER_TIME:
            case PromQLParser.KW_HISTOGRAM_COUNT:
            case PromQLParser.KW_HISTOGRAM_SUM:
            case PromQLParser.KW_HISTOGRAM_FRACTION:
            case PromQLParser.KW_HISTOGRAM_QUANTILE:
            case PromQLParser.KW_QUANTILE_OVER_TIME:
            case PromQLParser.KW_AVG_OVER_TIME:
            case PromQLParser.KW_MIN_OVER_TIME:
            case PromQLParser.KW_MAX_OVER_TIME:
            case PromQLParser.KW_SUM_OVER_TIME:
            case PromQLParser.KW_COUNT_OVER_TIME:
            case PromQLParser.KW_STDDEV_OVER_TIME:
            case PromQLParser.KW_STDVAR_OVER_TIME:
            case PromQLParser.KW_LAST_OVER_TIME:
            case PromQLParser.KW_ABSENT:
            case PromQLParser.KW_ABSENT_OVER_TIME:
            case PromQLParser.KW_PREDICT_LINEAR:
            case PromQLParser.KW_HOLT_WINTERS:
            case PromQLParser.KW_LABEL_JOIN:
            case PromQLParser.KW_LABEL_REPLACE:
            case PromQLParser.KW_SCALAR:
            case PromQLParser.KW_VECTOR:
            case PromQLParser.KW_SORT:
            case PromQLParser.KW_SORT_DESC:
            case PromQLParser.KW_CHANGES:
            case PromQLParser.KW_CLAMP:
            case PromQLParser.KW_CLAMP_MAX:
            case PromQLParser.KW_CLAMP_MIN:
                this.enterOuterAlt(localContext, 13);
                {
                this.state = 308;
                this.function_();
                }
                break;
            default:
                throw new antlr.NoViableAltException(this);
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }
    public literal(): LiteralContext {
        let localContext = new LiteralContext(this.context, this.state);
        this.enterRule(localContext, 56, PromQLParser.RULE_literal);
        let _la: number;
        try {
            this.enterOuterAlt(localContext, 1);
            {
            this.state = 311;
            _la = this.tokenStream.LA(1);
            if(!((((_la) & ~0x1F) === 0 && ((1 << _la) & 14) !== 0))) {
            this.errorHandler.recoverInline(this);
            }
            else {
                this.errorHandler.reportMatch(this);
                this.consume();
            }
            }
        }
        catch (re) {
            if (re instanceof antlr.RecognitionException) {
                localContext.exception = re;
                this.errorHandler.reportError(this, re);
                this.errorHandler.recover(this, re);
            } else {
                throw re;
            }
        }
        finally {
            this.exitRule();
        }
        return localContext;
    }

    public override sempred(localContext: antlr.RuleContext | null, ruleIndex: number, predIndex: number): boolean {
        switch (ruleIndex) {
        case 2:
            return this.stmt_sempred(localContext as StmtContext, predIndex);
        }
        return true;
    }
    private stmt_sempred(localContext: StmtContext | null, predIndex: number): boolean {
        switch (predIndex) {
        case 0:
            return this.precpred(this.context, 11);
        case 1:
            return this.precpred(this.context, 8);
        case 2:
            return this.precpred(this.context, 7);
        case 3:
            return this.precpred(this.context, 6);
        case 4:
            return this.precpred(this.context, 5);
        case 5:
            return this.precpred(this.context, 4);
        case 6:
            return this.precpred(this.context, 3);
        case 7:
            return this.precpred(this.context, 10);
        case 8:
            return this.precpred(this.context, 2);
        }
        return true;
    }

    public static readonly _serializedATN: number[] = [
        4,1,127,314,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,2,5,7,5,2,6,
        7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,2,13,7,
        13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
        20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,
        26,2,27,7,27,2,28,7,28,1,0,5,0,60,8,0,10,0,12,0,63,9,0,1,0,1,0,1,
        1,1,1,3,1,69,8,1,1,2,1,2,1,2,1,2,1,2,3,2,76,8,2,1,2,1,2,1,2,1,2,
        1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,
        97,8,2,1,2,1,2,1,2,1,2,3,2,103,8,2,1,2,1,2,1,2,1,2,3,2,109,8,2,1,
        2,1,2,1,2,1,2,1,2,3,2,116,8,2,1,2,1,2,1,2,5,2,121,8,2,10,2,12,2,
        124,9,2,1,3,1,3,1,4,1,4,3,4,130,8,4,1,5,1,5,3,5,134,8,5,1,6,1,6,
        3,6,138,8,6,1,7,1,7,3,7,142,8,7,1,7,3,7,145,8,7,1,8,1,8,1,8,1,8,
        1,8,5,8,152,8,8,10,8,12,8,155,9,8,3,8,157,8,8,1,8,1,8,1,8,1,8,1,
        8,1,8,1,8,1,8,3,8,167,8,8,1,8,1,8,1,8,1,8,1,8,1,8,3,8,175,8,8,1,
        8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,
        8,3,8,194,8,8,1,9,1,9,1,9,3,9,199,8,9,1,9,3,9,202,8,9,1,9,1,9,1,
        9,1,9,3,9,208,8,9,1,10,1,10,1,10,1,10,1,11,1,11,1,12,1,12,1,12,5,
        12,219,8,12,10,12,12,12,222,9,12,1,12,3,12,225,8,12,1,13,1,13,1,
        13,1,14,1,14,3,14,232,8,14,1,15,1,15,1,15,1,15,5,15,238,8,15,10,
        15,12,15,241,9,15,3,15,243,8,15,1,15,1,15,1,16,1,16,1,16,1,17,1,
        17,1,17,1,18,1,18,3,18,255,8,18,1,18,1,18,3,18,259,8,18,1,19,1,19,
        1,19,1,20,1,20,1,20,1,21,1,21,3,21,269,8,21,1,22,1,22,3,22,273,8,
        22,1,23,1,23,1,23,3,23,278,8,23,1,24,1,24,1,24,1,24,5,24,284,8,24,
        10,24,12,24,287,9,24,3,24,289,8,24,1,24,1,24,1,25,1,25,1,26,1,26,
        1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,1,27,
        3,27,310,8,27,1,28,1,28,1,28,0,1,4,29,0,2,4,6,8,10,12,14,16,18,20,
        22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,0,9,2,0,4,
        4,6,6,2,0,6,6,9,9,1,0,97,98,1,0,99,101,1,0,104,109,3,0,103,103,105,
        105,110,111,1,0,15,26,1,0,27,96,1,0,1,3,346,0,61,1,0,0,0,2,66,1,
        0,0,0,4,75,1,0,0,0,6,125,1,0,0,0,8,127,1,0,0,0,10,131,1,0,0,0,12,
        135,1,0,0,0,14,139,1,0,0,0,16,193,1,0,0,0,18,207,1,0,0,0,20,209,
        1,0,0,0,22,213,1,0,0,0,24,215,1,0,0,0,26,226,1,0,0,0,28,231,1,0,
        0,0,30,233,1,0,0,0,32,246,1,0,0,0,34,249,1,0,0,0,36,254,1,0,0,0,
        38,260,1,0,0,0,40,263,1,0,0,0,42,266,1,0,0,0,44,270,1,0,0,0,46,277,
        1,0,0,0,48,279,1,0,0,0,50,292,1,0,0,0,52,294,1,0,0,0,54,309,1,0,
        0,0,56,311,1,0,0,0,58,60,3,2,1,0,59,58,1,0,0,0,60,63,1,0,0,0,61,
        59,1,0,0,0,61,62,1,0,0,0,62,64,1,0,0,0,63,61,1,0,0,0,64,65,5,0,0,
        1,65,1,1,0,0,0,66,68,3,4,2,0,67,69,5,119,0,0,68,67,1,0,0,0,68,69,
        1,0,0,0,69,3,1,0,0,0,70,71,6,2,-1,0,71,72,3,6,3,0,72,73,3,4,2,9,
        73,76,1,0,0,0,74,76,3,16,8,0,75,70,1,0,0,0,75,74,1,0,0,0,76,122,
        1,0,0,0,77,78,10,11,0,0,78,79,3,8,4,0,79,80,3,4,2,11,80,121,1,0,
        0,0,81,82,10,8,0,0,82,83,3,10,5,0,83,84,3,4,2,9,84,121,1,0,0,0,85,
        86,10,7,0,0,86,87,3,12,6,0,87,88,3,4,2,8,88,121,1,0,0,0,89,90,10,
        6,0,0,90,91,3,14,7,0,91,92,3,4,2,7,92,121,1,0,0,0,93,94,10,5,0,0,
        94,96,7,0,0,0,95,97,3,36,18,0,96,95,1,0,0,0,96,97,1,0,0,0,97,98,
        1,0,0,0,98,121,3,4,2,6,99,100,10,4,0,0,100,102,5,5,0,0,101,103,3,
        36,18,0,102,101,1,0,0,0,102,103,1,0,0,0,103,104,1,0,0,0,104,121,
        3,4,2,5,105,106,10,3,0,0,106,108,7,1,0,0,107,109,3,36,18,0,108,107,
        1,0,0,0,108,109,1,0,0,0,109,110,1,0,0,0,110,121,3,4,2,4,111,112,
        10,10,0,0,112,113,5,121,0,0,113,115,5,13,0,0,114,116,5,123,0,0,115,
        114,1,0,0,0,115,116,1,0,0,0,116,121,1,0,0,0,117,118,10,2,0,0,118,
        119,5,120,0,0,119,121,5,53,0,0,120,77,1,0,0,0,120,81,1,0,0,0,120,
        85,1,0,0,0,120,89,1,0,0,0,120,93,1,0,0,0,120,99,1,0,0,0,120,105,
        1,0,0,0,120,111,1,0,0,0,120,117,1,0,0,0,121,124,1,0,0,0,122,120,
        1,0,0,0,122,123,1,0,0,0,123,5,1,0,0,0,124,122,1,0,0,0,125,126,7,
        2,0,0,126,7,1,0,0,0,127,129,5,102,0,0,128,130,3,36,18,0,129,128,
        1,0,0,0,129,130,1,0,0,0,130,9,1,0,0,0,131,133,7,3,0,0,132,134,3,
        36,18,0,133,132,1,0,0,0,133,134,1,0,0,0,134,11,1,0,0,0,135,137,7,
        2,0,0,136,138,3,36,18,0,137,136,1,0,0,0,137,138,1,0,0,0,138,13,1,
        0,0,0,139,141,7,4,0,0,140,142,5,14,0,0,141,140,1,0,0,0,141,142,1,
        0,0,0,142,144,1,0,0,0,143,145,3,36,18,0,144,143,1,0,0,0,144,145,
        1,0,0,0,145,15,1,0,0,0,146,147,3,52,26,0,147,156,5,114,0,0,148,153,
        3,28,14,0,149,150,5,118,0,0,150,152,3,28,14,0,151,149,1,0,0,0,152,
        155,1,0,0,0,153,151,1,0,0,0,153,154,1,0,0,0,154,157,1,0,0,0,155,
        153,1,0,0,0,156,148,1,0,0,0,156,157,1,0,0,0,157,158,1,0,0,0,158,
        159,5,115,0,0,159,194,1,0,0,0,160,161,3,50,25,0,161,162,3,30,15,
        0,162,194,1,0,0,0,163,166,3,50,25,0,164,167,3,32,16,0,165,167,3,
        34,17,0,166,164,1,0,0,0,166,165,1,0,0,0,167,168,1,0,0,0,168,169,
        3,30,15,0,169,194,1,0,0,0,170,171,3,50,25,0,171,174,3,30,15,0,172,
        175,3,32,16,0,173,175,3,34,17,0,174,172,1,0,0,0,174,173,1,0,0,0,
        175,194,1,0,0,0,176,194,3,18,9,0,177,178,3,18,9,0,178,179,5,122,
        0,0,179,194,1,0,0,0,180,181,3,18,9,0,181,182,5,13,0,0,182,183,5,
        123,0,0,183,194,1,0,0,0,184,185,3,18,9,0,185,186,5,122,0,0,186,187,
        5,13,0,0,187,188,5,123,0,0,188,194,1,0,0,0,189,190,5,114,0,0,190,
        191,3,4,2,0,191,192,5,115,0,0,192,194,1,0,0,0,193,146,1,0,0,0,193,
        160,1,0,0,0,193,163,1,0,0,0,193,170,1,0,0,0,193,176,1,0,0,0,193,
        177,1,0,0,0,193,180,1,0,0,0,193,184,1,0,0,0,193,189,1,0,0,0,194,
        17,1,0,0,0,195,201,5,124,0,0,196,198,5,112,0,0,197,199,3,24,12,0,
        198,197,1,0,0,0,198,199,1,0,0,0,199,200,1,0,0,0,200,202,5,113,0,
        0,201,196,1,0,0,0,201,202,1,0,0,0,202,208,1,0,0,0,203,204,5,112,
        0,0,204,205,3,24,12,0,205,206,5,113,0,0,206,208,1,0,0,0,207,195,
        1,0,0,0,207,203,1,0,0,0,208,19,1,0,0,0,209,210,3,46,23,0,210,211,
        3,22,11,0,211,212,5,3,0,0,212,21,1,0,0,0,213,214,7,5,0,0,214,23,
        1,0,0,0,215,220,3,20,10,0,216,217,5,118,0,0,217,219,3,20,10,0,218,
        216,1,0,0,0,219,222,1,0,0,0,220,218,1,0,0,0,220,221,1,0,0,0,221,
        224,1,0,0,0,222,220,1,0,0,0,223,225,5,118,0,0,224,223,1,0,0,0,224,
        225,1,0,0,0,225,25,1,0,0,0,226,227,3,18,9,0,227,228,5,122,0,0,228,
        27,1,0,0,0,229,232,3,56,28,0,230,232,3,4,2,0,231,229,1,0,0,0,231,
        230,1,0,0,0,232,29,1,0,0,0,233,242,5,114,0,0,234,239,3,28,14,0,235,
        236,5,118,0,0,236,238,3,28,14,0,237,235,1,0,0,0,238,241,1,0,0,0,
        239,237,1,0,0,0,239,240,1,0,0,0,240,243,1,0,0,0,241,239,1,0,0,0,
        242,234,1,0,0,0,242,243,1,0,0,0,243,244,1,0,0,0,244,245,5,115,0,
        0,245,31,1,0,0,0,246,247,5,7,0,0,247,248,3,48,24,0,248,33,1,0,0,
        0,249,250,5,8,0,0,250,251,3,48,24,0,251,35,1,0,0,0,252,255,3,38,
        19,0,253,255,3,40,20,0,254,252,1,0,0,0,254,253,1,0,0,0,255,258,1,
        0,0,0,256,259,3,42,21,0,257,259,3,44,22,0,258,256,1,0,0,0,258,257,
        1,0,0,0,258,259,1,0,0,0,259,37,1,0,0,0,260,261,5,9,0,0,261,262,3,
        48,24,0,262,39,1,0,0,0,263,264,5,10,0,0,264,265,3,48,24,0,265,41,
        1,0,0,0,266,268,5,11,0,0,267,269,3,48,24,0,268,267,1,0,0,0,268,269,
        1,0,0,0,269,43,1,0,0,0,270,272,5,12,0,0,271,273,3,48,24,0,272,271,
        1,0,0,0,272,273,1,0,0,0,273,45,1,0,0,0,274,278,3,54,27,0,275,278,
        5,124,0,0,276,278,5,125,0,0,277,274,1,0,0,0,277,275,1,0,0,0,277,
        276,1,0,0,0,278,47,1,0,0,0,279,288,5,114,0,0,280,285,3,46,23,0,281,
        282,5,118,0,0,282,284,3,46,23,0,283,281,1,0,0,0,284,287,1,0,0,0,
        285,283,1,0,0,0,285,286,1,0,0,0,286,289,1,0,0,0,287,285,1,0,0,0,
        288,280,1,0,0,0,288,289,1,0,0,0,289,290,1,0,0,0,290,291,5,115,0,
        0,291,49,1,0,0,0,292,293,7,6,0,0,293,51,1,0,0,0,294,295,7,7,0,0,
        295,53,1,0,0,0,296,310,5,4,0,0,297,310,5,5,0,0,298,310,5,6,0,0,299,
        310,5,7,0,0,300,310,5,8,0,0,301,310,5,9,0,0,302,310,5,10,0,0,303,
        310,5,11,0,0,304,310,5,12,0,0,305,310,5,13,0,0,306,310,5,14,0,0,
        307,310,3,50,25,0,308,310,3,52,26,0,309,296,1,0,0,0,309,297,1,0,
        0,0,309,298,1,0,0,0,309,299,1,0,0,0,309,300,1,0,0,0,309,301,1,0,
        0,0,309,302,1,0,0,0,309,303,1,0,0,0,309,304,1,0,0,0,309,305,1,0,
        0,0,309,306,1,0,0,0,309,307,1,0,0,0,309,308,1,0,0,0,310,55,1,0,0,
        0,311,312,7,8,0,0,312,57,1,0,0,0,35,61,68,75,96,102,108,115,120,
        122,129,133,137,141,144,153,156,166,174,193,198,201,207,220,224,
        231,239,242,254,258,268,272,277,285,288,309
    ];

    private static __ATN: antlr.ATN;
    public static get _ATN(): antlr.ATN {
        if (!PromQLParser.__ATN) {
            PromQLParser.__ATN = new antlr.ATNDeserializer().deserialize(PromQLParser._serializedATN);
        }

        return PromQLParser.__ATN;
    }


    private static readonly vocabulary = new antlr.Vocabulary(PromQLParser.literalNames, PromQLParser.symbolicNames, []);

    public override get vocabulary(): antlr.Vocabulary {
        return PromQLParser.vocabulary;
    }

    private static readonly decisionsToDFA = PromQLParser._ATN.decisionToState.map( (ds: antlr.DecisionState, index: number) => new antlr.DFA(ds, index) );
}

export class ProgramContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EOF(): antlr.TerminalNode {
        return this.getToken(PromQLParser.EOF, 0)!;
    }
    public singleStmt(): SingleStmtContext[];
    public singleStmt(i: number): SingleStmtContext | null;
    public singleStmt(i?: number): SingleStmtContext[] | SingleStmtContext | null {
        if (i === undefined) {
            return this.getRuleContexts(SingleStmtContext);
        }

        return this.getRuleContext(i, SingleStmtContext);
    }
    public override get ruleIndex(): number {
        return PromQLParser.RULE_program;
    }
    public override enterRule(listener: PromQLParserListener): void {
        if(listener.enterProgram) {
             listener.enterProgram(this);
        }
    }
    public override exitRule(listener: PromQLParserListener): void {
        if(listener.exitProgram) {
             listener.exitProgram(this);
        }
    }
    public override accept<Result>(visitor: PromQLParserVisitor<Result>): Result | null {
        if (visitor.visitProgram) {
            return visitor.visitProgram(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class SingleStmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public stmt(): StmtContext {
        return this.getRuleContext(0, StmtContext)!;
    }
    public SEMI(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.SEMI, 0);
    }
    public override get ruleIndex(): number {
        return PromQLParser.RULE_singleStmt;
    }
    public override enterRule(listener: PromQLParserListener): void {
        if(listener.enterSingleStmt) {
             listener.enterSingleStmt(this);
        }
    }
    public override exitRule(listener: PromQLParserListener): void {
        if(listener.exitSingleStmt) {
             listener.exitSingleStmt(this);
        }
    }
    public override accept<Result>(visitor: PromQLParserVisitor<Result>): Result | null {
        if (visitor.visitSingleStmt) {
            return visitor.visitSingleStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class StmtContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public unaryOp(): UnaryOpContext | null {
        return this.getRuleContext(0, UnaryOpContext);
    }
    public stmt(): StmtContext[];
    public stmt(i: number): StmtContext | null;
    public stmt(i?: number): StmtContext[] | StmtContext | null {
        if (i === undefined) {
            return this.getRuleContexts(StmtContext);
        }

        return this.getRuleContext(i, StmtContext);
    }
    public vector(): VectorContext | null {
        return this.getRuleContext(0, VectorContext);
    }
    public powOp(): PowOpContext | null {
        return this.getRuleContext(0, PowOpContext);
    }
    public multOp(): MultOpContext | null {
        return this.getRuleContext(0, MultOpContext);
    }
    public addOp(): AddOpContext | null {
        return this.getRuleContext(0, AddOpContext);
    }
    public compareOp(): CompareOpContext | null {
        return this.getRuleContext(0, CompareOpContext);
    }
    public KW_AND(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.KW_AND, 0);
    }
    public KW_UNLESS(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.KW_UNLESS, 0);
    }
    public grouping(): GroupingContext | null {
        return this.getRuleContext(0, GroupingContext);
    }
    public KW_OR(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.KW_OR, 0);
    }
    public KW_ON(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.KW_ON, 0);
    }
    public SUBQUERY_RANGE(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.SUBQUERY_RANGE, 0);
    }
    public KW_OFFSET(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.KW_OFFSET, 0);
    }
    public DURATION(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.DURATION, 0);
    }
    public AT(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.AT, 0);
    }
    public KW_TIMESTAMP(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.KW_TIMESTAMP, 0);
    }
    public override get ruleIndex(): number {
        return PromQLParser.RULE_stmt;
    }
    public override enterRule(listener: PromQLParserListener): void {
        if(listener.enterStmt) {
             listener.enterStmt(this);
        }
    }
    public override exitRule(listener: PromQLParserListener): void {
        if(listener.exitStmt) {
             listener.exitStmt(this);
        }
    }
    public override accept<Result>(visitor: PromQLParserVisitor<Result>): Result | null {
        if (visitor.visitStmt) {
            return visitor.visitStmt(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class UnaryOpContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ADD(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.ADD, 0);
    }
    public SUB(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.SUB, 0);
    }
    public override get ruleIndex(): number {
        return PromQLParser.RULE_unaryOp;
    }
    public override enterRule(listener: PromQLParserListener): void {
        if(listener.enterUnaryOp) {
             listener.enterUnaryOp(this);
        }
    }
    public override exitRule(listener: PromQLParserListener): void {
        if(listener.exitUnaryOp) {
             listener.exitUnaryOp(this);
        }
    }
    public override accept<Result>(visitor: PromQLParserVisitor<Result>): Result | null {
        if (visitor.visitUnaryOp) {
            return visitor.visitUnaryOp(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class PowOpContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public POW(): antlr.TerminalNode {
        return this.getToken(PromQLParser.POW, 0)!;
    }
    public grouping(): GroupingContext | null {
        return this.getRuleContext(0, GroupingContext);
    }
    public override get ruleIndex(): number {
        return PromQLParser.RULE_powOp;
    }
    public override enterRule(listener: PromQLParserListener): void {
        if(listener.enterPowOp) {
             listener.enterPowOp(this);
        }
    }
    public override exitRule(listener: PromQLParserListener): void {
        if(listener.exitPowOp) {
             listener.exitPowOp(this);
        }
    }
    public override accept<Result>(visitor: PromQLParserVisitor<Result>): Result | null {
        if (visitor.visitPowOp) {
            return visitor.visitPowOp(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MultOpContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public MULT(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.MULT, 0);
    }
    public DIV(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.DIV, 0);
    }
    public MOD(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.MOD, 0);
    }
    public grouping(): GroupingContext | null {
        return this.getRuleContext(0, GroupingContext);
    }
    public override get ruleIndex(): number {
        return PromQLParser.RULE_multOp;
    }
    public override enterRule(listener: PromQLParserListener): void {
        if(listener.enterMultOp) {
             listener.enterMultOp(this);
        }
    }
    public override exitRule(listener: PromQLParserListener): void {
        if(listener.exitMultOp) {
             listener.exitMultOp(this);
        }
    }
    public override accept<Result>(visitor: PromQLParserVisitor<Result>): Result | null {
        if (visitor.visitMultOp) {
            return visitor.visitMultOp(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AddOpContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public ADD(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.ADD, 0);
    }
    public SUB(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.SUB, 0);
    }
    public grouping(): GroupingContext | null {
        return this.getRuleContext(0, GroupingContext);
    }
    public override get ruleIndex(): number {
        return PromQLParser.RULE_addOp;
    }
    public override enterRule(listener: PromQLParserListener): void {
        if(listener.enterAddOp) {
             listener.enterAddOp(this);
        }
    }
    public override exitRule(listener: PromQLParserListener): void {
        if(listener.exitAddOp) {
             listener.exitAddOp(this);
        }
    }
    public override accept<Result>(visitor: PromQLParserVisitor<Result>): Result | null {
        if (visitor.visitAddOp) {
            return visitor.visitAddOp(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class CompareOpContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public DEQ(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.DEQ, 0);
    }
    public NE(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.NE, 0);
    }
    public GT(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.GT, 0);
    }
    public LT(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.LT, 0);
    }
    public GE(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.GE, 0);
    }
    public LE(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.LE, 0);
    }
    public KW_BOOL(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.KW_BOOL, 0);
    }
    public grouping(): GroupingContext | null {
        return this.getRuleContext(0, GroupingContext);
    }
    public override get ruleIndex(): number {
        return PromQLParser.RULE_compareOp;
    }
    public override enterRule(listener: PromQLParserListener): void {
        if(listener.enterCompareOp) {
             listener.enterCompareOp(this);
        }
    }
    public override exitRule(listener: PromQLParserListener): void {
        if(listener.exitCompareOp) {
             listener.exitCompareOp(this);
        }
    }
    public override accept<Result>(visitor: PromQLParserVisitor<Result>): Result | null {
        if (visitor.visitCompareOp) {
            return visitor.visitCompareOp(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class VectorContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public function(): FunctionContext | null {
        return this.getRuleContext(0, FunctionContext);
    }
    public LEFT_PAREN(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.LEFT_PAREN, 0);
    }
    public RIGHT_PAREN(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.RIGHT_PAREN, 0);
    }
    public parameter(): ParameterContext[];
    public parameter(i: number): ParameterContext | null;
    public parameter(i?: number): ParameterContext[] | ParameterContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ParameterContext);
        }

        return this.getRuleContext(i, ParameterContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(PromQLParser.COMMA);
    	} else {
    		return this.getToken(PromQLParser.COMMA, i);
    	}
    }
    public aggregationOperator(): AggregationOperatorContext | null {
        return this.getRuleContext(0, AggregationOperatorContext);
    }
    public parameterList(): ParameterListContext | null {
        return this.getRuleContext(0, ParameterListContext);
    }
    public by(): ByContext | null {
        return this.getRuleContext(0, ByContext);
    }
    public without(): WithoutContext | null {
        return this.getRuleContext(0, WithoutContext);
    }
    public instantSelector(): InstantSelectorContext | null {
        return this.getRuleContext(0, InstantSelectorContext);
    }
    public TIME_RANGE(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.TIME_RANGE, 0);
    }
    public KW_OFFSET(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.KW_OFFSET, 0);
    }
    public DURATION(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.DURATION, 0);
    }
    public stmt(): StmtContext | null {
        return this.getRuleContext(0, StmtContext);
    }
    public override get ruleIndex(): number {
        return PromQLParser.RULE_vector;
    }
    public override enterRule(listener: PromQLParserListener): void {
        if(listener.enterVector) {
             listener.enterVector(this);
        }
    }
    public override exitRule(listener: PromQLParserListener): void {
        if(listener.exitVector) {
             listener.exitVector(this);
        }
    }
    public override accept<Result>(visitor: PromQLParserVisitor<Result>): Result | null {
        if (visitor.visitVector) {
            return visitor.visitVector(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class InstantSelectorContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public METRIC_NAME(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.METRIC_NAME, 0);
    }
    public LEFT_BRACE(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.LEFT_BRACE, 0);
    }
    public RIGHT_BRACE(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.RIGHT_BRACE, 0);
    }
    public labelMatcherList(): LabelMatcherListContext | null {
        return this.getRuleContext(0, LabelMatcherListContext);
    }
    public override get ruleIndex(): number {
        return PromQLParser.RULE_instantSelector;
    }
    public override enterRule(listener: PromQLParserListener): void {
        if(listener.enterInstantSelector) {
             listener.enterInstantSelector(this);
        }
    }
    public override exitRule(listener: PromQLParserListener): void {
        if(listener.exitInstantSelector) {
             listener.exitInstantSelector(this);
        }
    }
    public override accept<Result>(visitor: PromQLParserVisitor<Result>): Result | null {
        if (visitor.visitInstantSelector) {
            return visitor.visitInstantSelector(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LabelMatcherContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public labelName(): LabelNameContext {
        return this.getRuleContext(0, LabelNameContext)!;
    }
    public labelMatcherOperator(): LabelMatcherOperatorContext {
        return this.getRuleContext(0, LabelMatcherOperatorContext)!;
    }
    public STRING(): antlr.TerminalNode {
        return this.getToken(PromQLParser.STRING, 0)!;
    }
    public override get ruleIndex(): number {
        return PromQLParser.RULE_labelMatcher;
    }
    public override enterRule(listener: PromQLParserListener): void {
        if(listener.enterLabelMatcher) {
             listener.enterLabelMatcher(this);
        }
    }
    public override exitRule(listener: PromQLParserListener): void {
        if(listener.exitLabelMatcher) {
             listener.exitLabelMatcher(this);
        }
    }
    public override accept<Result>(visitor: PromQLParserVisitor<Result>): Result | null {
        if (visitor.visitLabelMatcher) {
            return visitor.visitLabelMatcher(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LabelMatcherOperatorContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public EQ(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.EQ, 0);
    }
    public NE(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.NE, 0);
    }
    public RE(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.RE, 0);
    }
    public NRE(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.NRE, 0);
    }
    public override get ruleIndex(): number {
        return PromQLParser.RULE_labelMatcherOperator;
    }
    public override enterRule(listener: PromQLParserListener): void {
        if(listener.enterLabelMatcherOperator) {
             listener.enterLabelMatcherOperator(this);
        }
    }
    public override exitRule(listener: PromQLParserListener): void {
        if(listener.exitLabelMatcherOperator) {
             listener.exitLabelMatcherOperator(this);
        }
    }
    public override accept<Result>(visitor: PromQLParserVisitor<Result>): Result | null {
        if (visitor.visitLabelMatcherOperator) {
            return visitor.visitLabelMatcherOperator(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LabelMatcherListContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public labelMatcher(): LabelMatcherContext[];
    public labelMatcher(i: number): LabelMatcherContext | null;
    public labelMatcher(i?: number): LabelMatcherContext[] | LabelMatcherContext | null {
        if (i === undefined) {
            return this.getRuleContexts(LabelMatcherContext);
        }

        return this.getRuleContext(i, LabelMatcherContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(PromQLParser.COMMA);
    	} else {
    		return this.getToken(PromQLParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return PromQLParser.RULE_labelMatcherList;
    }
    public override enterRule(listener: PromQLParserListener): void {
        if(listener.enterLabelMatcherList) {
             listener.enterLabelMatcherList(this);
        }
    }
    public override exitRule(listener: PromQLParserListener): void {
        if(listener.exitLabelMatcherList) {
             listener.exitLabelMatcherList(this);
        }
    }
    public override accept<Result>(visitor: PromQLParserVisitor<Result>): Result | null {
        if (visitor.visitLabelMatcherList) {
            return visitor.visitLabelMatcherList(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class MatrixSelectorContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public instantSelector(): InstantSelectorContext {
        return this.getRuleContext(0, InstantSelectorContext)!;
    }
    public TIME_RANGE(): antlr.TerminalNode {
        return this.getToken(PromQLParser.TIME_RANGE, 0)!;
    }
    public override get ruleIndex(): number {
        return PromQLParser.RULE_matrixSelector;
    }
    public override enterRule(listener: PromQLParserListener): void {
        if(listener.enterMatrixSelector) {
             listener.enterMatrixSelector(this);
        }
    }
    public override exitRule(listener: PromQLParserListener): void {
        if(listener.exitMatrixSelector) {
             listener.exitMatrixSelector(this);
        }
    }
    public override accept<Result>(visitor: PromQLParserVisitor<Result>): Result | null {
        if (visitor.visitMatrixSelector) {
            return visitor.visitMatrixSelector(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ParameterContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public literal(): LiteralContext | null {
        return this.getRuleContext(0, LiteralContext);
    }
    public stmt(): StmtContext | null {
        return this.getRuleContext(0, StmtContext);
    }
    public override get ruleIndex(): number {
        return PromQLParser.RULE_parameter;
    }
    public override enterRule(listener: PromQLParserListener): void {
        if(listener.enterParameter) {
             listener.enterParameter(this);
        }
    }
    public override exitRule(listener: PromQLParserListener): void {
        if(listener.exitParameter) {
             listener.exitParameter(this);
        }
    }
    public override accept<Result>(visitor: PromQLParserVisitor<Result>): Result | null {
        if (visitor.visitParameter) {
            return visitor.visitParameter(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ParameterListContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LEFT_PAREN(): antlr.TerminalNode {
        return this.getToken(PromQLParser.LEFT_PAREN, 0)!;
    }
    public RIGHT_PAREN(): antlr.TerminalNode {
        return this.getToken(PromQLParser.RIGHT_PAREN, 0)!;
    }
    public parameter(): ParameterContext[];
    public parameter(i: number): ParameterContext | null;
    public parameter(i?: number): ParameterContext[] | ParameterContext | null {
        if (i === undefined) {
            return this.getRuleContexts(ParameterContext);
        }

        return this.getRuleContext(i, ParameterContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(PromQLParser.COMMA);
    	} else {
    		return this.getToken(PromQLParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return PromQLParser.RULE_parameterList;
    }
    public override enterRule(listener: PromQLParserListener): void {
        if(listener.enterParameterList) {
             listener.enterParameterList(this);
        }
    }
    public override exitRule(listener: PromQLParserListener): void {
        if(listener.exitParameterList) {
             listener.exitParameterList(this);
        }
    }
    public override accept<Result>(visitor: PromQLParserVisitor<Result>): Result | null {
        if (visitor.visitParameterList) {
            return visitor.visitParameterList(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class ByContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_BY(): antlr.TerminalNode {
        return this.getToken(PromQLParser.KW_BY, 0)!;
    }
    public labelNameList(): LabelNameListContext {
        return this.getRuleContext(0, LabelNameListContext)!;
    }
    public override get ruleIndex(): number {
        return PromQLParser.RULE_by;
    }
    public override enterRule(listener: PromQLParserListener): void {
        if(listener.enterBy) {
             listener.enterBy(this);
        }
    }
    public override exitRule(listener: PromQLParserListener): void {
        if(listener.exitBy) {
             listener.exitBy(this);
        }
    }
    public override accept<Result>(visitor: PromQLParserVisitor<Result>): Result | null {
        if (visitor.visitBy) {
            return visitor.visitBy(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class WithoutContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_WITHOUT(): antlr.TerminalNode {
        return this.getToken(PromQLParser.KW_WITHOUT, 0)!;
    }
    public labelNameList(): LabelNameListContext {
        return this.getRuleContext(0, LabelNameListContext)!;
    }
    public override get ruleIndex(): number {
        return PromQLParser.RULE_without;
    }
    public override enterRule(listener: PromQLParserListener): void {
        if(listener.enterWithout) {
             listener.enterWithout(this);
        }
    }
    public override exitRule(listener: PromQLParserListener): void {
        if(listener.exitWithout) {
             listener.exitWithout(this);
        }
    }
    public override accept<Result>(visitor: PromQLParserVisitor<Result>): Result | null {
        if (visitor.visitWithout) {
            return visitor.visitWithout(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class GroupingContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public on_(): On_Context | null {
        return this.getRuleContext(0, On_Context);
    }
    public ignoring(): IgnoringContext | null {
        return this.getRuleContext(0, IgnoringContext);
    }
    public groupLeft(): GroupLeftContext | null {
        return this.getRuleContext(0, GroupLeftContext);
    }
    public groupRight(): GroupRightContext | null {
        return this.getRuleContext(0, GroupRightContext);
    }
    public override get ruleIndex(): number {
        return PromQLParser.RULE_grouping;
    }
    public override enterRule(listener: PromQLParserListener): void {
        if(listener.enterGrouping) {
             listener.enterGrouping(this);
        }
    }
    public override exitRule(listener: PromQLParserListener): void {
        if(listener.exitGrouping) {
             listener.exitGrouping(this);
        }
    }
    public override accept<Result>(visitor: PromQLParserVisitor<Result>): Result | null {
        if (visitor.visitGrouping) {
            return visitor.visitGrouping(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class On_Context extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_ON(): antlr.TerminalNode {
        return this.getToken(PromQLParser.KW_ON, 0)!;
    }
    public labelNameList(): LabelNameListContext {
        return this.getRuleContext(0, LabelNameListContext)!;
    }
    public override get ruleIndex(): number {
        return PromQLParser.RULE_on_;
    }
    public override enterRule(listener: PromQLParserListener): void {
        if(listener.enterOn_) {
             listener.enterOn_(this);
        }
    }
    public override exitRule(listener: PromQLParserListener): void {
        if(listener.exitOn_) {
             listener.exitOn_(this);
        }
    }
    public override accept<Result>(visitor: PromQLParserVisitor<Result>): Result | null {
        if (visitor.visitOn_) {
            return visitor.visitOn_(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class IgnoringContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_IGNORING(): antlr.TerminalNode {
        return this.getToken(PromQLParser.KW_IGNORING, 0)!;
    }
    public labelNameList(): LabelNameListContext {
        return this.getRuleContext(0, LabelNameListContext)!;
    }
    public override get ruleIndex(): number {
        return PromQLParser.RULE_ignoring;
    }
    public override enterRule(listener: PromQLParserListener): void {
        if(listener.enterIgnoring) {
             listener.enterIgnoring(this);
        }
    }
    public override exitRule(listener: PromQLParserListener): void {
        if(listener.exitIgnoring) {
             listener.exitIgnoring(this);
        }
    }
    public override accept<Result>(visitor: PromQLParserVisitor<Result>): Result | null {
        if (visitor.visitIgnoring) {
            return visitor.visitIgnoring(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class GroupLeftContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_GROUP_LEFT(): antlr.TerminalNode {
        return this.getToken(PromQLParser.KW_GROUP_LEFT, 0)!;
    }
    public labelNameList(): LabelNameListContext | null {
        return this.getRuleContext(0, LabelNameListContext);
    }
    public override get ruleIndex(): number {
        return PromQLParser.RULE_groupLeft;
    }
    public override enterRule(listener: PromQLParserListener): void {
        if(listener.enterGroupLeft) {
             listener.enterGroupLeft(this);
        }
    }
    public override exitRule(listener: PromQLParserListener): void {
        if(listener.exitGroupLeft) {
             listener.exitGroupLeft(this);
        }
    }
    public override accept<Result>(visitor: PromQLParserVisitor<Result>): Result | null {
        if (visitor.visitGroupLeft) {
            return visitor.visitGroupLeft(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class GroupRightContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_GROUP_RIGHT(): antlr.TerminalNode {
        return this.getToken(PromQLParser.KW_GROUP_RIGHT, 0)!;
    }
    public labelNameList(): LabelNameListContext | null {
        return this.getRuleContext(0, LabelNameListContext);
    }
    public override get ruleIndex(): number {
        return PromQLParser.RULE_groupRight;
    }
    public override enterRule(listener: PromQLParserListener): void {
        if(listener.enterGroupRight) {
             listener.enterGroupRight(this);
        }
    }
    public override exitRule(listener: PromQLParserListener): void {
        if(listener.exitGroupRight) {
             listener.exitGroupRight(this);
        }
    }
    public override accept<Result>(visitor: PromQLParserVisitor<Result>): Result | null {
        if (visitor.visitGroupRight) {
            return visitor.visitGroupRight(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LabelNameContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public keyword(): KeywordContext | null {
        return this.getRuleContext(0, KeywordContext);
    }
    public METRIC_NAME(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.METRIC_NAME, 0);
    }
    public LABEL_NAME(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.LABEL_NAME, 0);
    }
    public override get ruleIndex(): number {
        return PromQLParser.RULE_labelName;
    }
    public override enterRule(listener: PromQLParserListener): void {
        if(listener.enterLabelName) {
             listener.enterLabelName(this);
        }
    }
    public override exitRule(listener: PromQLParserListener): void {
        if(listener.exitLabelName) {
             listener.exitLabelName(this);
        }
    }
    public override accept<Result>(visitor: PromQLParserVisitor<Result>): Result | null {
        if (visitor.visitLabelName) {
            return visitor.visitLabelName(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LabelNameListContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public LEFT_PAREN(): antlr.TerminalNode {
        return this.getToken(PromQLParser.LEFT_PAREN, 0)!;
    }
    public RIGHT_PAREN(): antlr.TerminalNode {
        return this.getToken(PromQLParser.RIGHT_PAREN, 0)!;
    }
    public labelName(): LabelNameContext[];
    public labelName(i: number): LabelNameContext | null;
    public labelName(i?: number): LabelNameContext[] | LabelNameContext | null {
        if (i === undefined) {
            return this.getRuleContexts(LabelNameContext);
        }

        return this.getRuleContext(i, LabelNameContext);
    }
    public COMMA(): antlr.TerminalNode[];
    public COMMA(i: number): antlr.TerminalNode | null;
    public COMMA(i?: number): antlr.TerminalNode | null | antlr.TerminalNode[] {
    	if (i === undefined) {
    		return this.getTokens(PromQLParser.COMMA);
    	} else {
    		return this.getToken(PromQLParser.COMMA, i);
    	}
    }
    public override get ruleIndex(): number {
        return PromQLParser.RULE_labelNameList;
    }
    public override enterRule(listener: PromQLParserListener): void {
        if(listener.enterLabelNameList) {
             listener.enterLabelNameList(this);
        }
    }
    public override exitRule(listener: PromQLParserListener): void {
        if(listener.exitLabelNameList) {
             listener.exitLabelNameList(this);
        }
    }
    public override accept<Result>(visitor: PromQLParserVisitor<Result>): Result | null {
        if (visitor.visitLabelNameList) {
            return visitor.visitLabelNameList(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class AggregationOperatorContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_SUM(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.KW_SUM, 0);
    }
    public KW_MIN(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.KW_MIN, 0);
    }
    public KW_MAX(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.KW_MAX, 0);
    }
    public KW_AVG(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.KW_AVG, 0);
    }
    public KW_GROUP(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.KW_GROUP, 0);
    }
    public KW_STDDEV(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.KW_STDDEV, 0);
    }
    public KW_STDVAR(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.KW_STDVAR, 0);
    }
    public KW_COUNT(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.KW_COUNT, 0);
    }
    public KW_COUNT_VALUES(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.KW_COUNT_VALUES, 0);
    }
    public KW_BOTTOMK(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.KW_BOTTOMK, 0);
    }
    public KW_TOPK(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.KW_TOPK, 0);
    }
    public KW_QUANTILE(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.KW_QUANTILE, 0);
    }
    public override get ruleIndex(): number {
        return PromQLParser.RULE_aggregationOperator;
    }
    public override enterRule(listener: PromQLParserListener): void {
        if(listener.enterAggregationOperator) {
             listener.enterAggregationOperator(this);
        }
    }
    public override exitRule(listener: PromQLParserListener): void {
        if(listener.exitAggregationOperator) {
             listener.exitAggregationOperator(this);
        }
    }
    public override accept<Result>(visitor: PromQLParserVisitor<Result>): Result | null {
        if (visitor.visitAggregationOperator) {
            return visitor.visitAggregationOperator(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class FunctionContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_ABS(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.KW_ABS, 0);
    }
    public KW_ABSENT(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.KW_ABSENT, 0);
    }
    public KW_ABSENT_OVER_TIME(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.KW_ABSENT_OVER_TIME, 0);
    }
    public KW_CEIL(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.KW_CEIL, 0);
    }
    public KW_CHANGES(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.KW_CHANGES, 0);
    }
    public KW_CLAMP(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.KW_CLAMP, 0);
    }
    public KW_CLAMP_MAX(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.KW_CLAMP_MAX, 0);
    }
    public KW_CLAMP_MIN(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.KW_CLAMP_MIN, 0);
    }
    public KW_DAY_OF_MONTH(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.KW_DAY_OF_MONTH, 0);
    }
    public KW_DAY_OF_WEEK(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.KW_DAY_OF_WEEK, 0);
    }
    public KW_DAY_OF_YEAR(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.KW_DAY_OF_YEAR, 0);
    }
    public KW_DAYS_IN_MONTH(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.KW_DAYS_IN_MONTH, 0);
    }
    public KW_DELTA(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.KW_DELTA, 0);
    }
    public KW_DERIV(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.KW_DERIV, 0);
    }
    public KW_EXP(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.KW_EXP, 0);
    }
    public KW_FLOOR(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.KW_FLOOR, 0);
    }
    public KW_HISTOGRAM_COUNT(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.KW_HISTOGRAM_COUNT, 0);
    }
    public KW_HISTOGRAM_SUM(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.KW_HISTOGRAM_SUM, 0);
    }
    public KW_HISTOGRAM_FRACTION(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.KW_HISTOGRAM_FRACTION, 0);
    }
    public KW_HISTOGRAM_QUANTILE(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.KW_HISTOGRAM_QUANTILE, 0);
    }
    public KW_HOLT_WINTERS(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.KW_HOLT_WINTERS, 0);
    }
    public KW_HOUR(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.KW_HOUR, 0);
    }
    public KW_IDELTA(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.KW_IDELTA, 0);
    }
    public KW_INCREASE(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.KW_INCREASE, 0);
    }
    public KW_IRATE(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.KW_IRATE, 0);
    }
    public KW_LABEL_JOIN(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.KW_LABEL_JOIN, 0);
    }
    public KW_LABEL_REPLACE(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.KW_LABEL_REPLACE, 0);
    }
    public KW_LN(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.KW_LN, 0);
    }
    public KW_LOG2(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.KW_LOG2, 0);
    }
    public KW_LOG10(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.KW_LOG10, 0);
    }
    public KW_MINUTE(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.KW_MINUTE, 0);
    }
    public KW_MONTH(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.KW_MONTH, 0);
    }
    public KW_PREDICT_LINEAR(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.KW_PREDICT_LINEAR, 0);
    }
    public KW_RATE(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.KW_RATE, 0);
    }
    public KW_RESETS(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.KW_RESETS, 0);
    }
    public KW_ROUND(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.KW_ROUND, 0);
    }
    public KW_SCALAR(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.KW_SCALAR, 0);
    }
    public KW_SGN(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.KW_SGN, 0);
    }
    public KW_SORT(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.KW_SORT, 0);
    }
    public KW_SORT_DESC(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.KW_SORT_DESC, 0);
    }
    public KW_SQRT(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.KW_SQRT, 0);
    }
    public KW_TIME(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.KW_TIME, 0);
    }
    public KW_TIMESTAMP(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.KW_TIMESTAMP, 0);
    }
    public KW_VECTOR(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.KW_VECTOR, 0);
    }
    public KW_YEAR(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.KW_YEAR, 0);
    }
    public KW_AVG_OVER_TIME(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.KW_AVG_OVER_TIME, 0);
    }
    public KW_MIN_OVER_TIME(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.KW_MIN_OVER_TIME, 0);
    }
    public KW_MAX_OVER_TIME(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.KW_MAX_OVER_TIME, 0);
    }
    public KW_SUM_OVER_TIME(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.KW_SUM_OVER_TIME, 0);
    }
    public KW_COUNT_OVER_TIME(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.KW_COUNT_OVER_TIME, 0);
    }
    public KW_QUANTILE_OVER_TIME(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.KW_QUANTILE_OVER_TIME, 0);
    }
    public KW_STDDEV_OVER_TIME(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.KW_STDDEV_OVER_TIME, 0);
    }
    public KW_STDVAR_OVER_TIME(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.KW_STDVAR_OVER_TIME, 0);
    }
    public KW_LAST_OVER_TIME(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.KW_LAST_OVER_TIME, 0);
    }
    public KW_PRESENT_OVER_TIME(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.KW_PRESENT_OVER_TIME, 0);
    }
    public KW_ACOS(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.KW_ACOS, 0);
    }
    public KW_ACOSH(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.KW_ACOSH, 0);
    }
    public KW_ASIN(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.KW_ASIN, 0);
    }
    public KW_ASINH(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.KW_ASINH, 0);
    }
    public KW_ATAN(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.KW_ATAN, 0);
    }
    public KW_ATANH(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.KW_ATANH, 0);
    }
    public KW_COS(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.KW_COS, 0);
    }
    public KW_COSH(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.KW_COSH, 0);
    }
    public KW_SIN(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.KW_SIN, 0);
    }
    public KW_SINH(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.KW_SINH, 0);
    }
    public KW_TAN(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.KW_TAN, 0);
    }
    public KW_TANH(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.KW_TANH, 0);
    }
    public KW_DEG(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.KW_DEG, 0);
    }
    public KW_PI(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.KW_PI, 0);
    }
    public KW_RAD(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.KW_RAD, 0);
    }
    public override get ruleIndex(): number {
        return PromQLParser.RULE_function;
    }
    public override enterRule(listener: PromQLParserListener): void {
        if(listener.enterFunction) {
             listener.enterFunction(this);
        }
    }
    public override exitRule(listener: PromQLParserListener): void {
        if(listener.exitFunction) {
             listener.exitFunction(this);
        }
    }
    public override accept<Result>(visitor: PromQLParserVisitor<Result>): Result | null {
        if (visitor.visitFunction) {
            return visitor.visitFunction(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class KeywordContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public KW_AND(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.KW_AND, 0);
    }
    public KW_OR(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.KW_OR, 0);
    }
    public KW_UNLESS(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.KW_UNLESS, 0);
    }
    public KW_BY(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.KW_BY, 0);
    }
    public KW_WITHOUT(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.KW_WITHOUT, 0);
    }
    public KW_ON(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.KW_ON, 0);
    }
    public KW_IGNORING(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.KW_IGNORING, 0);
    }
    public KW_GROUP_LEFT(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.KW_GROUP_LEFT, 0);
    }
    public KW_GROUP_RIGHT(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.KW_GROUP_RIGHT, 0);
    }
    public KW_OFFSET(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.KW_OFFSET, 0);
    }
    public KW_BOOL(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.KW_BOOL, 0);
    }
    public aggregationOperator(): AggregationOperatorContext | null {
        return this.getRuleContext(0, AggregationOperatorContext);
    }
    public function(): FunctionContext | null {
        return this.getRuleContext(0, FunctionContext);
    }
    public override get ruleIndex(): number {
        return PromQLParser.RULE_keyword;
    }
    public override enterRule(listener: PromQLParserListener): void {
        if(listener.enterKeyword) {
             listener.enterKeyword(this);
        }
    }
    public override exitRule(listener: PromQLParserListener): void {
        if(listener.exitKeyword) {
             listener.exitKeyword(this);
        }
    }
    public override accept<Result>(visitor: PromQLParserVisitor<Result>): Result | null {
        if (visitor.visitKeyword) {
            return visitor.visitKeyword(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}


export class LiteralContext extends antlr.ParserRuleContext {
    public constructor(parent: antlr.ParserRuleContext | null, invokingState: number) {
        super(parent, invokingState);
    }
    public NUMERAL(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.NUMERAL, 0);
    }
    public SCIENTIFIC_NUMBER(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.SCIENTIFIC_NUMBER, 0);
    }
    public STRING(): antlr.TerminalNode | null {
        return this.getToken(PromQLParser.STRING, 0);
    }
    public override get ruleIndex(): number {
        return PromQLParser.RULE_literal;
    }
    public override enterRule(listener: PromQLParserListener): void {
        if(listener.enterLiteral) {
             listener.enterLiteral(this);
        }
    }
    public override exitRule(listener: PromQLParserListener): void {
        if(listener.exitLiteral) {
             listener.exitLiteral(this);
        }
    }
    public override accept<Result>(visitor: PromQLParserVisitor<Result>): Result | null {
        if (visitor.visitLiteral) {
            return visitor.visitLiteral(this);
        } else {
            return visitor.visitChildren(this);
        }
    }
}
