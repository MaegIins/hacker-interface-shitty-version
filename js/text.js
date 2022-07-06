`use strict`;


let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let zoneTxt = document.getElementById('txt');
let txt = '';
let lastpressed = '';
zoneTxt.innerHTML = txt + " >";

document.onkeypress = (e) => {
    if (e.keyCode === 13) {
        txt = txt + '<br>';
    } else if (e.keyCode === 32) {
        txt = txt + ' ';
    } else if (e.keyCode === 8) {
        txt = txt.slice(0, -1);
    } else if (e.keyCode === 120) {
        console.log("uiii");
        if (lastpressed === 224) {
            console.log("uiiifefe");
            addCustomWords();
        }
    } else {

        for (let i = 0; i < Math.floor(Math.random() * 6) + 2; i++) {
            txt = txt + alphabet[Math.floor(Math.random() * alphabet.length)];
        }
        console.log(txt);
    }

    zoneTxt.innerHTML = txt + " >";

    console.log(e.key);

    lastpressed = e.keyCode;
}


function addCustomWords() {

    let clear = confirm('Do you want to empty the wordlist?');
    if (clear) {
        alphabet = [];
    }
    let word = prompt('Your word:');
    if (word !== null) {
        alphabet.push(" " + word + " ");

        alert('Word ' + word + ' added');
    } else {
        alert('No word added, you suck.');
    }
}