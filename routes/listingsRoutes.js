// listingsRoutes.js

const express = require('express');
const router = express.Router();
const listingsController = require('../controllers/listingsController');

// GET /listings/bookedData
router.get('/bookedData', listingsController.listBookedData);

// GET /listings/customersWithBookedData
router.get('/customersWithBookedData', listingsController.listCustomersWithBookedData);

module.exports = router;
