// Grab elements, create settings, etc.
var videos = document.getElementsByClassName('video');
var logArea = document.getElementById('log');
var playButton = document.getElementById('play');

log("start");

// Get access to the camera!
if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    // Not adding `{ audio: true }` since we only want video now
    navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
        log("getUserMedia callback");

        playButton.addEventListener('click', function() {
            for (let video of videos) {
                video.srcObject = stream;
                log(video.play);
                video.play();
            };
        });
    }).catch(function (error) {
        log("Something went wrong!");
        log(error);
    });;
}

function log(...args) {
    console.log(...args);
    logArea.value = logArea.value + arguments + "\n";
}