# isIntegerish
[![Build Status](https://travis-ci.org/ketsugi/isIntegerish.svg?branch=master)](https://travis-ci.org/ketsugi/isIntegerish) [![Known Vulnerabilities](https://snyk.io/test/github/ketsugi/isintegerish/badge.svg)](https://snyk.io/test/github/ketsugi/isintegerish)

A function to check if a value is an integer, or a string which parses to an integer value

https://www.npmjs.com/package/is-integerish

## Install

```
npm install --save is-integerish
```

## Example

```JavaScript
const isIntegerish = require('is-integerish');

console.log(isIntegerish(10)); // true
console.log(isIntegerish('10')); // true
console.log(isIntegerish(1.0)); // true
console.log(isIntegerish("not an integer")); // false
console.log(isIntegerish(5.5)); // false
```