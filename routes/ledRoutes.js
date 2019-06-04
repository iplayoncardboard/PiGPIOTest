const express = require('express');
const gpioController = require('../gpio/gpioController');

let router = express.Router();

router.get('/LED/:color', (req, res)=>{
    console.log(`API TOGGLING: ${req.params.color}`);
    gpioController.toggleLED(req.params.color);
});

module.exports = router;