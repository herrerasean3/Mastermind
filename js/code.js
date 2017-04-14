console.log('code.js is connected');

/*Code for random number generation taken from the MDN. Check it out at:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
*/
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

class Code{


//Sets indexes 0 through 3 of masterCode.code to randomly generated numbers ranging from 0 to 9. It then converts each index into a Number class using number.js
    constructor(){
        this.code = [];
        this.cheat = [];
        for (var i = 0; i < 4; i++){
            this.code[i] = getRandomIntInclusive(0, 9);
            this.cheat[i] = this.code[i];
            this.code[i] = new Number(this.code[i]);
        }
    }
    
}

