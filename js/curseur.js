`use strict`;

let orientation = false;
let circle = document.getElementById('circle');
onMouseMove = (e) => {
    circle.style.left = e.pageX + 27 + 'px';
    circle.style.top = e.pageY + 27 + 'px';
}
document.addEventListener('mousemove', onMouseMove);


document.onclick = (e) => {

    let audio = new Audio('assets/clicsound.mp3');
    audio.play();

}