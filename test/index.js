const { expect } = require('chai');
const blanket = require('blanket');
blanket({
  pattern: 'isIntegerish.js'
});
const isIntegerish = require('../isIntegerish');

describe('isIntegerish:', function() {
  it('should return true if an integer value is passed', function() {
    expect(isIntegerish(0)).to.be.true;
    expect(isIntegerish(10)).to.be.true;
    expect(isIntegerish(42)).to.be.true;
    expect(isIntegerish(-999)).to.be.true;
  });

  it('should return true if a float value that is also an integer is passed', function() {
    expect(isIntegerish(0.0)).to.be.true;
    expect(isIntegerish(10.0)).to.be.true;
    expect(isIntegerish(42.0)).to.be.true;
    expect(isIntegerish(-999.0)).to.be.true;
  });

  it('should return true if a string of an integer value is passed', function() {
    expect(isIntegerish('0')).to.be.true;
    expect(isIntegerish('10')).to.be.true;
    expect(isIntegerish('42')).to.be.true;
    expect(isIntegerish('-999')).to.be.true;
  });

  it('should return false if a non-integer number is passed', function() {
    expect(isIntegerish(0.5)).to.be.false;
    expect(isIntegerish(4.2)).to.be.false;
    expect(isIntegerish(9.99)).to.be.false;
    expect(isIntegerish(-100.2)).to.be.false;
  })

  it('should return false if a string of a non-integer number is passed', function() {
    expect(isIntegerish('0.5')).to.be.false;
    expect(isIntegerish('4.2')).to.be.false;
    expect(isIntegerish('9.99')).to.be.false;
    expect(isIntegerish('-100.2')).to.be.false;
  })

  it('should return false if a string of a non-number is passed', function() {
    expect(isIntegerish('abc')).to.be.false;
    expect(isIntegerish('def')).to.be.false;
    expect(isIntegerish('the quick brown fox')).to.be.false;
    expect(isIntegerish('jumps over the lazy dog!')).to.be.false;
  })
});