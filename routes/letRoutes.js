const express = require('express');
const gpioController = require('../gpio/gpioController');

let router = express.Router();

router.get('/LED/:color', (req, res)=>{
    gpioController.toggleLED(req.params.color)
});