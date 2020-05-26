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


function assertArraysEqual(array1 , array2) {
  if (eqArrays(array1 , array2) === true ) return "✅✅✅ Assertion Passed: array1 === array2";
  else  return "🛑🛑🛑 Assertion failed: array1 !== array2";
}

console.log(assertArraysEqual([1,2,3] , [1,2,"3"]));