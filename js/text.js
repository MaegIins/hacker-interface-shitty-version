`use strict`;




let access = ['private', 'public', 'protected', '', 'static'];
let type = ['function', 'class', 'interface', 'constructor'];
let nom = ['doThis', 'doThat', 'doThisAndThat', 'doThisAndThatAndThat', 'doThisAndThatAndThatAndThat', 'doThisAndThatAndThatAndThatAndThat'];
let variable = ['tmp', 'name', 'age', 'height', 'weight', 'test'];
let condition = ['if (', 'while (', 'for ( i = 0;'];
let operators = ['+', '-', '*', '/', '%', '++', '--', '==', '!=', '>', '<', '>=', '<=', '&&', '||', '!', '=', '+=', '-=', '*=', '/=', '%=', '&=', '|=', '^=', '<<=', '>>=', '>>>='];

let codeStructure = [access, type,nom,'(',variable,')','{',condition,variable, operators, variable,')','{',nom,'(',variable,')',';','}','}' ];
let j =0;




let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', ' ', ' ', ' '];
let zoneTxt = document.getElementById('txt');
let txt = '';
let lastpressed = '';
zoneTxt.innerHTML = "> " + txt + "|";

document.onkeydown = (e) => {
    if (e.keyCode === 13) {
        txt = txt + '<br> > ';
        if (codeStructure[j-1] !== '{') {
            j = 0;
        }
    } else if (e.keyCode === 32) {
        txt = txt + '&nbsp;';
    } else if (e.keyCode === 8) {
        txt = txt.slice(0, -1);
        zoneTxt.innerHTML = txt + "|";
    } else if (e.keyCode === 88) {
        if (lastpressed === 48) {
            addCustomWords();
        }
    } else if (e.key === 'c') {
        if (lastpressed === 48) {
            clear();
        }
    } else {
        //for (let i = 0; i < Math.floor(Math.random() * 6) + 2; i++) {

            txt = txt +' '+ codeStructure[j][Math.floor(Math.random() * codeStructure[j].length)];
            j++;
            if (j === codeStructure.length) {
                j = 0;
                txt = txt + '<br> > ';
            }
        //}
        console.log(txt);
    }

    zoneTxt.innerHTML = "> " + txt + "|";
    lastpressed = e.keyCode;
}



function addCustomWords() {
    let tmp = false;
    let clear = confirm('Do you want to empty the wordlist?');
    if (clear) {
        tmp = true;
        //alphabet = [];
    }
    let word = prompt('Your word:');
    if (word !== null) {  // if the user didn't cancel

        if (tmp) {  // if the user wanted to empty the wordlist
            //emptu the wordlist
            alphabet = [];
            //alert the user
            alert('Emptied wordlist and Word ' + word + ' added');
        } else {// if the user didn't empty the wordlist
            //don't empty the wordlist and alert the user
            alert('Word ' + word + ' added');
        }
    } else {   // if the user cancelled
        if (tmp) { // if the user wanted to empty the wordlist
            //don't empty the wordlist and alert the user
            alert('No word added, and the wordlist haven\'t been emptied because it must have at least one word');
        } else { // if the user didn't empty the wordlist
            //don't empty the wordlist and alert the user
            alert('No word added, you suck.');
        }
    }
    //word added to the alphabet
    alphabet.push(" " + word + " ");
}

function clear() {
    let clear = confirm('Do you want to empty the wordlist?');
    if (clear) {
        txt = '';
        zoneTxt.innerHTML = "> " + txt + "|";
        alert('Cleared');
    } else {
        alert('ok.');
    }

}