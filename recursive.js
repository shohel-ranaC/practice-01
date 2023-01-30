// we have give a number and getback a factorial number
var fact = 1;
for (var i = 1; i <= 5; i++) {
  var fact = fact * i;
  console.log(fact);
}

// print "Shohel Rana" 10 times per don't use any loop condition => just only use recursive way
function printName(name) {
  if (name === 0) {
    return 0;
  }
  console.log("Shohel Rana");
  return printName(name - 1);
}

console.log(printName(10));

// recursive function addition 1 to 100 and show result

function sayHi(n) {
  if (n === 1) {
    return 1;
  }
  return n + sayHi(n - 1);
}
console.log(sayHi(100));

// recursive function another example => factorial

function factorial(n) {
  if (n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}
var result = factorial(5);
console.log(result);

// array all data addition and finally result => use recursive function

var array = [1, 2, 3, 4, 5];

function sumOfArray(array, lastIndex) {
  if (lastIndex < 0) {
    return 0;
  }
  return array[lastIndex] + sumOfArray(array, lastIndex - 1);
}
console.log(sumOfArray(array, array.length - 1));
