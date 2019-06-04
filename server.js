const express = require('express');
const toggleController = require('./gpio/gpioController');
let app = express();
let PORT = 3000;

app.set('view engine', 'pug');

app.use(express.static(__dirname + '/'));

app.get('/', (req, res)=> {
    res.render('index');
})

toggleController.toggleLED('green');

app.listen(PORT,  ()=>{
    console.log(`Listening on port ${PORT}`);
});
