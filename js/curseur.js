`use strict`;

//get th cursor
let circle = document.getElementById('circle');

//on the mouse move, the cursor will move
onMouseMove = (e) => {
    //get the mouse position and set the cursor position on it
    circle.style.left = e.pageX + 27 + 'px';
    circle.style.top = e.pageY + 27 + 'px';
}
//
document.addEventListener('mousemove', onMouseMove);

//on click
document.onclick = (e) => {

    let audio = new Audio('assets/clicsound.mp3');
    //play the sound
    audio.play();

}