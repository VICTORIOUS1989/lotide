 function assertEqual (actual, expected) {
  if (actual === expected) return true;
  else return false;
  };

function countOnly (allItems, itemsToCount) {
  let object = {};
  for (let  itemToCount in itemsToCount) {
    let val = 0 ;
    for (const item of allItems ) {
      
      if (itemsToCount[itemToCount] === true) {
        if (itemToCount === item ){
          val ++;
          object [itemToCount] = val ;
         // console.log(object);
        }
        
      }
    }
  }
return object ;

}




const firstNames = {
  a : true ,
  b : true ,
  c : false,
  d : true
}
let test =["a", "b", "c", "a","b", "c" ,"d"];
console.log(countOnly (test ,firstNames));

