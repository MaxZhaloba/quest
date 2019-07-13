// Grab elements, create settings, etc.
var videos = document.getElementsByClassName('video');
var logArea = document.getElementById('log');

// Get access to the camera!
if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    // Not adding `{ audio: true }` since we only want video now
    navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
        //video.src = window.URL.createObjectURL(stream);
//        console.log(stream);
//        log(stream);
        for (let video of videos) {
            video.srcObject = stream;
            video.play();
        };
    });
}

function log(obj) {
    logArea.value = logArea.value + JSON.stringify(obj) + "\n";
}