const Gpio = require('onoff').Gpio;

const greenLED = new Gpio(17,'out');
const yellowLED = new Gpio(27,'out');
const redLED = new Gpio(22,'out');
const LEDArray = [greenLED, yellowLED,redLED]
//Initialize LEDs


LEDArray.forEach((LED)=>{
    LED.write(0);
});

exports.toggleLED = function  (LED) {
    switch(LED.toLowerCase()){
        case 'green':
            toggle(greenLED);
            break;

        case 'yellow':
            toggle(yellowLED);
            break;
        
        case 'red':
            toggle(greenLED);
            break;
        default: console.log('NO LED TO TOGGLE');
    }
    
}

function toggle(LED) {
    console.log('Toggling LED', LED);
    if(LED.write() === 0){
        LED.write(1);
    } else {
        LED.write(0);
    }

}
