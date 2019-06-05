const express = require('express');
const gpioController = require('./gpio/gpioController');
// const gpioController = require('./gpio/gpioController');
let app = express();
let PORT = 3000;

const routes = require('./routes/ledRoutes')

app.set('view engine', 'pug');

app.use(express.static(__dirname + '/'));

app.get('/', (req, res)=> {
    res.render('index');
})

app.use(routes)

gpioController.initialzeLEDs();

app.listen(PORT,  ()=>{
    console.log(`Listening on port ${PORT}`);
});
