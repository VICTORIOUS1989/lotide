const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}

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

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
console.log(assertArraysEqual(results1, ["g","c","t","m","t" ]));
