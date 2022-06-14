const prompt = require('prompt-sync')({sigint: true})

let userarray = JSON.parse(prompt(" Enter an Array: "));

// JSON.parse when prompting user to enter array


console.log(userarray);
console.log(" The first item in user array is:  " + userarray[0])






