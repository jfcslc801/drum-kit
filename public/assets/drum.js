//hints query selector
hints = document.querySelectorAll(".hints");

function hintsOn(e, index) {
    e.setAttribute("style", "transition-delay:" + index * 50 + "ms");
}

hints.forEach(hintsOn);

//keydown event listener
function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    // select corresponding key
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    if (!audio) return; //stops function
    audio.currentTime = 0; //resets audio
    audio.play()
    key.classList.add('playing'); //add css class to event listener
};
window.addEventListener('keydown', playSound);


//remove transition from event
function removeTransition(e) {
    if (e.propertyName !== 'transform') return;
    // console.log(e.propertyName);
    this.classList.remove('playing')
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));


//onclick keynote function 
function playSound2(e) {
    const audio = document.querySelector('audio')
    if (!audio) return; //stops function
    audio.currentTime = 0; //resets audio
    audio.play()
    console.log(e)
}
window.addEventListener('click', playSound2);



