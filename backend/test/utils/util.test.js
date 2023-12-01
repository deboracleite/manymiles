import { formatDate, dollarFormat } from '../../src/app/utils/utils';

describe("Utils - Unit Test", () => {
    test('1) formatDate - should be able to format the date for the correct format', async () => {
        expect(formatDate('2023-06-16')).toBe('Thu, Jun 15, 2023');
    });

    test('2) formatDate - should return the same date case can not convert the date', async () => {

        expect(formatDate('aaaa-aa-aa')).toBe('aaaa-aa-aa');
    });

    test('3) dollarFormat - should be able to format the value for the USD format', async () => {
        expect(dollarFormat(100)).toBe("$100.00");
    });

    test('4) formatDate - should return the same value case can not convert', async () => {
        expect(dollarFormat('test')).toBe('test');
    });

})