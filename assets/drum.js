//keydown event listener
window.addEventListener('keydown', function (e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    // select corresponding key
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    if (!audio) return; //stops function
    audio.currentTime = 0; //resets audio
    audio.play()
    key.classList.add('playing'); //add css class to event listener
    // console.log(key);
});

//remove transition from vent
function removeTransition(e){
    console.log(e)
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));