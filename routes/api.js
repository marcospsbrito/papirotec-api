
// Dependencies
var express = require('express');
var router = express.Router();

// Models
var Card = require('../models/cards');

// Routes
Card.methods(['get', 'put', 'post', 'delete']);
Card.register(router, '/cards');

// Return router
module.exports = router;
