const prompt = require('prompt-sync')({ sigint: true });

let numChoice = Number(prompt("Enter a number for the doubler "));
// let sum = 0;

while (numChoice < 100){
    numChoice = numChoice * 2
    console.log(numChoice)
}
