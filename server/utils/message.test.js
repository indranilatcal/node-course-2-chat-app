var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate the correct message', () => {
        var from = 'Joe';
        var text = 'Hi';
        var message = generateMessage(from, text);
        expect(typeof message.createdAt).toBe('number');
        expect(message).toMatchObject({
            from,
            text
        });
    });
});

describe('generateLocation', () => {
    it('should generate correct location object', () => {
        var from = 'Joe';
        var latitude = 2;
        var longitude = 3;
        var message = generateLocationMessage(from, latitude, longitude);
        expect(typeof message.createdAt).toBe('number');
        expect(message).toMatchObject({
            from,
            url: `https://www.google.com/maps?q=${latitude},${longitude}`
        });
    });
});