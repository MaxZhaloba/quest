var videos = document.getElementsByClassName('video');
var logArea = document.getElementById('log');
var playButton = document.getElementById('play');

log("DOM Ready");

playButton.addEventListener('click', function() {
    log("Starting video");
    if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        var mediaModes = [
            { video: { facingMode: { exact: "environment"}}} ,
            { video: true} // Fallback for desktop
        ];

        initCamera(mediaModes);
    }
});

function initCamera(mediaModes, modeNumber=0) {
    var mediaMode = mediaModes[modeNumber];

    if (mediaMode) {
        navigator.mediaDevices.getUserMedia(mediaMode).then(function(stream) {
            log("getUserMedia callback");
            for (let video of videos) {
                video.srcObject = stream;
                video.play();
            };
            playButton.classList.add("hidden");
            log("Video started");
        }).catch(function (error) {
            log("Failed to initialize camera using media mode No " + modeNumber);
            log(error);
            initCamera(mediaModes, 1+modeNumber)
        });
    } else {
        log("No supported video modes detected");
    }
}

function log(...args) {
    console.log(...args);
    logArea.value = logArea.value + arguments + "\n";
}