// Grab elements, create settings, etc.
var videos = document.getElementsByClassName('video');
var logArea = document.getElementById('log');
var playButton = document.getElementById('play');

log("start");

log(navigator.mediaDevices.getUserMedia);
log("continue");

// Get access to the camera!
if(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
    // Not adding `{ audio: true }` since we only want video now
    navigator.mediaDevices.getUserMedia({ video: true }).then(function(stream) {
        //video.src = window.URL.createObjectURL(stream);
//        console.log(stream);
        log(JSON.stringify(stream));
        log("called");
//        log(stream.getVideoTracks());
        var tracks = stream.getVideoTracks();
        log("tacks: " + tracks.length);

        playButton.addEventListener('click', function() {
            for (let video of videos) {
    //            console.log(stream);
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