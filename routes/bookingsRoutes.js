// bookingsRoutes.js

const express = require('express');
const router = express.Router();
const bookingsController = require('../controllers/bookingsController');

// POST /bookings/bookRoom
router.post('/bookRoom', bookingsController.bookRoom);

module.exports = router;
