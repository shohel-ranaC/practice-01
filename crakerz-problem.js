// Complete the function called count_zero() which will take a binary string (Binary string is a string which consists of only 0 and 1) as a parameter and count how many 0’s are there in that string.

function countZeros(binary_num) {
  //   console.log(binary_num.length);
  let sumZeros = 0;
  for (let i = 0; i < binary_num.length; i++) {
    let num = Number(binary_num[i]);
    if (num === 0) {
      sumZeros++;
    }
  }
  //   console.log(sumZeros);
  return sumZeros;
}
let BinaryNumber = countZeros("10101");
console.log(BinaryNumber);

// You will have a function which takes the length and width of a rectangle as parameters. Find out the area of that rectangle and return the result.

// Input : 10, 5
// Output: 50

function findArea(length, width) {
  let area = length * width;
  return area;
}
let givenArea = findArea(10, 5);
console.log(givenArea);

// Find the second largest.
// You will be given an array as input containing 5 integer numbers. Your task is very simple. You have to find out the second largest element from the numbers.

// Sample Input: [10,33,5,99,6]
// Sample output: 33

function secondLargest(numbers) {
  let sort = numbers.sort(function (a, b) {
    return b - a;
  });
  let largest = numbers[1];
  return largest;
}
let givenArray = secondLargest([10, 33, 5, 99, 6]);
console.log(givenArray);
