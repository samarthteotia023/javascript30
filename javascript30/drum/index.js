function playSound(event) {
    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${event.keyCode}"]`);
    if (!audio) return;

    key.classList.add('play');
    audio.currentTime = 0;
    audio.play();
  }
  function removeTransition(event){
    event.target.classList.remove('play');
  }

  window.addEventListener('transitionend',removeTransition);
  window.addEventListener('keydown', playSound);