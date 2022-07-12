`use strict`;


let circle = document.getElementById('circle');
onMouseMove = (e) => {
    circle.style.left = e.pageX+27 + 'px';
    circle.style.top = e.pageY+27 + 'px';
}
document.addEventListener('mousemove', onMouseMove);


document.onclick = (e) => {

    if (circle.style.height === '35px') {
        circle.style.height = '20px';
        circle.style.width = '20px';
    } else {
        circle.style.height = '35px';
        circle.style.width = '35px';
    }
}