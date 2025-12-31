import { PromQL } from 'src/parser/promql';

const randomText = `dhsdansdnkla ndjnsla ndnalks`;
const sql1 = `sum(rate(`;
const sql2 = `http_requests_total{job="api"`;
const sql3 = `sum(rate(http_requests_total{job="api"[5m]}))`;
const sql4 = `sum(rate(http_requests_total{job="api"}[5m])) by method;`;
const sql5 = `sum(rate(http_requests_total{job="api"}[5m])) by (method`;
const sql6 = 'sum(rate(http_requests_total{job="api"}[5m])) by (method) offset';

describe('PromQL validate invalid queries and test error messages', () => {
    let promql: PromQL;

    beforeEach(() => {
        promql = new PromQL();
        promql.locale = 'en_US'; // 默认英文
    });

    describe('Chinese error messages (zh_CN)', () => {
        beforeEach(() => {
            promql.locale = 'zh_CN';
        });

        // test('validate random text cn', () => {
        //     const errors = promql.validate(randomText);
        //     expect(errors.length).toBe(1);
        //     expect(errors[0].message).toBe(
        //         `'ndjnsla' 在此位置无效，期望一个指标名或者一个函数名或者一个关键字`
        //     );
        // });

        test('validate unComplete sql1 cn', () => {
            const errors = promql.validate(sql1);
            expect(errors.length).toBe(2);
            expect(errors[0].message).toBe('语句不完整');
        });

        test('validate unComplete sql2 cn', () => {
            const errors = promql.validate(sql2);
            expect(errors.length).toBe(2);
            expect(errors[0].message).toBe('语句不完整');
        });

        test('validate unComplete sql3 cn', () => {
            const errors = promql.validate(sql3);
            expect(errors.length).toBe(3);
            expect(errors[0].message).toBe(`'[5m]' 在此位置无效`);
        });

        test('validate unComplete sql4 cn', () => {
            const errors = promql.validate(sql4);
            expect(errors.length).toBe(2);
            expect(errors[0].message).toBe(`缺少'('在'method'`);
        });

        test('validate unComplete sql5 cn', () => {
            const errors = promql.validate(sql5);
            expect(errors.length).toBe(1);
            expect(errors[0].message).toBe('语句不完整');
        });

        test('validate unComplete sql6 cn', () => {
            const errors = promql.validate(sql6);
            console.log(errors);
            expect(errors.length).toBe(1);
            expect(errors[0].message).toBe(`一个关键字在'offset'`);
        });
    });

    describe('English error messages', () => {
        // test('validate random text', () => {
        //     const errors = promql.validate(randomText);
        //     expect(errors.length).toBe(2);
        //     expect(errors[0].message).toBe(
        //         `'ndjnsla' is not valid at this position, expecting a metric name, function, or keyword`
        //     );
        // });

        test('validate unComplete sql1', () => {
            const errors = promql.validate(sql1);
            expect(errors.length).toBe(2);
            expect(errors[0].message).toBe('Statement is incomplete');
        });

        test('validate unComplete sql2', () => {
            const errors = promql.validate(sql2);
            expect(errors.length).toBe(2);
            expect(errors[0].message).toBe('Statement is incomplete');
        });

        test('validate unComplete sql3', () => {
            const errors = promql.validate(sql3);
            expect(errors.length).toBe(3);
            expect(errors[0].message).toBe(`'[5m]' is not valid at this position`);
        });

        test('validate unComplete sql4', () => {
            const errors = promql.validate(sql4);
            expect(errors.length).toBe(2);
            expect(errors[0].message).toBe(`missing '(' at 'method'`);
        });

        test('validate unComplete sql5', () => {
            const errors = promql.validate(sql5);
            expect(errors.length).toBe(1);
            expect(errors[0].message).toBe('Statement is incomplete');
        });

        test('validate unComplete sql6', () => {
            const errors = promql.validate(sql6);
            expect(errors.length).toBe(1);
            expect(errors[0].message).toBe(`a keyword at 'offset'`);
        });
    });
});
