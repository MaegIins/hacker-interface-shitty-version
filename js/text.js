`use strict`;

/**
 * Script managing the text of the page
 * @author: Maeglins
 */





//lib for the structure of the text
let access = ['private', 'public', 'protected', '', 'static'];
let type = ['function', 'class', 'interface', 'constructor'];
let nom = ['doThis', 'doThat', 'doThisAndThat', 'doThisAndThatAndThat', 'doThisAndThatAndThatAndThat', 'doThisAndThatAndThatAndThatAndThat','estVivant()','positionner()','seTranslaterX()','seTranslaterY()','evoluer()','avancer()','isEmpty()','toString()','lancerSort()','attaquer()','tirer()','avancer()','placer()','genererLaby()','genererCarte()'
];
let variable = ['tmp', 'name', 'age', 'height', 'weight', 'test','monster','troll','tobelin','mage','sorcerer','warrior','barbarian','aPoint','square','rectangle','circle','Losange','car','lamp','position','way','Path','wizard','valkyrie','giant','necromancer','rogue','druid','priest','werewolf','chaman','ListeTriee','ListeChainee','bow','sword','axe','Haast','dagger','Labyrinthe','Map','Carte'
];
let condition = ['if (', 'while (', 'for ( i = 0;'];
let operators = ['+', '-', '*', '/', '%', '++', '--', '==', '!=', '>', '<', '>=', '<=', '&&', '||', '!', '=', '+=', '-=', '*=', '/=', '%=', '&=', '|=', '^=', '<<=', '>>=', '>>>='];
let sautLigne = ['<br> &nbsp'];
let space = ['&nbsp; &nbsp; &nbsp; &nbsp;'];

//structure of the text
let codeStructure = [access, type, nom, '(', variable, ')', '{', sautLigne, space, condition, variable, operators, variable, ')', '{', sautLigne, space, space, nom, '(', variable, ')', ';', sautLigne, space, '}', sautLigne, '}'];
//iterator for the text
let j = 0;
//iterator for the manual mode
let f = 0;


//manual mode default length
let taille = 150;
//manual mode default state
let manu = true;
//OSELETE//array of words
let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', ' ', ' ', ' '];
//where the text is written
let zoneTxt = document.getElementById('txt');
//default text is empty
let txt = '';
//last pressed key (here default is none)
let lastpressed = '';
//default structure
zoneTxt.innerHTML = "> " + txt + "|";

//when you press a key
document.onkeydown = (e) => {
    //if the user pressed enter
    if (e.keyCode === 13) {
        //if the user press enter while in the middle of the structure
        if (j < codeStructure.length && j !== 0) {
            //return to the start of the structure
            j = 0;
            //display an error
            txt = txt + '<br> > <div class = "erreur"><strong>ERROR</strong> : incorrect structure </div><br> >';
        } else { //if the user press enter while at the start of the structure or not in the middle of it //even if it's in manual mode
            //break
            txt = txt + '<br> > ';
        }

        //if the user press enter while in the manual mode
        if (!manu) {
            //set the lign counter to 0
            f = 0;
        }
        //if the user press spacebar
    } else if (e.keyCode === 32) {
        //add a space
        txt = txt + '&nbsp;';

        //if it's in manual mode
        if (!manu) {
            //add one to the line counter
            f++;
        }
        //if the user press backspace
    } else if (e.keyCode === 8) {
        //remove the last character
        txt = txt.slice(0, -1);
        //if it's in manual mode
        if (!manu) {
            //remove one from the line counter
            f--;
        }
        // add a pipe to the end of the text
        zoneTxt.innerHTML = txt + "|";
        //if the user press x
    } else if (e.keyCode === 88) {              //OBSOLETE
        //if the last pressed key is à          //OBSOLETE
        if (lastpressed === 48) {               //OBSOLETE
            //function to add a custom word     //OBSOLETE
            addCustomWords();                   //OBSOLETE
        }                                       //OBSOLETE
        //if the user press c
    } else if (e.key === 'c') {
        //if the last pressed key is à
        if (lastpressed === 48) {
            //function to clear the text
            clear();
        }
        //if the user press q
    } else if (e.key === 'q') {
        //if the last pressed key is à
        if (lastpressed === 48) {
            //turn on the manual mode
            manu = !manu;
            //if the manual mode is on
            if (!manu) {
                //alert the user
                alert('Manual mode activated');
            } else { //if the manual mode is off
                //alert the user
                alert('Manual mode desactivated');
            }
            //clear the text
            txt = '';
            //init new text
            zoneTxt.innerHTML = "> " + txt + "|";
            //set the text iterator to 0
            j = 0;
        }
        //if the user didn't press anything pressed
    } else {
        //if the manual mode is off
        if (manu) {
            //add an element to the text
            txt = txt + ' ' + codeStructure[j][Math.floor(Math.random() * codeStructure[j].length)];
            //add one to the text counter
            j++;
            //if the text counter is at the end of the structure
            if (j === codeStructure.length) {
                //reset the text counter
                j = 0;
                //break
                txt = txt + '<br> > ';
            }
            //if the manual mode is on
        } else {
            //add the key pressed to the text
            txt = txt + e.key;
            //add one to the line counter
            f++;
            //set the line size with the window size
            taille = window.innerWidth * 0.076;
            //if the line counter is at the end of the line
            if (f > taille) {
                //break
                txt = txt + '<br> > ';
                //reset the line counter
                f = 0;
            }
        }

    }
//add the text to the screen
    zoneTxt.innerHTML = "> " + txt + "|";
    //set the last pressed key
    lastpressed = e.keyCode;
    //set the user to the end of the text
    zoneTxt.scrollTo(0, zoneTxt.scrollHeight);
}

/*
 *function to add a custom word                                                                                      //OBSOLETE
 */
function addCustomWords() {                                                                                          //OBSOLETE
    let tmp = false;                                                                                                 //OBSOLETE
    let clear = confirm('Do you want to empty the wordlist?');                                                       //OBSOLETE
    if (clear) {                                                                                                     //OBSOLETE
        tmp = true;                                                                                                  //OBSOLETE
        //alphabet = [];                                                                                             //OBSOLETE
    }                                                                                                                //OBSOLETE
    let word = prompt('Your word:');                                                                         //OBSOLETE
    if (word !== null) {  // if the user didn't cancel                                                               //OBSOLETE
        if (tmp) {  // if the user wanted to empty the wordlist                                                      //OBSOLETE
            //emptu the wordlist                                                                                     //OBSOLETE
            alphabet = [];                                                                                           //OBSOLETE
            //alert the user                                                                                         //OBSOLETE
            alert('Emptied wordlist and Word ' + word + ' added');                                                   //OBSOLETE
        } else {// if the user didn't empty the wordlist                                                             //OBSOLETE
            //don't empty the wordlist and alert the user                                                            //OBSOLETE
            alert('Word ' + word + ' added');                                                                        //OBSOLETE
        }                                                                                                            //OBSOLETE
    } else {   // if the user cancelled                                                                              //OBSOLETE
        if (tmp) { // if the user wanted to empty the wordlist                                                       //OBSOLETE
            //don't empty the wordlist and alert the user                                                            //OBSOLETE
            alert('No word added, and the wordlist haven\'t been emptied because it must have at least one word');   //OBSOLETE
        } else { // if the user didn't empty the wordlist                                                            //OBSOLETE
            //don't empty the wordlist and alert the user                                                            //OBSOLETE
            alert('No word added, you suck.');                                                                       //OBSOLETE
        }                                                                                                            //OBSOLETE
    }                                                                                                                //OBSOLETE
    //word added to the alphabet                                                                                     //OBSOLETE
    alphabet.push(" " + word + " ");                                                                                 //OBSOLETE
}                                                                                                                    //OBSOLETE

/*
 *function to clear the text
 */
function clear() {
    //ask the user if he really want to clear the text
    let clear = confirm('Do you want to empty the wordlist?');
    //if he want to clear the text
    if (clear) {
        //empty the text
        txt = '';
        //init new text
        zoneTxt.innerHTML = "> " + txt + "|";
        //alert the user
        alert('Cleared');
        //set the text iterator to 0
        j = 0;
    } else {
        //alert the user text not cleared
        alert('ok.');
    }

}