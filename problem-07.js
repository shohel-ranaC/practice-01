// ১. একটা ফাংশন লিখো। সেটার মধ্যে তিনটা প্যারামিটার নিবে। এই তিনটা প্যারামিটার হবে কোন একটা ত্রিভুজের তিনটা বাহু এর দৈর্য্য। এখন তোমার কাজ হচ্ছে ফাংশনের ভিতরে কিছু হিসাব নিকাশ করে ত্রিভুজের area (আয়তন) বের করা। কোন একটা ত্রিভুজের তিনটা বাহুর দৈর্য্য দেয়া থাকলে সেটা থেকে কিভাবে আয়তন বের করতে হয় সেই ফর্মুলা গুগল থেকে খুঁজে বের করো।
// semiperimeter = s
// semi-perimeter = (a + b + c) / 2
// Area of Triangle = rootOver[s(s - a)(s - b)(s - c)]

function areaOfTriangle(side1, side2, side3) {
  let semiPerimeter = (side1 + side2 + side3) / 2;
  let area = Math.sqrt(
    semiPerimeter *
      (semiPerimeter - side1) *
      (semiPerimeter - side2) *
      (semiPerimeter - side3)
  );
  let areaOfFixed = area.toFixed(2);
  return areaOfFixed;
}
let givenTriangleNumber = areaOfTriangle(11, 9, 9);
console.log(givenTriangleNumber);

// ২. কোন একটা সংখ্যা প্রাইম সংখ্যা (prime number) কিনা। সেটা চেক করার একটা ফাংশন লিখো।

function isPrime(number) {
  if (number <= 1) {
    return "Invalid number";
  } else if (number === 2) {
    return "The Number is a prime number";
  }
  for (let i = 2; i <= number; i++) {
    if (number % i === 0) {
      checkPrime = "The Number is not a prime number";
    } else {
      checkPrime = "The Number is a prime number";
    }
    return checkPrime;
  }
}
let givenNumber = isPrime(15);
console.log(givenNumber);
