console.log("************** CONSOLE *********************");
var a = 1;
let b = 2;

{
  try {
    console.log(a, b); // 1, undefined
  } catch (error) {}
  let b = 3;
  console.log(a, b); // 1, 3
}

console.log(a, b); // 1, 2

() => {
  console.log(a); // undefined
  var a = 5;
  let b = 6;
  console.log(a, b); // 5, 6
};

console.log(a, b);// 1, 2