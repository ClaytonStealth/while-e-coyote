const prompt = require('prompt-sync')({ sigint: true });


// let input = prompt("> ") //variable for user inputted data
let numChoice = prompt("Enter some numbers,then type 'done' when complete ");
let sum = 0; //vairable for current total
if (numChoice === "done") {
    console.log("that was quick")
} else {
    while (numChoice !== "done") {
        sum = sum + Number(numChoice)
        numChoice = prompt("pick another ");
    }
}
console.log(sum)