module.exports = function longestConsecutiveLength(array) {
   let massOfNumbers = array;
  let map = new Map(); 
  let max;
  let count;
  let counter = [];
  //нахождение максимального числа в массиве
  function getMaxOfArray(mass) {
    max = Math.max.apply(null, mass);
  }
  for(let i =0; i < massOfNumbers.length; i++){
    map.set(massOfNumbers[i], null)
  }
  console.log(map);
 if(massOfNumbers.length > 1){
  for (let [key, value] of map) {
    if (!map.has(key - 1)) {
      count = 0;
      let i = key;
      do{
        count+=1;
      } while (map.has(++i));
      counter.push(count);
    }
  }
     getMaxOfArray(counter);
 } else if(massOfNumbers.length == 1){
   max = 1;
 } else if(!massOfNumbers.length){
   max = 0
 }
  return max;
}
