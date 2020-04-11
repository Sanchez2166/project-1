// jshint esversion: 7

// Req 3b
let arrAvg = arr => {
  var total = 0;
  for (var i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total / i;
};
console.log(arrAvg([6, 2, 4]));
console.log(arrAvg([2, 3, 5, 7, 9]));

// Req 3c
let arrMax = arr => {
  var max = 0;
  arr.forEach(function(num) {
    if (num > max) {
      max = num;
    }
  });
  return max;
};
console.log(arrMax([2, 3, 5, 7, 9]));
console.log(arrMax([6, 2, 4]));

// Req 3d
let sumEvens = arr => {
  var count = 0;
  for (let num of arr) {
    if (num % 2 == 0) {
      count += num;
    }
  }
  return count;
};
console.log(sumEvens([2, 3, 5, 2, 9]));
console.log(sumEvens([6, 2, 4]));
