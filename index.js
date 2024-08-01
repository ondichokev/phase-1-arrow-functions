


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
  