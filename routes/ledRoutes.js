const express = require('express');
const gpioController = require('../gpio/gpioController');

let router = express.Router();

router.post('/led/toggle:color', (req, res)=>{
    console.log(`API TOGGLING: ${req.params.color}`);
    gpioController.toggleLED(req.params.color);
    return res.status(200).send(`Toggled ${req.params.color}`);
});

module.exports = router;
