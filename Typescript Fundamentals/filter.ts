const filter: Function = (arr: number[], fn: Function): number[] => {
    const filteredArr: number[] = [];
    for (let i: number = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}

const arr: number[] = [0, 1, 2, 3, 4];
const evenNumbers: number[] = filter(arr, (num: number) => num % 2 === 0);
console.log(evenNumbers); // Output: [0, 2, 4]


