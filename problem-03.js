// // ajke amar mon valo ney show 39 time
var myMejaj = [
  "ajke amr mon valo ney",
  "ajke amr mon valo ney",
  "ajke amr mon valo ney",
  "ajke amr mon valo ney",
  "ajke amr mon valo ney",
  "ajke amr mon valo ney",
  "ajke amr mon valo ney",
  "ajke amr mon valo ney",
  "ajke amr mon valo ney",
  "ajke amr mon valo ney",
  "ajke amr mon valo ney",
  "ajke amr mon valo ney",
  "ajke amr mon valo ney",
  "ajke amr mon valo ney",
  "ajke amr mon valo ney",
  "ajke amr mon valo ney",
  "ajke amr mon valo ney",
  "ajke amr mon valo ney",
  "ajke amr mon valo ney",
  "ajke amr mon valo ney",
  "ajke amr mon valo ney",
  "ajke amr mon valo ney",
  "ajke amr mon valo ney",
  "ajke amr mon valo ney",
  "ajke amr mon valo ney",
  "ajke amr mon valo ney",
  "ajke amr mon valo ney",
  "ajke amr mon valo ney",
  "ajke amr mon valo ney",
  "ajke amr mon valo ney",
  "ajke amr mon valo ney",
  "ajke amr mon valo ney",
  "ajke amr mon valo ney",
  "ajke amr mon valo ney",
  "ajke amr mon valo ney",
  "ajke amr mon valo ney",
  "ajke amr mon valo ney",
  "ajke amr mon valo ney",
  "ajke amr mon valo ney",
  "ajke amr mon valo ney",
  "ajke amr mon valo ney",
  "ajke amr mon valo ney",
  "ajke amr mon valo ney",
  "ajke amr mon valo ney",
  "ajke amr mon valo ney",
  "ajke amr mon valo ney",
  "ajke amr mon valo ney",
  "ajke amr mon valo ney",
  "ajke amr mon valo ney",
  "ajke amr mon valo ney",
  "ajke amr mon valo ney",
  "ajke amr mon valo ney",
  "ajke amr mon valo ney",
  "ajke amr mon valo ney",
  "ajke amr mon valo ney",
];
var i = 0;
while (i < myMejaj.length) {
  var time = myMejaj[i];
  i++;
  console.log(time);
}

var myBehaviour = "kalke amar mon valo chilo na";
for (var i = 0; i < 100; i++) {
  //   var myBehaviour = myBehaviour[i];
  console.log(myBehaviour);
}

// show 58 to 98 all digit
for (var i = 58; i <= 98; i++) {
  var element = i;
  console.log(element);
}

// show 412 to 456 only even digit
for (var i = 412; i <= 456; i++) {
  var element = i;
  var even = element % 2;
  if (even === 0) {
    console.log(element);
  }
}

// show 412 to 456 only odd digit
for (var i = 412; i <= 456; i++) {
  var element = i;
  var even = element % 2;
  if (even === 0) {
    continue;
  }
  console.log(element);
}

// show the 30 to 86 digit but will stop after show 44
for (var i = 30; i < 86; i++) {
  if (i === 44) {
    break;
  }
  console.log(i);
}

// show my book price but avoid only price of book up 200tk.
var bookPrice = [100, 120, 500, 190, 320, 90, 250, 135, 80, 260, 800, 1000];

for (var i = 0; i < bookPrice.length; i++) {
  if (bookPrice[i] >= 200) {
    continue;
  }
  var price = bookPrice[i];
  console.log(price);
}
