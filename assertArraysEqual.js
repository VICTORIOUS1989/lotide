const eqArrays = require ('./eqArrays');


function assertArraysEqual(array1 , array2) {
  if (eqArrays(array1 , array2) === true ) return "✅✅✅ Assertion Passed: array1 === array2";
  else  return "🛑🛑🛑 Assertion failed: array1 !== array2";
}


module.exports = assertArraysEqual;