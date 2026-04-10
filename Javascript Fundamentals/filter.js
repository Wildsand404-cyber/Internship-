const readline = require('readline');

const filter = function(arr, fn) {
    const filteredArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i, arr)) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}

console.log("Enter an array of numbers (Make sure to use square brackets and follow the format, e.g., [1,2,3,4,5]):");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('> ', (input) => {
    const arr = JSON.parse(input);
    const evenNumbers = filter(arr, num => num % 2 === 0);
    console.log(evenNumbers);
    rl.close();
});