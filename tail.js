

const tail= function (array) {
  if (array.length === 0 || array.length === 1 ) return [];
  else 
  { 
    let tail = array.slice(1, array.length+1) ;
    return tail;
  }

}  
module.exports = tail;

