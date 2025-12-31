/*
 [The "BSD licence"] Copyright (c) 2013 Terence Parr All rights reserved.
 
 Redistribution and use in source and binary forms, with or without modification, are permitted
 provided that the following conditions are met: 1. Redistributions of source code must retain the
 above copyright notice, this list of conditions and the following disclaimer. 2. Redistributions in
 binary form must reproduce the above copyright notice, this list of conditions and the following
 disclaimer in the documentation and/or other materials provided with the distribution. 3. The name
 of the author may not be used to endorse or promote products derived from this software without
 specific prior written permission.
 
 THIS SOFTWARE IS PROVIDED BY THE AUTHOR ``AS IS'' AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING,
 BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
 ARE DISCLAIMED. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
 SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
 CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
 POSSIBILITY OF SUCH DAMAGE.
 */

// $antlr-format 配置说明：
// alignTrailingComments true       - 对齐行尾注释
// columnLimit 150                  - 每行最大字符数限制
// minEmptyLines 1                  - 最少保留1个空行
// maxEmptyLinesToKeep 1            - 最多保留1个空行
// reflowComments false             - 不自动重排注释
// useTab false                     - 使用空格而非制表符
// allowShortRulesOnASingleLine false - 禁止短规则单行显示（强制多行）
// allowShortBlocksOnASingleLine true - 允许短代码块单行显示
// alignSemicolons hanging          - 分号悬挂对齐（在行尾）
// alignColons hanging              - 冒号悬挂对齐（在行尾）


// $antlr-format alignTrailingComments true, columnLimit 150, minEmptyLines 1, maxEmptyLinesToKeep 1, reflowComments false, useTab false
// $antlr-format allowShortRulesOnASingleLine false, allowShortBlocksOnASingleLine true, alignSemicolons hanging, alignColons hanging
// $antlr-format spaceBeforeAssignmentOperators false, keepEmptyLinesAtTheStartOfBlocks true

parser grammar PromQLParser;

// 词法分析器配置
options {
    tokenVocab= PromQLLexer;
    // 使用PromQLLexer作为词法分析器
    superClass= SQLParserBase;
    // 生成的解析器类继承自SQLParserBase基类
}

@header {
import { SQLParserBase } from '../SQLParserBase';  // 在生成的代码中导入基类
}

// 整个查询程序由零个或多个单语句组成，以文件结束符结束
program
    : singleStmt* EOF
    ;

// 单个查询语句（可能以分号结尾，但分号可选）
singleStmt
    : stmt SEMI?
    ;

// 向量操作表达式（按优先级从高到低排列）
stmt
    : <assoc= right> stmt powOp stmt                         // 幂运算（右结合，如 a^b^c 被解析为 a^(b^c)）
    | <assoc= right> stmt SUBQUERY_RANGE KW_OFFSET DURATION? // 子查询范围+偏移（如 [5m:1m] offset 2m）
    | unaryOp stmt                                           // 单目运算符（如 -metric）
    | stmt multOp stmt                                       // 乘/除/取模（左结合）
    | stmt addOp stmt                                        // 加/减（左结合）
    | stmt compareOp stmt                                    // 比较运算符（如 ==, !=, >等）
    | stmt (KW_AND | KW_UNLESS) grouping? stmt               // 逻辑与/除非（如 metric1 and metric2）
    | stmt KW_OR grouping? stmt                              // 逻辑或（如 metric1 or metric2）
    | stmt (KW_ON | KW_UNLESS) grouping? stmt                // 向量匹配的on/unless子句（如 metric1 on (job) metric2）
    | stmt AT KW_TIMESTAMP                                   // 时间戳操作（如 metric @ 1234567890）
    | vector                                                 // 基本向量表达式（指标、函数、聚合等）
    ;

// 单目运算符（+/-）
unaryOp
    : (ADD | SUB)
    ;

// 幂运算符（^）
powOp
    : POW grouping?
    ;

// 乘除模运算符（* / %）
multOp
    : (MULT | DIV | MOD) grouping?
    ;

// 加减运算符（+ -）
addOp
    : (ADD | SUB) grouping?
    ;

// 比较运算符（= == != > < >= <=）
compareOp
    : (DEQ | NE | GT | LT | GE | LE) KW_BOOL? grouping? // 可选bool修饰符（强制布尔结果）
    ;

// 向量表达式（核心结构）
vector
    : function LEFT_PAREN (parameter (COMMA parameter)*)? RIGHT_PAREN // 函数调用（如 avg_over_time(metric[5m])）
    | aggregationOperator parameterList                               // 聚合操作（如 sum(metric)）
    | aggregationOperator (by | without) parameterList                // 聚合+by/without（如 sum by (instance) (metric)）
    | aggregationOperator parameterList (by | without)                // 聚合参数后接by/without
    | instantSelector                                                 // 瞬时选择器（如 metric{job="a"}）
    | instantSelector TIME_RANGE                                      // 范围选择器（如 metric[5m]）
    | instantSelector KW_OFFSET DURATION                              // 偏移量（如 metric offset 5m）
    | instantSelector TIME_RANGE KW_OFFSET DURATION                   // 范围选择器+偏移（如 metric[5m] offset 2m）
    | LEFT_PAREN stmt RIGHT_PAREN                                     // 括号表达式（如 (metric + 1)）
    ;

// 瞬时选择器（指标+标签匹配）
instantSelector
    : METRIC_NAME (LEFT_BRACE labelMatcherList? RIGHT_BRACE)? // 指标名+可选标签（如 http_requests{job="api"}）
    | LEFT_BRACE labelMatcherList RIGHT_BRACE                 // 仅标签匹配（如 {job="api"}）
    ;

// 单个标签匹配规则（key operator value）
labelMatcher
    : labelName labelMatcherOperator STRING // 例如 job="api" 或 instance=~"node.*"
    ;

// 标签匹配操作符（= != =~ !~）
labelMatcherOperator
    : EQ  // 精确匹配
    | NE  // 不匹配
    | RE  // 正则匹配
    | NRE // 不匹配正则
    ;

// 标签匹配列表（多个匹配项）
labelMatcherList
    : labelMatcher (COMMA labelMatcher)* COMMA? // 例如 {job="api", instance="node1"}
    ;

// 参数（字面量或向量操作）
parameter
    : literal // 字面量（数字/字符串）
    | stmt    // 向量操作表达式（如 metric+1）
    ;

// 参数列表（括号包裹的参数序列）
parameterList
    : LEFT_PAREN (parameter (COMMA parameter)*)? RIGHT_PAREN // 例如 (5, 10) 或 (metric[5m], 0.5)
    ;

// by子句（聚合时的分组标签）
by
    : KW_BY labelNameList // 例如 by (instance, job)
    ;

// without子句（聚合时排除的标签）
without
    : KW_WITHOUT labelNameList // 例如 without (instance)
    ;

// 向量匹配分组规则（on/ignoring + group_left/right）
grouping
    : (on_ | ignoring) (groupLeft | groupRight)? // 例如 on (job) group_left(instance)
    ;

// on子句（指定匹配标签）
on_
    : KW_ON labelNameList // 例如 on (job)
    ;

// ignoring子句（忽略匹配标签）
ignoring
    : KW_IGNORING labelNameList // 例如 ignoring (instance)
    ;

// group_left子句（左侧保留标签）
groupLeft
    : KW_GROUP_LEFT labelNameList? // 例如 group_left(instance)
    ;

// group_right子句（右侧保留标签）
groupRight
    : KW_GROUP_RIGHT labelNameList? // 例如 group_right(job)
    ;

// 标签名（可以是关键字、指标名或普通标签名）
labelName
    : keyword     // 关键字（如 "by" 但实际不推荐）
    | METRIC_NAME // 指标名（如 http_requests）
    | LABEL_NAME  // 普通标签名（如 instance）
    ;

// 标签名列表（括号包裹的标签序列）
labelNameList
    : LEFT_PAREN (labelName (COMMA labelName)*)? RIGHT_PAREN // 例如 (instance, job)
    ;

// 聚合操作符（sum/min/max等）
aggregationOperator
    : KW_SUM          // 求和
    | KW_MIN          // 最小值
    | KW_MAX          // 最大值
    | KW_AVG          // 平均值
    | KW_GROUP        // 分组
    | KW_STDDEV       // 标准差
    | KW_STDVAR       // 方差
    | KW_COUNT        // 计数
    | KW_COUNT_VALUES // 按值统计
    | KW_BOTTOMK      // 取最小K个
    | KW_TOPK         // 取最大K个
    | KW_QUANTILE     // 分位数
    ;

// 函数名称（abs/avg_over_time等）
function
    : KW_ABS                // 绝对值
    | KW_ABSENT             // 检查指标是否存在
    | KW_ABSENT_OVER_TIME   // 时间范围内检查是否存在
    | KW_CEIL               // 向上取整
    | KW_CHANGES            // 计算值变化次数
    | KW_CLAMP              // 限幅
    | KW_CLAMP_MAX          // 上限限幅
    | KW_CLAMP_MIN          // 下限限幅
    | KW_DAY_OF_MONTH       // 月份中的日期
    | KW_DAY_OF_WEEK        // 星期几
    | KW_DAY_OF_YEAR        // 一年中的第几天
    | KW_DAYS_IN_MONTH      // 当月天数
    | KW_DELTA              // 区间内变化量
    | KW_DERIV              // 区间内导数
    | KW_EXP                // 指数函数
    | KW_FLOOR              // 向下取整
    | KW_HISTOGRAM_COUNT    // 直方图计数
    | KW_HISTOGRAM_SUM      // 直方图总和
    | KW_HISTOGRAM_FRACTION // 直方图分位数
    | KW_HISTOGRAM_QUANTILE // 直方图分位数计算
    | KW_HOLT_WINTERS       // 指数平滑预测
    | KW_HOUR               // 时间戳小时
    | KW_IDELTA             // 瞬时变化量
    | KW_INCREASE           // 区间内增长量
    | KW_IRATE              // 瞬时增长率
    | KW_LABEL_JOIN         // 合并标签
    | KW_LABEL_REPLACE      // 替换标签值
    | KW_LN                 // 自然对数
    | KW_LOG2               // 以2为底对数
    | KW_LOG10              // 以10为底对数
    | KW_MINUTE             // 时间戳分钟
    | KW_MONTH              // 时间戳月份
    | KW_PREDICT_LINEAR     // 线性预测
    | KW_RATE               // 每秒平均增长率
    | KW_RESETS             // 计数器重置次数
    | KW_ROUND              // 四舍五入
    | KW_SCALAR             // 转换为标量
    | KW_SGN                // 符号函数
    | KW_SORT               // 升序排序
    | KW_SORT_DESC          // 降序排序
    | KW_SQRT               // 平方根
    | KW_TIME               // 当前时间戳
    | KW_TIMESTAMP          // 时间戳
    | KW_VECTOR             // 转换为向量
    | KW_YEAR               // 时间戳年份
    | KW_AVG_OVER_TIME      // 时间窗口平均值
    | KW_MIN_OVER_TIME      // 时间窗口最小值
    | KW_MAX_OVER_TIME      // 时间窗口最大值
    | KW_SUM_OVER_TIME      // 时间窗口总和
    | KW_COUNT_OVER_TIME    // 时间窗口计数
    | KW_QUANTILE_OVER_TIME // 时间窗口分位数
    | KW_STDDEV_OVER_TIME   // 时间窗口标准差
    | KW_STDVAR_OVER_TIME   // 时间窗口方差
    | KW_LAST_OVER_TIME     // 时间窗口最后一个值
    | KW_PRESENT_OVER_TIME  // 时间范围内是否存在数据
    | KW_ACOS               // 反余弦
    | KW_ACOSH              // 反双曲余弦
    | KW_ASIN               // 反正弦
    | KW_ASINH              // 反双曲正弦
    | KW_ATAN               // 反正切
    | KW_ATANH              // 反双曲正切
    | KW_COS                // 余弦
    | KW_COSH               // 双曲余弦
    | KW_SIN                // 正弦
    | KW_SINH               // 双曲正弦
    | KW_TAN                // 正切
    | KW_TANH               // 双曲正切
    | KW_DEG                // 弧度转角度
    | KW_PI                 // 圆周率
    | KW_RAD                // 角度转弧度
    ;

// 所有关键字（包括运算符、函数、聚合等）
keyword
    : KW_AND              // 逻辑与
    | KW_OR               // 逻辑或
    | KW_UNLESS           // 除非（向量匹配）
    | KW_BY               // 聚合分组
    | KW_WITHOUT          // 聚合排除
    | KW_ON               // 向量匹配on子句
    | KW_IGNORING         // 向量匹配ignoring子句
    | KW_GROUP_LEFT       // 向量匹配group_left
    | KW_GROUP_RIGHT      // 向量匹配group_right
    | KW_OFFSET           // 时间偏移
    | KW_BOOL             // 布尔修饰符
    | aggregationOperator // 所有聚合操作符
    | function            // 所有函数
    ;

// 字面量（数字、字符串）
literal
    : NUMERAL           // 整数/小数（如 123, 45.67）
    | SCIENTIFIC_NUMBER // 科学计数法（如 1.23e4）
    | STRING            // 字符串（如 "value"）
    ;