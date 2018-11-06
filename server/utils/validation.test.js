const expect = require('expect');

const {isRealString} = require('./validation');

describe('isRealString', () => {
    it('should reject non string', () => {
        var nonStr = 123;
        expect(isRealString(nonStr)).toBe(false);
    });

    it('should reject string with only spaces', () => {
        var strWithOnlySpaces = '   ';
        expect(isRealString(strWithOnlySpaces)).toBe(false);
    });

    it('should allow strings with non-spaces', () => {
        var str = ' Indranil    ';
        expect(isRealString(str)).toBe(true);
    });
});