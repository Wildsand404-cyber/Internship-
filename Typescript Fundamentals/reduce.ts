const reduce = (nums: number[], fn: Function, init: number): number => {
    let val: number = init;
    for (let i: number = 0; i < nums.length; i++) {
        val = fn(val, nums[i]);
    }
    return val;
}

const nums = [1, 2, 3, 4];
const fn = function sum(acc: number, curr: number): number { return acc + curr; };
const init = 0;
console.log(reduce(nums, fn, init)); 