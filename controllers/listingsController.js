// listingsController.js

const { bookings } = require('./bookingsController');

exports.listBookedData = (req, res) => {
    const bookedDataText = bookings.map(booking =>
        `Booking ID: ${booking.id}, Customer Name: ${booking.customerName}, Date: ${booking.date}, Start Time: ${booking.startTime}, End Time: ${booking.endTime}`
    ).join('<br>');

    res.send(bookedDataText);
};

exports.listCustomersWithBookedData = (req, res) => {
    const customersWithBookedDataText = bookings.map(booking =>
        `Customer Name: ${booking.customerName}, Room ID: ${booking.roomId}, Date: ${booking.date}, Start Time: ${booking.startTime}, End Time: ${booking.endTime}, Booking ID: ${booking.id}, Booking Date: ${booking.bookingDate}, Booking Status: ${booking.status}`
    ).join('<br><br>');

    res.send(customersWithBookedDataText);
};
