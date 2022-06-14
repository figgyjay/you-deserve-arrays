const prompt = require('prompt-sync')({sigint: true})

let userarray = JSON.parse("Enter and Array ")
console.log("This the second character in third item in the array: " + userarray[userarray.length + 3][1])
