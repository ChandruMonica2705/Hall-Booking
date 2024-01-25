// index.js

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

// Load routes
const roomsRoutes = require('./routes/roomsRoutes');
const bookingsRoutes = require('./routes/bookingsRoutes');
const listingsRoutes = require('./routes/listingsRoutes');

// Use routes
app.use('/rooms', roomsRoutes);
app.use('/bookings', bookingsRoutes);
app.use('/listings', listingsRoutes);

// Welcome message with links
app.get('/', (req, res) => {
    res.send(`
    <head>
                <title>Hall Booking App </title>
            </head>
        <h1>Welcome to the Hall Booking App!</h1>
    `);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
