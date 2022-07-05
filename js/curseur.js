`use strict`;



let circle = document.getElementById('circle');
onMouseMove = (e) =>{
    circle.style.left = e.pageX + 'px';
    circle.style.top = e.pageY + 'px';
}
document.addEventListener('mousemove', onMouseMove);



document.onclick = (e) =>{
    circle.style.background = '#' + Math.floor(Math.random() * 16777215).toString(16)+'99';
}