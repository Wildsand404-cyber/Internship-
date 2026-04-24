# Internship - Typescript Exercises

A collection of Typescript code developed to understand core concepts of the language.

## Closure Counter 

This implementation uses a higher-order function to encapsulate state.

TS Logic: Uses Function Types to define the return signature.

Key Concept: The outer function returns a function () => number, creating a private scope for the count variable.

## Custom filter() reimplementation

A type-safe version of Array.prototype.filter().

Generics (<T>): Allows the filter to work on any array type (e.g., string[], User[]) while ensuring the callback predicate receives the correct type.

## Custom map() Function

A scratch-built version of the native .map() method.

Generics (<T, U>): Uses two type variables. T represents the input type, while U represents the transformed output type.

Strict Mapping: Ensures that if the callback returns a string, the final array is strictly typed as string[].

## Custom reduce() Function

A scratch-built implementation of the .reduce() method, used to fold an array into a single value through an accumulator.

<T, U>: T is the input element type; U is the accumulator/result type.

init: U: Ensures the starting value matches the desired output type.

fn: (acc: U, val: T) => U: A strict contract ensuring the callback processes the current item and returns an updated accumulator of the correct type.

