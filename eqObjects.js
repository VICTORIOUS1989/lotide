function assertEqual (actual, expected) {
  if (actual === expected) return "test passed";
  else return "test failed";
  };

  const eqArrays = function(array1, array2) {
      for (let i = 0; i < array2.length; i++) {
        if (array1[i] !== array2[i]) {
          return false;
        }
      }
      return true;
    };
  

  const eqObjects = function(object1, object2) {
     let bool ;
     let obj1 = Object.keys(object1);
     let obj2 = Object.keys(object2);

    if (obj1.length !== obj2.length) {
      bool = false;
      }
    else {
      for (const key of obj1) {
        if (Array.isArray(object1[key]) || Array.isArray(object2[key])) bool = eqArrays(object1[key],object2[key]);
     
        else {
             if  (object1[key] === object2[key]) bool = true;
              else bool = false;} 
      }

    }

    return bool;
  };



const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: 3};
console.log(assertEqual(eqObjects(cd, dc),true)); // => true
console.log(assertEqual(eqObjects(ab, ba),true)); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log(assertEqual(eqObjects(cd, cd2), false)); // => false



