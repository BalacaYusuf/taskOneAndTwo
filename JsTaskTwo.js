
// ==========================  Task one and two===========================


var i = 0;
const num = [];
const positive = [];
const DTwo = [];

while (i < 4) {
  let Numbers = parseInt(prompt("Enter 5 negative and positive numbers."));
  num[i] = Numbers;
  i++;
}

num.forEach(elem => {
  console.log(elem);
});

console.log("The positive numbers: ");

num.forEach(elem => {
  if (elem > 0) {
    positive.push(elem);
  }
});

positive.forEach(elems => {
  console.log(elems);
});

console.log("The numbers which divide by two:");

num.forEach(elem => {
  if (elem % 2 !== 0)
    DTwo.push(elem);
});

DTwo.forEach(elems => {
  console.log(elems);
});
