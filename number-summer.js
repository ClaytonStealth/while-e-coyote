const prompt = require('prompt-sync')({ sigint: true });

let numChoice = prompt("Enter some numbers,then type done when complete ");
let sum = 0;
if (numChoice === "done") {
    console.log("that was quick")
} else {
    while (numChoice !== "done") {
        sum = sum + Number(numChoice)
        numChoice = prompt("pick another ");
    }
}
console.log(sum)