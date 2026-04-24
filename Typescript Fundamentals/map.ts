const customMap = <T, U>(arr: T[], callback: (num: T, index: number, array: T[]) => U): U[] => {
    const result: U[] = [];
    for (let i: number = 0; i < arr.length; i++) {
        result.push(callback(arr[i], i, arr));
    }
    return result;
};

const numbers: number[] = [10, 20, 30, 40, 50];
const squaredNumbers: number[] = customMap(numbers, (num: number) => num * num);
console.log(squaredNumbers); // Output: [100, 400, 900, 1600, 2500]


// const customMap: Function = (arr: number[], callback: Function): number[] => {
//     const result: number[] = [];
//     for (let i: number = 0; i < arr.length; i++) {
//         result.push(callback(arr[i], i, arr));
//     }
//     return result;
// };