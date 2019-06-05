
document.querySelector('.green').addEventListener('click', (event)=>{
    toggleLight('green');
});

document.querySelector('.yellow').addEventListener('click', (event)=>{
    toggleLight('yellow');
});

document.querySelector('.red').addEventListener('click', (event)=>{
    toggleLight('red');
});

document.querySelector('.initialize').addEventListener('click', ()=>{
    initializeLEDS();
});
function toggleLight(LEDColor) {

    let httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = alertResult;

    httpRequest.open('POST', `/led/toggle/${LEDColor}`);
    httpRequest.send();

    function alertResult() {
        if(httpRequest.readyState === XMLHttpRequest.DONE){
           
            if(httpRequest.status === 200) {
                console.log('All Good!');
            }
            else {
                console.warn('Issue Detected: ', httpRequest.statusText);
            }
        } 
    }

}

function initializeLEDS() {

    let httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = alertResult;

    httpRequest.open('POST', `/led/initailize`);
    httpRequest.send();

    function alertResult() {
        if(httpRequest.readyState === XMLHttpRequest.DONE){
           
            if(httpRequest.status === 200) {
                console.log('All Good!');
            }
            else {
                console.warn('Issue Detected: ', httpRequest.statusText);
            }
        } 
    }

}


