document.addEventListener("DOMContentLoaded", function() {
  // const video = document.getElementsByClassName("video");
  const video1 = document.getElementById("video1");
  const video2 = document.getElementById("video2");
  const video3 = document.getElementById("video3");

  // video.addEventListener('ended', returnToMenu, false);

  video1.addEventListener('ended', returnToMenu, false);
  video2.addEventListener('ended', returnToMenu, false);
  video3.addEventListener('ended', returnToMenu, false);

  function returnToMenu() {
    window.location.href = 'index.html'
  }
});
