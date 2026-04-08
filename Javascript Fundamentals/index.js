const fs = require('fs');

console.log("first line of code");
console.log("call stack is empty now");

const firstPriority = Process.nextTick(() => {
  console.log('first priority');
});

const secondPriorty = Promise.resolve().then(() => {
    console.log('second priority');
});

const thirdPriority = setTimeout(() => {
    console.log("third priority"), 2000;
});

const fourthPriority = fs.readFile('./index.js', 'utf-8', (err, data) => {
    if (err) {
        console.error(err);
    } else {
        console.log('fourth priority');
    }
});  

const fifthPriority = setImmediate(() => {
    console.log('fifth priority');
});

const sixthPriority = readableStream.on(close, () => {
    console.log('sixth priority');
});
