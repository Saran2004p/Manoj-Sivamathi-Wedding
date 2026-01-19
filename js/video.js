document.addEventListener('DOMContentLoaded', () => {
  const mainVideo = document.querySelector('.video-main');

  if (!mainVideo) return;

  mainVideo.addEventListener('click', () => {
    if (mainVideo.muted) {
      mainVideo.muted = false;
      mainVideo.volume = 1;
      mainVideo.play();
    } else {
      mainVideo.muted = true;
    }
  });
});
