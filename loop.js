// loop practice challenge - 01

var dailyTask = [
  "First module unlock at 8 PM",
  "second task do practice see videos",
  "third task take notes to see videos",
  "Fourth task after finished module then you can self practice",
  "Fifth task you can does not understand then you will help from support session",
];

// show upper output in for loop
for (var i = 0; i < dailyTask.length; i++) {
  var element = dailyTask[i];
  console.log(element);
}

// practice  challenge -02
// same output show in while loop
var i = 0;
while (i < dailyTask.length) {
  var element = dailyTask[i];
  i++;
  console.log(element);
}

// practice challenge -03
// same problm show upper information reverse decrement use while loop
var i = 4;
while (i >= 0) {
  var element = dailyTask[i];
  i--;
  console.log(element);
}

// practice challenge -04
// same problem you can reverse way using for loop
for (var i = 4; i >= 0; i--) {
  var element = dailyTask[i];
  console.log(element);
}
