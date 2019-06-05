//keydown event listener
window.addEventListener('keydown', function (e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    if (!audio) return;
    audio.currentTime = 0; //reset play time
    audio.play()
    console.log(audio);
});