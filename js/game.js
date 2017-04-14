console.log('game.js is connected');

//A bunch of IDs as variables to make targeting them less of a hassle.
let inputBoxes = $("input");
let submitButton = $("#submitcode");
let startButton = $('#startgame');
let restartButton = $('#restartgame');
let number1 = $('#number1');
let number2 = $('#number2');
let number3 = $('#number3');
let number4 = $('#number4');
let numberInCode = $('#returnNumberInCode');
let correct = $('#returnCorrect');
let Tries = $('#triesremaining');
let winorLose = $('#winorlose');
let codeReveal = $('#codereveal');

//Changes the style of the target element to display: none via adding the hidden class.
function hide(input){
    input.addClass("hidden");
}

//Changes the style of the target element by removing the hidden class. Reveals the target element.
function show(input){
    input.removeClass("hidden");
}

//A more convenient way to clear the textContent of a targeted element. Call the function, use the element's identifying var as an argument, enjoy the reduced character count and only needing to debug one function over several copied lines.
function clearText(input){
    input.text("");
}

class Game {
    constructor(){
        this.tries = null;
        this.masterCode = null;
        this.matches = null;
        this.inCode = null;
    }
    
//More convenient way to display the number of tries remaining. While the internal code is also only one line, it contributes more characters, and thus more clutter to repeatedly use than just using a function.
    trycount(){
         Tries.text(`${this.tries} tries remaining`);
    }

//Resets masterCode before creating a new object. This is done so we only need to create one new class per page load, versus one new class per game. Uses clearText, show, and hide functions to return elements to their initial game states.
    startGame(){
        this.masterCode = []
        this.masterCode = new Code

        this.tries = 25;
        
        console.log(`Starting new game. If you want to cheat, enter game.masterCode.cheat into the console`);
        
        this.trycount();
        
        clearText(numberInCode);
        clearText(correct);
        show(inputBoxes);
        show(submitButton);
        hide(startButton);
        show(Tries);
        
    }
    
    resetbeforeGuessing(){
        for (var i = 0; i < 4; i++) {
            this.masterCode.code[i].checked = false;
        }
        
        this.inCode = 0;
        this.matches = 0;
    }

//Runs through the code, first checking how many copies of a number are in the code. Currently checks all instances of a given number, then ignores any repeats until this.checked is reset. As a result, the one number will reveal all like numbers.
    incodeCheck(input){
        for (var i = 0; i < 4; i++){
            if (input.val() == this.masterCode.code[i].value){
                if (this.masterCode.code[i].checked === true){}
                else {
                    this.masterCode.code[i].checked = true
                    this.inCode = this.inCode + 1;
                    console.log('Found a misplaced number. Breaking the loop.')
                    break;
                }
            };
        }
    }
    
    submit(){
        show(numberInCode);
        show(correct);
        
/*
Very rough logic to prevent users from inputting less than the required number of inputs. 
*/
        if (number1.val() === "") {
            window.alert("You're missing a number in the first text input!");
        }
        else if (number2.val() === "") {
            window.alert("You're missing a number in the second text input!");
        }
        else if (number3.val() === "") {
            window.alert("You're missing a number in the third text input!");
        }
        else if (number4.val() === "") {
            window.alert("You're missing a number in the fourth text input!");
        } else {
            this.tries = this.tries - 1;
            this.trycount();
            this.resetbeforeGuessing();
            this.incodeCheck(number1);
            this.incodeCheck(number2);
            this.incodeCheck(number3);
            this.incodeCheck(number4);
            
            if (number1.val() == this.masterCode.code[0].value){
                this.matches = this.matches + 1;
                this.inCode = this.inCode - 1;
            }
            if (number2.val() == this.masterCode.code[1].value){
                this.matches = this.matches + 1;
                this.inCode = this.inCode - 1;
            }
            if (number3.val() == this.masterCode.code[2].value){
                this.matches = this.matches + 1;
                this.inCode = this.inCode - 1;
            }
            if (number4.val() == this.masterCode.code[3].value){
                this.matches = this.matches + 1;
                this.inCode = this.inCode - 1;
            }
            numberInCode.text(`You found ${this.inCode} numbers in the master code, but positioned incorrectly.`);
            correct.text(`There are ${this.matches} matches with the master code.`);
            
//Checks if the player got a perfect match before checking if their tries ran out. This gives a player a chance to win on their very last chance. In an earlier iteration of the code, this was actually placed before the code was even submitted, meaning it would test your previously submitted code on whether it was a winner or not.
            if(this.matches === 4){
                winorLose.text("You Win");
                codeReveal.text(`The code was ${this.masterCode.code[0].value} ${this.masterCode.code[1].value} ${this.masterCode.code[2].value} ${this.masterCode.code[3].value}`);
                show(winorLose);
                show(codeReveal);
                show(restartButton);
                hide(inputBoxes);
                hide(submitButton);
                hide(Tries);
                hide(numberInCode);
                hide(correct);
            }
            else if (this.tries === 0) {
                winorLose.text("You Lose");
                codeReveal.text(`The code was ${this.masterCode.code[0].value} ${this.masterCode.code[1].value} ${this.masterCode.code[2].value} ${this.masterCode.code[3].value}`);
                show(winorLose);
                show(codeReveal);
                show(restartButton);
                hide(inputBoxes);
                hide(submitButton);
                hide(Tries);
                hide(numberInCode);
                hide(correct);
            }
        }
    }
    
    restart(){
        hide(restartButton);
        hide(winorLose);
        hide(codeReveal);
        this.startGame();
    }
}

$(document).ready(function(){
    game = new Game;
    
    startButton.on('click', function(){
    
        game.startGame();
});
    
    submitButton.on('click', function(){
        game.submit();
    });
    
    restartButton.on('click', function(){
        game.restart()
    })
});
