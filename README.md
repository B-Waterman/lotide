# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @b-waterman/lotide`

**Require it:**

`const _ = require('@b-waterman/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`: function that asserts whether two arrays are equal
* `assertEqual`: A function that asserts whether two values are equal
* `assertObjectEqual`: A function that asserts whether two objects are equal
* `countLetters`: A function that returns the total number letters of a given string
* `countOnly`: A function that receives a string and only returns the total of the selected items within it
* `eqArrays`: A function that compares two arrays
* `eqObjects`: A function that compares two objects
* `findKey`: A function that takes in an object and returns the first key to return truthy
* `findKeyByValue`: A function that returns the key with the matching value
* `head`: A function that returns the first element of an array
* `letterPositions`: A function that returns the indices of each character in a given string
* `map`: A function that calls a function on every element in an array and returns a new array of the result
* `middle`: A function that returns the middle element of a given array
* `tail`: A function that retrieves the elements of the original array and returns a new array, excluding the first element
* `takeUntil`: A function that slices a given array and returns a new array with elements from the beginning
* `without`: A function that removes selected elements from an array
