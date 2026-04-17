# Internship - Javascript Exercises

A collection of Javascript code developed to understand core concepts of the language.

## Closure Counter 

This JS file includes a closure which involves two functions (an inner and outer function) and count variable counting up each time the program is called.

## Custom filter() reimplementation

A reimplementation of the Array.prototype.filter() method in JS with an interactive cli user interface to show the output of the function

## Custom map() Function

This code implements a custom version of JavaScript's built-in Array.prototype.map() method from scratch.
How it works:

customMap(array, callback) — takes an array and a callback function as arguments.
It iterates over each element using a for loop and calls the callback with three arguments (mirroring native .map()):

array[i] — the current element
i — the current index
array — the original array


Each return value from the callback is pushed into a result array, which is returned at the end.

## Node.js Event Loop Priority Demo

This code demonstrates how Node.js handles asynchronous task prioritization through its event loop.

Execution Order

1. console.log (×2) Synchronous — runs immediately on the call stack
2. process.nextTick() Next-tick queue — runs before everything async
3. Promise.resolve().then()Microtask queue — runs after next-tick, before I/O
4. setTimeout(..., 2000)Timers phase of event loop
5. fs.readFile()I/O callbacks phase
6. setImmediate()Check phase — after I/O callbacks

## Custom reduce() Function

This is a custom implementation of JavaScript's built-in Array.prototype.reduce() method, built from scratch.
