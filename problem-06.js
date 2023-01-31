// take input year and will return leap year yes => true, leap year no => false

function leapYear(year) {
  if (year % 4 === 0) {
    return true;
  }
  return false;
}
let year = leapYear(2040);
console.log(year);

// your age check odd or even using function and will have returned true or false

function ageCheck(age) {
  if (age % 2 === 0) {
    return true;
  }
  return false;
}
let yourAge = ageCheck(32);
console.log(yourAge);

// give you hours and return will have minutes

function hourToMinute(hour) {
  let minutes = hour * 60;
  return minutes;
}
let giveHour = hourToMinute(5);
console.log(giveHour);

// you make findLeapYear function, take input array year and will have return a array of leap years [2023, 2024, 2025, 2028, 2030]

function findLeapYear(yearArray) {
  //   console.log(yearArray);
  let leapYearStored = [];
  for (let i = 0; i <= yearArray.length; i++) {
    let leapYear = yearArray[i];
    if (leapYear % 2 === 0) {
      leapYearStored.push(leapYear);
    }
  }
  //   console.log(leapYearStored);
  return leapYearStored;
}

let givenYear = findLeapYear([2023, 2024, 2025, 2028, 2030]);
console.log(givenYear);

// take input array and will have return sum odd number of an array

function findOddSum(inputArray) {
  let arraySum = [];
  let sum = 0;
  for (let i = 0; i < inputArray.length; i++) {
    let element = inputArray[i];
    if (element % 2 !== 0) {
      sum = sum + element;
    }
  }
  arraySum.push(sum);
  return arraySum;
  //   console.log(arraySum);
}
let givenArray = findOddSum([5, 7, 8, 10, 45, 30]);
console.log(givenArray);

// take input array and will have return average odd number of an array

function findOddAverage(inputArray) {
  let arraySum = [];
  let sum = 0;
  for (let i = 0; i < inputArray.length; i++) {
    let element = inputArray[i];
    if (element % 2 !== 0) {
      sum = sum + element;
    }
  }
  let average = sum / 3;
  arraySum.push(average);
  return arraySum;
  //   console.log(arraySum);
}
let inputArray = findOddAverage([5, 7, 8, 10, 45, 30]);
console.log(inputArray);
