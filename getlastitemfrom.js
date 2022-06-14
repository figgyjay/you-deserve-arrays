const prompt = require('prompt-sync')({sigint: true})

let userarray = JSON.parse(prompt(" Enter an Array: "));

console.log(" The last item in the array is : " + userarray.length - 1)
