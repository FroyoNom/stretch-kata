multiplicationTable = function(maxValue) {
  let array = [];
  for (let i = 1; i <= maxValue; i++) {
    let innerArray = [];
    for (let j = 1; j <= maxValue; j++) {
      let result = i * j;
      innerArray.push(result);
    }
    array.push(innerArray);
  }
  return array;
};

console.log(multiplicationTable(1));
console.log("---");
console.log(multiplicationTable(5));
console.log("---");
console.log(multiplicationTable(10));
