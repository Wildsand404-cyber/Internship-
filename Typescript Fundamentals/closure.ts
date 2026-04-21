function closureCounter(): () => number {
    let count: number = 0;

    function increment(): number {
        count++;
        console.log(count);
        return count;
    }

    return increment;
}

const counter: () => number = closureCounter();
counter(); // Output: 1
counter(); // Output: 2
counter(); // Output: 3