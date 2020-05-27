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
  if (eqArrays(array1 , array2) === true ) return true ;
  else  return false ;
}

function middle (array) {
  let index = array.length; 
  let val = index / 2 ;
  if (index === 1 || index === 2 ) return [] ;
  else if (index % 2 === 0) {
      console.log(val);
      return array.slice(val-1 , val+1);
  }
       else {
        val = Math.floor(val);
        return array.slice(val, val+1);

       }

}


