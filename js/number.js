console.log('number.js is connected')

//Creates the variables for each Number object in the code. value returns the numbers numeric value, checked is used for skipping over a number that has already been checked. This prevents abnormally high reports on the amount of incorrectly placed numbers. Also prevents a player from learning how many copies of a number are in the code with a single one. 
class Number{
    constructor(value){
        this.value = value;
        this.checked = false;    
    }
    
}