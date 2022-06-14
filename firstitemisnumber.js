const prompt = require('prompt-sync')({sigint: true})

let userarray = JSON.parse(prompt("Enter an Array: "))

console.log(" The first item in the array is a number:  " + (userarray[0] === Number))
