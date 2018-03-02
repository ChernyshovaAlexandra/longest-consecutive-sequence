module.exports = function longestConsecutiveLength(array) {
 let massOfNumbers = array; 
  let max;
  let cur = +max - 1;
  let count = 0;
  let min = 0;
  let counter = [];
  //нахождение максимального числа в массиве
  function getMaxOfArray(mass) {
    max = Math.max.apply(null, mass);

  }
  do{
    getMaxOfArray(massOfNumbers);
    cur = max - 1;
    min = cur - 1;
    if(massOfNumbers.includes(cur)){
      if(massOfNumbers.includes(min) && min > 0){
        count+=2;
        massOfNumbers.splice(massOfNumbers.indexOf(max), 1);
      } else {
        count+=2;
        counter.push(count);
        count = 0;
        massOfNumbers.splice(massOfNumbers.indexOf(max), 1);
        massOfNumbers.splice(massOfNumbers.indexOf(cur), 1);
      } 
    }else{
      massOfNumbers.splice(massOfNumbers.indexOf(max), 1);
      count = 0;
    }
  } while(massOfNumbers.length > 0)

 counter.sort(function(a,b){return a - b;});
 return counter[counter.length - 1];
}

 
