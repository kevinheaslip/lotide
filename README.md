# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @kevinheaslip/lotide`

**Require it:**

`const _ = require('@kevinheaslip/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`: logs to the console whether or not two arrays are equal
* `assertEqual`: logs to the console whether or not two values are equal
* `eqArrays`: compares two arrays to see if they are equal
* `head`: retrieves the first element in an array
* `middle`: accepts an array and returns the middle-most element(s)
* `tail`: returns every element of an array except the first element
