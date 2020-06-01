

function middle (array) {
  let index = array.length; 
  let val = index / 2 ;
  if (index === 1 || index === 2 ) return [] ;
  else if (index % 2 === 0) {
     // console.log(val);
      return array.slice(val-1 , val+1);
  }
       else {
        val = Math.floor(val);
        return array.slice(val, val+1);

       }

}


module.exports = middle;