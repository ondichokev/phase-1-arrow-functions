


const divide = function() {
  return 2000 / 100;
};


const square = x => x * x;


const add = (a, b) => a + b;


console.log(divide()); 
console.log(square(2)); 
console.log(square(5));

console.log(add(1, 2)); 
console.log(add(5, 7)); 


const sum = function(a, b) {
  return a + b;
};

const doubleArray = arr => arr.map(x => x * 2);

const filterOddNumbers = arr => arr.filter(x => x % 2 !== 0);

console.log(sum(1, 2)); 
console.log(sum(5, 7)); 

console.log(doubleArray([1, 2, 3])); 
console.log(doubleArray([4, 5, 6])); 

console.log(filterOddNumbers([1, 2, 3, 4, 5])); 
console.log(filterOddNumbers([6, 7, 8, 9, 10])); 
