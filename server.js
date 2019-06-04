const express = require('express');
const toggleLED = require('./gpio/gpioController').toggleLED;
let app = express();
let PORT = 3000;

app.set('view engine', 'pug');

app.use(express.static(__dirname + '/'));

app.get('/', (req, res)=> {
    res.render('index');
})

toggleLED();

app.listen(PORT,  ()=>{
    console.log(`Listening on port ${PORT}`);
});