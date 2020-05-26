const assertEqual = function(actual, expected) {
  if (actual === expected) return `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  else return `🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`;
  };
function eqArrays (array1, array2)  {
  let bool;
  for (let i = 0 ; i < array1.length ; i++  ) {
  if (array1[i] !== array2[i]) {
    bool = false ;
    break;
  }
  else bool = true ;
  }
  return bool;
}

