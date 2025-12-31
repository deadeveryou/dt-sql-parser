import { PromQL } from 'src/parser/promql';

const randomText = `dhsdansdnkla ndjnsla ndnalks`;
const unCompleteSQL = `sum(rate(`;

describe('PromQL validate invalid sql', () => {
    const promql = new PromQL();

    test('validate random text', () => {
        expect(promql.validate(randomText).length).not.toBe(0);
    });

    test('validate unComplete sql', () => {
        expect(promql.validate(unCompleteSQL).length).not.toBe(0);
    });
});
