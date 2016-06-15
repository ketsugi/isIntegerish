function isIntegerish(input)
{
  return (parseInt(input, 10) == input);
}

module.exports = isIntegerish;