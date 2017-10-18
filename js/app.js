document.addEventListener("DOMContentLoaded", function() {
  // const video = document.getElementsByClassName("video");
  const video = document.getElementById("video");


  // video.addEventListener('ended', returnToMenu, false);
  if(video) {
    video.addEventListener('ended', returnToMenu, false);
  }

  function returnToMenu() {
    window.location.href = 'index.html'
  }
});
