const number = [1, 2, 3, 4, 5, 6];
var result = number.reduce((prevValue, currerntValue, currerntIndex, arr) => {
  return prevValue + currerntValue;
}, 0);

console.log(result);
