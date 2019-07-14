// Grab elements, create settings, etc.
var videos = document.getElementsByClassName('video');
var logArea = document.getElementById('log');

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
        for (let video of videos) {
//            console.log(stream);
            video.srcObject = stream;
            video.play();
        };
    });
}

function log(string) {
    logArea.value = logArea.value + string + "\n";
}