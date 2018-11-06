const expect = require('expect');

const {Rooms} = require('./rooms');

describe('Rooms', () => {
    var rooms;
    beforeEach(() => {
        rooms = new Rooms();
        rooms.rooms = ['room1', 'room2'];
    });

    it('should not create room when it exists', () => {
        var room = 'room1';
        var res = rooms.getOrCreateRoom(room);

        expect(rooms.rooms.length).toBe(2);
        expect(res).toBe(room);
    });

    it('should not create room even with a different case when it exists', () => {
        var room = 'Room1';
        var res = rooms.getOrCreateRoom(room);

        expect(rooms.rooms.length).toBe(2);
        expect(res).toBe(rooms.rooms[0]);
    });

    it('should create room when it does not exist', () => {
        var room = 'room3';
        var res = rooms.getOrCreateRoom(room);

        expect(rooms.rooms.length).toBe(3);
        expect(res).toBe(room);
    });
});