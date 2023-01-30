// problem -01

function foo() {
  console.log("foo");
  bar();
}
foo(); //
function bar() {
  console.log("bar");
}
bar(); //

// input three integer and will reurn avrage to the input number

// problem -02
function average(num1, num2, num3) {
  var averageResult = (num1 + num2 + num3) / 3;
  var roundResult = Math.round(averageResult);
  console.log(roundResult);
}
average(50, 100, 70); //

//take input an array => var array = [50, 100, 70];
// and will return an array average [73]
// problem -03
function inputArray([...n]) {
  var arrayAverage = (n[0] + n[1] + n[2]) / 3;
  var roundAverage = Math.round(arrayAverage);
  console.log(roundAverage);
}
inputArray([50, 100, 70]); //

// take input one integer number and return check even or odd
// problem -04

// no return and has parameter
function evenOdd(number) {
  if (number % 2 === 0) {
    console.log("The Number Is Even:" + number);
  } else {
    console.log("The Number Is Odd:" + number);
  }
}
evenOdd(221);

// has return and has parameter

// function evenOdd(number) {
//   if (number % 2 === 0) {
//     var result = "The Number Is Even:" + number;
//     console.log(result);
//   } else {
//     var result = "The Number Is Odd:" + number;
//     console.log(result);
//   }
//   return result;
// }
// evenOdd(220);

// problem -05
// there are three value red, yellow, green. you can input one value. then will return for red=> you may be in danger, for yellow=> you should stop, for green=> you should cross the road

function signal(traffic) {
  if (traffic === "red") {
    console.log("You may be in danger");
  } else if (traffic === "yellow") {
    console.log("You should stop");
  } else if (traffic === "green") {
    console.log("You should cross the road");
  } else {
    console.log("Invalid !");
  }
}
// signal("green");
signal("red");
// signal("yellow");

var traffic = "green";
switch (traffic) {
  case "red":
    console.log("You may be in danger");
    break;
  case "yellow":
    console.log("You should stop");
    break;
  case "green":
    console.log("You should cross the road");
    break;
  default:
    console.log("Invalid");
    break;
}
