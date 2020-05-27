
const assertEqual = function(actual, expected) {
  if (actual === expected) return true ;
  else return false ;
  };

  const findKeyByValue = function(object, value) {
    for (const key of Object.keys(object)){
          if (object[key] === value) return key ;
    }
    };
    



const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"));
console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined));
