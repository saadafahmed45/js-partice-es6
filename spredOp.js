// this is speard oparator
const myNumber = [1, 2, 3, 4];

const newNumbers = [...myNumber, 5, 6, 7];

// console.log(newNumbers);

const ages = [18, 20, 23, 30];
// const allAges = [...ages];
const allAges = ages;
ages.push(58);
// console.log(allAges);

const number1 = [1, 2, 3, 4];
const number2 = [5, 6, 7, 8];

const allNum = [...number1, ...number2];
console.log(allNum);
