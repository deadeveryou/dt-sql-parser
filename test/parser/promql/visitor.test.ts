import { PromQL } from 'src/parser/promql';
import { PromQLParserVisitor } from 'src/lib/promql/PromQLParserVisitor';

describe('PromQL Visitor Tests', () => {
    const expectMetricName = 'http_requests_total';
    const sql = `sum(rate(${expectMetricName}{job="api"}[5m])) by (method);`;
    const promql = new PromQL();

    const parseTree = promql.parse(sql, (error, ctx) => {
        console.error('Raw input:', sql);
        console.error('Error context:', ctx);
    });

    test('Visitor visitMetricName', () => {
        class MyVisitor extends PromQLParserVisitor<string> {
            defaultResult(): string {
                return '';
            }
            aggregateResult(aggregate: string, nextResult: string): string {
                return aggregate + nextResult;
            }
            visitProgram = (ctx) => {
                return this.visitChildren(ctx);
            };
            visitMetricName = (ctx) => {
                return ctx.getText().toLowerCase();
            };
        }
        const visitor = new MyVisitor();
        const result = visitor.visit(parseTree);

        expect(result).toBe(expectMetricName);
    });
});
