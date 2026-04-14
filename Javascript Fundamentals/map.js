const customMap = (array, callback) => {
  const result = [];

  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i], i, array));
  }

  return result;
};

// Example usage:
const numbers = [10, 20, 30, 40];
const squaredNumbers = customMap(numbers, (num) => num * num);
console.log(squaredNumbers); // Output: [100, 400, 900, 1600]
