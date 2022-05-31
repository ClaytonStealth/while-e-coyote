const prompt = require('prompt-sync')({ sigint: true });

let newString = prompt("Enter a short string we can repeat till its over 10 characters: ");
let conString = newString
console.log(newString);
console.log("The string is: " + newString.length + " character(s) long");

while (conString.length < 10){
    conString = newString + conString
    console.log(conString)
}

