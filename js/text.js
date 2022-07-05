`use strict`;


let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let zoneTxt = document.getElementById('txt');
let txt = '';

document.onkeypress = (e) => {
    if (e.keyCode == 13) {
        txt = txt + '<br>';
    } else if (e.keyCode == 32) {
        txt = txt + ' ';
    } else if (e.keyCode == 8) {
        txt = txt.replace(/.$/, '');


    } else {

        for (let i = 0; i < Math.floor(Math.random() * 6) + 2; i++) {
            txt = txt + alphabet[Math.floor(Math.random() * alphabet.length)];
        }
        console.log(txt);
    }

    zoneTxt.innerHTML = txt;
}