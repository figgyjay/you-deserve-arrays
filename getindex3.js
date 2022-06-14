const prompt = require('prompt-sync')({sigint: true})

let userarray = JSON.parse(prompt(" Enter array: "));

console.log(" the third index is: " + userarray[2])

if (userarray < 4){
    console.log(" the last index is: " + (userarray.length - 1))
}