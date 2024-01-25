const express = require('express');
const router = express.Router();
const roomsController = require('../controllers/roomsController');

// POST /rooms/createRoom
router.post('/createRoom', roomsController.createRoom);

module.exports = router;
