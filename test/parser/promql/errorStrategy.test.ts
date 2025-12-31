import { PromQL } from 'src/parser/promql';
import { PromQLSplitListener } from 'src/parser/promql/promqlSplitListener';
import { PromQLParserListener } from 'src/lib/promql/PromQLParserListener';

const validSQL1 = `sum(rate(http_requests_total{job="api"}[5m])) by (method);`;
const validSQL2 = 'avg(container_memory_usage_bytes{container!="POD"}) by (instance);';
const inValidSQL = 'sum(rate(';

describe('PromQL ErrorStrategy test', () => {
    const promql = new PromQL();
    test('begin inValid', () => {
        const sql = [inValidSQL, validSQL1, validSQL2].join('\n');
        // parse with empty errorListener
        const parseTree = promql.parse(sql, () => {});
        const splitListener = new PromQLSplitListener();
        promql.listen(splitListener as PromQLParserListener, parseTree);

        const statementCount = splitListener.statementsContext.length;
        splitListener.statementsContext.map((item, index) => {
            if (index !== statementCount - 1 && index !== statementCount - 2) {
                console.log(item.exception);
                expect(item.exception).not.toBe(null);
            } else {
                expect(item.exception).toBe(null);
            }
        });
    });

    test('middle inValid', () => {
        const sql = [validSQL1, inValidSQL, validSQL2].join('\n');
        // parse with empty errorListener
        const parseTree = promql.parse(sql, () => {});
        const splitListener = new PromQLSplitListener();
        promql.listen(splitListener as PromQLParserListener, parseTree);

        const statementCount = splitListener.statementsContext.length;
        splitListener.statementsContext.map((item, index) => {
            if (index !== statementCount - 1 && index !== 0) {
                expect(item.exception).not.toBe(null);
            } else {
                expect(item.exception).toBe(null);
            }
        });
    });

    test('end inValid', () => {
        const sql = [validSQL1, validSQL2, inValidSQL].join('\n');
        // parse with empty errorListener
        const parseTree = promql.parse(sql, () => {});
        const splitListener = new PromQLSplitListener();
        promql.listen(splitListener as PromQLParserListener, parseTree);

        splitListener.statementsContext.map((item, index) => {
            if (index !== 0 && index !== 1) {
                expect(item.exception).not.toBe(null);
            } else {
                expect(item.exception).toBe(null);
            }
        });
    });
});
