document.getElementById("replayBtn").addEventListener("click", function () {
  var video = document.getElementById("video");
  video.currentTime = 0; // Rewind the video to the beginning
  video.play(); // Start playing the video
});
