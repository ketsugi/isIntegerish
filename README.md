# isIntegerish [![Build Status](https://travis-ci.org/ketsugi/isIntegerish.svg?branch=master)](https://travis-ci.org/ketsugi/isIntegerish)
A function to check if a value is an integer, or a string which parses to an integer value

## Example

```JavaScript
const isIntegerish = require('isintegerish');

console.log(isIntegerish(10)); // true
console.log(isIntegerish('10')); // true
console.log(isIntegerish(1.0)); // true
console.log(isIntegerish("not an integer")); // false
console.log(isIntegerish(5.5)); // false
```