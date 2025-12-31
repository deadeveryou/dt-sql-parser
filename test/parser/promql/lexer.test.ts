import { PromQL } from 'src/parser/promql';

describe('PromQL Lexer tests', () => {
    const promql = new PromQL();

    const sql = 'sum(rate(http_requests_total{job="api"}[5m])) by (method)';
    const tokens = promql.getAllTokens(sql);

    test('token counts', () => {
        expect(tokens.length).toBe(19);
    });
});
