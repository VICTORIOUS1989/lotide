// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) return `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  else return `🛑🛑🛑 Assertion failed: ${actual} !== ${expected}`;
  };

const tail= function (array) {
  if (array.length === 0 || array.length === 1 ) return [];
  else 
  { 
    let tail = array.slice(1, array.length+1) ;
    return tail;
  }

}  

// Test Case 1: Check the returned array elements
const result = tail(["Hello", "Lighthouse", "Labs"]);
console.log(assertEqual(result.length, 2)); // ensure we get back two elements
console.log(assertEqual(result[0], "Lighthouse")); // ensure first element is "Lighthouse"
console.log(assertEqual(result[1], "Labs")); // ensure second element is "Labs"