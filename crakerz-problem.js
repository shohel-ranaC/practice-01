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

// Write a function findOddSum() that will take the array as the input parameter and will return the sum of the odd numbers. No need to return anything if the odd numbers do not exist in the array

// Sample Input: [5, 7, 8, 10, 45, 30]
// Sample Output: 57

function findOddSum(arrOfNumbers) {
  let sum = 0;
  for (let i = 0; i < arrOfNumbers.length; i++) {
    let array = arrOfNumbers[i];
    if (array % 2 !== 0) {
      sum += array;
    }
  }
  return sum;
}
let givenInput = findOddSum([5, 7, 8, 10, 45, 30]);
console.log(givenInput);

// Can you find the leap years??
// Write a function findLeapYear() that will take an array as the input parameter and will check if each year is a leap year. If a year is a leap year, insert that year in a new array. Return the new array and print the result. There is no need to return anything if there is no leap year found.

// Sample Input: [2023,2024,2025,2028,2030]
// Sample Output: [2024, 2028]

function findLeapYear(arrOfYears) {
  let leapYearArray = [];
  for (let i = 0; i < arrOfYears.length; i++) {
    let year = arrOfYears[i];
    if (year % 4 === 0) {
      leapYearArray.push(year);
    }
  }
  return leapYearArray;
}
let leapYear = findLeapYear([2023, 2024, 2025, 2028]);
console.log(leapYear);

// Write a code to find the smallest element of the array
// Suppose, you have an array with 5 elements. Find the smallest element of tha

// Sample Input: [10,33,5,99,6]
// Sample output: 5

// function findingSmallest(numbers) {
//   let sorted = numbers.sort(function (a, b) {
//     return a - b;
//   });
//   let smallest = numbers[0];
//   return smallest;
// }
// let inputArray = findingSmallest([10, 33, 5, 99, 6]);
// console.log(inputArray);

// same answer another way solved

function findingSmallest(numbers) {
  let smallestArray = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    let smallest = numbers[i];
    if (smallest < smallestArray) {
      smallestArray = smallest;
    }
  }
  return smallestArray;
}
let inputArray = findingSmallest([10, 33, 5, 99, 6]);
console.log(inputArray);

// Convert Hour to Minute
// Write a function hourToMin that will take hour as the input parameter and will convert it into minutes and will return the result in minutes.

// Sample Input: 2
// Sample Output: 120

function hourToMin(hour) {
  let minutes = hour * 60;
  return minutes;
}
let givenHour = hourToMin(2);
console.log(givenHour);

// Who is the tallest?
// Tom and his friends are participating in the "Who is the tallest?" competition. As per the name, the person with the highest height will be the winner. Can you find who is the tallest among Tom and all of his friends?

// Sample Input: 157  134  188
// Sample Output: 188

function tallestFriend(height) {
  let heightArray = height[0];
  for (let i = 0; i < height.length; i++) {
    let heightCount = height[i];
    if (heightCount > heightArray) {
      heightArray = heightCount;
    }
  }
  return heightArray;
}
let givenHeight = tallestFriend([157, 134, 188]);
console.log(givenHeight);
