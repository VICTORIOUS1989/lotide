function eqObjects (object1, object2) {
  let bool ;
  let obj1 = Object.keys(object1);
  let obj2 = Object.keys(object2);

 if (obj1.length !== obj2.length) {
   bool = false;
   }
 else {
   for (const key of obj1) {
     if (Array.isArray(object1[key]) || Array.isArray(object2[key])) bool = eqArrays(object1[key],object2[key]);
  
     else if  (object1[key] === object2[key]) bool = true;
           else bool = false;
   }

 }

 return bool;
}


 function assertObjectsEqual (actual, expected) {
  const inspect = require('util').inspect; 
  if (eqObjects(actual, expected) === true) console.log(`✅✅✅ Assertion Passed:  ${inspect(actual)} === ${inspect(expected)}`);
  else console.log(`🛑🛑🛑 Assertion failed:  ${inspect(actual)} !== ${inspect(expected)}`);
};

