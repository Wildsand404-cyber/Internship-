function closureCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    }
}

const Counter = closureCounter();
console.log(Counter()); 
console.log(Counter());
console.log(Counter());