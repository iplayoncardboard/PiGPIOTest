





document.querySelector('.green').addEventListener('click', (event)=>{
    console.log('Toggling Green');
    toggleLight('green');
});


function toggleLight(LEDColor) {

    let httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = alertResult;

    httpRequest.open('GET', `/LED/${LEDColor}`);
    httpRequest.send();

    function alertResult() {
        if(httpRequest.readyState === XMLHttpRequest.DONE){
            if(httpRequest.status === 200) {
                console.log('All Good!');
            }
        } else {
            console.warn('Issue Detected: ', httpRequest.statusText);
        }
    }

}
