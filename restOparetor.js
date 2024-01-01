function num(a, b, c) {
  //   console.log(a, b, c);
  console.log(arguments);
}
num(3, 45, 6);

function number(a, ...params) {
  //   console.log(a, b, c);
  console.log(a);
  console.log(params);
}
number(1, 3, 45, 6);
