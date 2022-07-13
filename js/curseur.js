`use strict`;


/**
 * Script managing the cursor
 * @author: Maeglins
 */





//get th cursor
let circle = document.getElementById('circle');

//on the mouse move, the cursor will move
onMouseMove = (e) => {
    circle.style.visibility = 'visible';
    //get the mouse position and set the cursor position on it
    circle.style.left = e.pageX + 27 + 'px';
    circle.style.top = e.pageY + 27 + 'px';
}


//if mouse is out of the window, the cursor will be hidden
onmouseout = () => {
    circle.style.visibility = 'hidden';
}

document.addEventListener('mousemove', onMouseMove);
document.addEventListener('mouseout', onmouseout);

//on click
document.onclick = (e) => {

    let audio = new Audio('assets/clicsound.mp3');
    //play the sound
    audio.play();

}