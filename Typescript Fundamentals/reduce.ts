const reduce = <T, U>(nums: T[], fn: (acc: U, val: T) => U, init: U): U => {
    let val: U = init;
    for (const num of nums) {
        val = fn(val, num);
    }
    return val;
}

// Usage with numbers

const nums = [1, 2, 3, 4];
const fn = function sum(a: number, b: number) { return a + b; };
const init = 0;

console.log(reduce(nums, fn, init)); 

// Usage with strings
const strings = ["Hello", " ", "World", "!"];
const concatFn = function concat(a: string, b: string) { return a + b; };
const initStr = "";

console.log(reduce(strings, concatFn, initStr));