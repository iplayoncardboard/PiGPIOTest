const Gpio = require('onoff').Gpio;

const greenLED = new Gpio(17,'out');
const yellowLED = new Gpio(27,'out');
const redLED = new Gpio(22,'out');
const LEDArray = [greenLED, yellowLED,redLED]

circuitState = {};
exports.toggleLED = function  (LED) {
    switch(LED.toLowerCase()){
        case 'green':
             toggle(greenLED);
             break;

        case 'yellow':
            toggle(yellowLED);
            break;
            
        case 'red':
             toggle(redLED);
             break;
             
        default: 
            return {LEDstate: 'Error'}
    }
    
}

function toggle(LED) {
    if(LED.readSync() === 0){
        LED.write(1).then(()=>{
            return 'on';
        });
    } else {
        LED.write(0).then(()=>{
            return 'off';
        });
    }

}


exports.initialzeLEDs = function () {
    LEDArray.forEach((LED)=>{
        LED.write(1);
        LED.write(0);
    });
    }