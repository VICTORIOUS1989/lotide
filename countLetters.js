// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) return true ;
  else return false ;
  };
  

  function countLetters(str) {
    let count = 0;
    let object ={};
    let temp = str ;
    let obj ={};

    for(let s of str)
    if(!obj[s]) obj[s] = 1;
    else obj[s] = obj[s]  + 1;
    return obj;
  
  }
  


console.log(countLetters("aabcbbcbh"));

