var videos = document.getElementsByClassName('video');
var logArea = document.getElementById('log');
var playButton = document.getElementById('play');

log("DOM Ready");

if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
        log("getUserMedia callback");

        playButton.addEventListener('click', function() {
            log("Starting video");
            for (let video of videos) {
                video.srcObject = stream;
                video.play();
            };
            playButton.classList.add("hidden");
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