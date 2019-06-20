function pairWithSumK (array1, sum) {
  if(!sum || sum === 0 || typeof sum !== 'number' || array1.length < 2) {
    return "some thing went wrong";
  } 

  let map = {} ;

  for(let i=0; i< array1.length ; i++) {
    map[array1[i]] = i ;
  }

  for(let i=0; i< array1.length ; i++) {
    if(map[sum - array1[i]]) {
      return `indices of pair with given sum is ${i}, ${map[sum - array1[i]]}`;
    }
  }
  return "pair not found with given sum";
}


console.log(pairWithSumK([1, 1, 11, 7], 3))
