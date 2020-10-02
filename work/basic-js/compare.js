"use strict";
/* DO NOT MODIFY EXCEPT WHERE ALLOWED */
module.exports = compare; // DO NOT MODIFY - USED FOR TESTING

function compare( word, guess ) {  // DO NOT MODIFY
/* YOU MAY MODIFY THE LINES BELOW */
let num = 0;
word = word.toUpperCase();
guess = guess.toUpperCase();
const str = word.split("");
for (let letter of guess) {
    if (str.indexOf(letter) != -1) {
      num++;
    }
}
return num;
}