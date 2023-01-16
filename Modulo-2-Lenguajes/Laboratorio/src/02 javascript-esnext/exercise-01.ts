console.log("************** JAVASCRIPT - ESNEXT *********************");

console.log("************** ARGS *********************");

/* function f(a: number, { b } = {}, c = 100) {
  console.log(arguments.length);
  console.log(a, a === arguments[0]);
  console.log(b, b === arguments[1]);
  console.log(c, c === arguments[2]);
} */

// f("JS rocks!", { b: "b" });

// 2
// JS rocks! true
// b false
// 100 false

// f({ b: "b" });

// Object {b: 'b}
// undefined true
//100 false

// f("JS sucks!", null, 13);

// Uncaught TypeError: _b is null



