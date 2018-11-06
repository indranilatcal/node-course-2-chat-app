class Rooms {
    constructor(){
        this.rooms = [];
    }

    getOrCreateRoom(room){
        var existingRoom = this.rooms.filter(item => item.toLowerCase() === room.toLowerCase())[0];
        if(!existingRoom){
            this.rooms.push(room);
            existingRoom = room;
        }
        return existingRoom;
    }
}

module.exports = { Rooms };