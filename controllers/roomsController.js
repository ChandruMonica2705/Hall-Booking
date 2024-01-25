let rooms = [];

exports.createRoom = (req, res) => {
    const { seats, amenities, pricePerHour } = req.body;
    const room = {
        id: rooms.length + 1,
        seats,
        amenities,
        pricePerHour,
    };
    rooms.push(room);
    res.send(`Room created successfully. Room ID: ${room.id}`);
};
