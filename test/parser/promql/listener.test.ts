import { PromQL } from 'src/parser/promql';
import { PromQLParserListener } from 'src/lib/promql/PromQLParserListener';

describe('PromQL Listener Tests', () => {
    const expectMetricName = 'http_requests_total';
    const sql = `sum(rate(${expectMetricName}{job="api"}[5m])) by (method);`;
    const promql = new PromQL();

    const parseTree = promql.parse(sql);

    test('Listener enterMetricName', async () => {
        let result = '';
        class MyListener extends PromQLParserListener {
            enterMetricName = (ctx): void => {
                result = ctx.getText().toLowerCase();
            };
        }
        const listener = new MyListener();

        promql.listen(listener, parseTree);
        expect(result).toBe(expectMetricName);
    });

    test('Split sql listener', async () => {
        const singleStatementArr = [
            `sum(rate(http_requests_total{job="api"}[5m])) by (method);`,
            `avg(container_memory_usage_bytes{container!="POD"}) by (instance);`,
            `histogram_quantile(0.9, sum(rate(http_request_duration_seconds_bucket[5m])) by (le))`,
        ];
        const sql = singleStatementArr.join('\n');
        const sqlSlices = promql.splitSQLByStatement(sql);

        expect(sqlSlices).not.toBeNull();

        // check text in result
        expect(sqlSlices.map((item) => item.text)).toEqual(singleStatementArr);

        // check startIndex and endIndex in result
        sqlSlices.forEach((slice, index) => {
            expect(sql.slice(slice.startIndex, slice.endIndex + 1)).toBe(singleStatementArr[index]);
        });

        // check lineNumber in result
        expect(sqlSlices[0].startLine).toBe(1);
        expect(sqlSlices[0].endLine).toBe(1);
        expect(sqlSlices[1].startLine).toBe(2);
        expect(sqlSlices[1].endLine).toBe(2);
        expect(sqlSlices[2].startLine).toBe(3);
        expect(sqlSlices[2].endLine).toBe(3);
    });
});
