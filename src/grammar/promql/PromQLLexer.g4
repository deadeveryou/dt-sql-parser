/*
 [The "BSD licence"]
 Copyright (c) 2013 Terence Parr
 All rights reserved.

 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions
 are met:
 1. Redistributions of source code must retain the above copyright
    notice, this list of conditions and the following disclaimer.
 2. Redistributions in binary form must reproduce the above copyright
    notice, this list of conditions and the following disclaimer in the
    documentation and/or other materials provided with the distribution.
 3. The name of the author may not be used to endorse or promote products
    derived from this software without specific prior written permission.

 THIS SOFTWARE IS PROVIDED BY THE AUTHOR ``AS IS'' AND ANY EXPRESS OR
 IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
 OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
 IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY DIRECT, INDIRECT,
 INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT
 NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF
 THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/

// $antlr-format 配置项说明：
// alignTrailingComments true       - 对齐行尾注释
// columnLimit 150                  - 每行最大字符数限制
// maxEmptyLinesToKeep 1            - 最多保留1个空行
// reflowComments false             - 不自动重排注释
// useTab false                     - 使用空格而非制表符
// allowShortRulesOnASingleLine true - 允许短规则单行显示
// allowShortBlocksOnASingleLine true - 允许短代码块单行显示
// minEmptyLines 0                  - 最小空行数
// alignSemicolons ownLine          - 分号单独成行对齐
// alignColons trailing             - 冒号右对齐
// singleLineOverrulesHangingColon true - 单行规则覆盖悬挂冒号
// alignLexerCommands true          - 对齐词法命令
// alignLabels true                 - 对齐标签
// alignTrailers true               - 对齐尾部内容


// $antlr-format alignTrailingComments true, columnLimit 150, maxEmptyLinesToKeep 1, reflowComments false, useTab false
// $antlr-format allowShortRulesOnASingleLine true, allowShortBlocksOnASingleLine true, minEmptyLines 0, alignSemicolons none, alignColons trailing
// $antlr-format singleLineOverrulesHangingColon true, alignLexerCommands true, alignLabels true, alignTrailers true
// $antlr-format spaceBeforeAssignmentOperators false, groupedAlignments true

lexer grammar PromQLLexer;
// 定义PromQL（Prometheus查询语言）的词法分析器

channels {
    WHITESPACE, // 空白字符通道（被忽略）
    COMMENTS    // 注释通道（被忽略）
}

// 所有关键字大小写不敏感（但指标名和标签名区分大小写）
options {
    caseInsensitive= true;
}

// 数字规则
NUMERAL: [0-9]+ ('.' [0-9]+)?; // 整数或小数，例如：123、45.67

SCIENTIFIC_NUMBER: NUMERAL ('e' [-+]? NUMERAL)?; // 科学计数法数字，例如：1.23e4、5e-2

STRING:
    '\'' (~('\'' | '\\') | '\\' .)* '\'' // 单引号字符串（支持转义字符）
    | '"' (~('"' | '\\') | '\\' .)* '"'; // 双引号字符串（支持转义字符）

// 关键字（PromQL保留字）
KW_AND    : 'and';    // 逻辑与操作符
KW_OR     : 'or';     // 逻辑或操作符
KW_UNLESS : 'unless'; // 条件判断中的"除非"操作（用于向量匹配）

// 聚合修饰符
KW_BY      : 'by';      // 按指定标签分组聚合（例如：sum by (instance)）
KW_WITHOUT : 'without'; // 排除指定标签的聚合（例如：sum without (instance)）

// 向量匹配修饰符
KW_ON          : 'on';          // 指定匹配标签（例如：on (job)）
KW_IGNORING    : 'ignoring';    // 忽略指定标签进行匹配
KW_GROUP_LEFT  : 'group_left';  // 左侧分组（保留左侧标签）
KW_GROUP_RIGHT : 'group_right'; // 右侧分组（保留右侧标签）

KW_OFFSET : 'offset'; // 时间偏移量（例如：metric offset 5m）
KW_BOOL   : 'bool';   // 强制结果为布尔类型（用于比较操作）

// 聚合函数
KW_SUM          : 'sum';          // 求和
KW_MIN          : 'min';          // 最小值
KW_MAX          : 'max';          // 最大值
KW_AVG          : 'avg';          // 平均值
KW_GROUP        : 'group';        // 分组（返回唯一值）
KW_STDDEV       : 'stddev';       // 标准差
KW_STDVAR       : 'stdvar';       // 方差
KW_COUNT        : 'count';        // 计数
KW_COUNT_VALUES : 'count_values'; // 按值统计出现次数
KW_BOTTOMK      : 'bottomk';      // 取最小K个值
KW_TOPK         : 'topk';         // 取最大K个值
KW_QUANTILE     : 'quantile';     // 分位数

// 数学函数
KW_ABS   : 'abs';   // 绝对值
KW_CEIL  : 'ceil';  // 向上取整
KW_FLOOR : 'floor'; // 向下取整
KW_ROUND : 'round'; // 四舍五入
KW_SQRT  : 'sqrt';  // 平方根
KW_EXP   : 'exp';   // 指数函数
KW_LN    : 'ln';    // 自然对数
KW_LOG2  : 'log2';  // 以2为底的对数
KW_LOG10 : 'log10'; // 以10为底的对数
KW_SGN   : 'sgn';   // 符号函数
KW_PI    : 'pi';    // 圆周率π
KW_DEG   : 'deg';   // 弧度转角度
KW_RAD   : 'rad';   // 角度转弧度
KW_ACOS  : 'acos';  // 反余弦
KW_ACOSH : 'acosh'; // 反双曲余弦
KW_ASIN  : 'asin';  // 反正弦
KW_ASINH : 'asinh'; // 反双曲正弦
KW_ATAN  : 'atan';  // 反正切
KW_ATANH : 'atanh'; // 反双曲正切
KW_COS   : 'cos';   // 余弦
KW_COSH  : 'cosh';  // 双曲余弦
KW_SIN   : 'sin';   // 正弦
KW_SINH  : 'sinh';  // 双曲正弦
KW_TAN   : 'tan';   // 正切
KW_TANH  : 'tanh';  // 双曲正切

// 时间函数
KW_TIME          : 'time';          // 返回当前时间戳（以秒为单位的浮点数）
KW_TIMESTAMP     : 'timestamp';     // 返回当前时间戳（以毫秒为单位的整数）
KW_HOUR          : 'hour';          // 返回时间戳的小时部分
KW_MINUTE        : 'minute';        // 返回时间戳的分钟部分
KW_MONTH         : 'month';         // 返回时间戳的月份
KW_YEAR          : 'year';          // 返回时间戳的年份
KW_DAY_OF_MONTH  : 'day_of_month';  // 返回月份中的日期
KW_DAY_OF_WEEK   : 'day_of_week';   // 返回星期几（0-6）
KW_DAY_OF_YEAR   : 'day_of_year';   // 返回一年中的第几天
KW_DAYS_IN_MONTH : 'days_in_month'; // 返回当月天数

// 指标函数
KW_DELTA             : 'delta';             // 计算区间内变化量
KW_DERIV             : 'deriv';             // 计算区间内导数
KW_IDELTA            : 'idelta';            // 计算瞬时变化量
KW_INCREASE          : 'increase';          // 计算区间内增长量
KW_RATE              : 'rate';              // 计算每秒平均增长率
KW_IRATE             : 'irate';             // 计算瞬时增长率
KW_RESETS            : 'resets';            // 计数器重置次数
KW_PRESENT_OVER_TIME : 'present_over_time'; // 检查时间范围内是否存在数据

// 直方图函数
KW_HISTOGRAM_COUNT    : 'histogram_count';    // 直方图计数
KW_HISTOGRAM_SUM      : 'histogram_sum';      // 直方图总和
KW_HISTOGRAM_FRACTION : 'histogram_fraction'; // 直方图分位数
KW_HISTOGRAM_QUANTILE : 'histogram_quantile'; // 直方图分位数计算
KW_QUANTILE_OVER_TIME : 'quantile_over_time'; // 时间序列分位数

// 聚合时间窗口函数
KW_AVG_OVER_TIME    : 'avg_over_time';    // 时间窗口平均值
KW_MIN_OVER_TIME    : 'min_over_time';    // 时间窗口最小值
KW_MAX_OVER_TIME    : 'max_over_time';    // 时间窗口最大值
KW_SUM_OVER_TIME    : 'sum_over_time';    // 时间窗口总和
KW_COUNT_OVER_TIME  : 'count_over_time';  // 时间窗口计数
KW_STDDEV_OVER_TIME : 'stddev_over_time'; // 时间窗口标准差
KW_STDVAR_OVER_TIME : 'stdvar_over_time'; // 时间窗口方差
KW_LAST_OVER_TIME   : 'last_over_time';   // 时间窗口最后一个值

// 其他函数
KW_ABSENT           : 'absent';           // 检查指标是否存在
KW_ABSENT_OVER_TIME : 'absent_over_time'; // 检查时间范围内是否存在数据
KW_PREDICT_LINEAR   : 'predict_linear';   // 线性预测
KW_HOLT_WINTERS     : 'holt_winters';     // 指数平滑预测
KW_LABEL_JOIN       : 'label_join';       // 合并标签
KW_LABEL_REPLACE    : 'label_replace';    // 替换标签值
KW_SCALAR           : 'scalar';           // 转换为标量
KW_VECTOR           : 'vector';           // 转换为向量
KW_SORT             : 'sort';             // 升序排序
KW_SORT_DESC        : 'sort_desc';        // 降序排序
KW_CHANGES          : 'changes';          // 计算值变化次数
KW_CLAMP            : 'clamp';            // 限幅函数
KW_CLAMP_MAX        : 'clamp_max';        // 上限限幅
KW_CLAMP_MIN        : 'clamp_min';        // 下限限幅
// 二元运算符
ADD  : '+'; // 加法
SUB  : '-'; // 减法
MULT : '*'; // 乘法
DIV  : '/'; // 除法
MOD  : '%'; // 取模
POW  : '^'; // 幂运算

// 比较运算符
EQ  : '=';  // 等于（用于赋值或特定上下文）
DEQ : '=='; // 等于比较
NE  : '!='; // 不等于
GT  : '>';  // 大于
LT  : '<';  // 小于
GE  : '>='; // 大于等于
LE  : '<='; // 小于等于
RE  : '=~'; // 正则匹配
NRE : '!~'; // 不匹配正则

// 语法符号
LEFT_BRACE  : '{'; // 左花括号（用于标签匹配）
RIGHT_BRACE : '}'; // 右花括号

LEFT_PAREN  : '('; // 左括号
RIGHT_PAREN : ')'; // 右括号

LEFT_BRACKET  : '['; // 左方括号
RIGHT_BRACKET : ']'; // 右方括号

COMMA : ','; // 逗号分隔符
SEMI  : ';'; // 分号（PromQL中较少使用）
AT    : '@'; // @符号（用于时间戳相关操作）

// 子查询和时间范围
SUBQUERY_RANGE:
    LEFT_BRACKET DURATION ':' DURATION? RIGHT_BRACKET; // 子查询范围表达式（格式：[range:offset]，例如[5m:1m]）
TIME_RANGE: LEFT_BRACKET DURATION RIGHT_BRACKET;       // 时间范围表达式（例如[5m]）

// 持续时间单位（支持组合）
DURATION: ([0-9]+ ('ms' | [smhdwy]))+; // 持续时间格式：5m、1h30s、2d，单位包括：
// ms（毫秒）、s（秒）、m（分钟）、h（小时）、d（天）、w（周）、y（年）

// 标识符规则
METRIC_NAME : [a-z_:] [a-z0-9_:]*; // 指标名称：允许字母/数字/下划线/冒号，开头可为字母/下划线/冒号
LABEL_NAME  : [a-z_] [a-z0-9_]*;   // 标签名称：开头必须为字母/下划线，后续为字母/数字/下划线

// 忽略规则
WS         : [\r\t\n ]+   -> channel(WHITESPACE); // 空白字符（空格/制表符/换行）
SL_COMMENT : '#' .*? '\n' -> channel(COMMENTS); // 单行注释（#开头到行尾）