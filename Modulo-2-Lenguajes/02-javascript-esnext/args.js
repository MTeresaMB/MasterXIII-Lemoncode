function f(a, { b } = {}, c = 100) {
  console.log(arguments.length);
  console.log(a, a === arguments[0]);
  console.log(b, b === arguments[1]);
  console.log(c, c === arguments[2]);
}

f("JS rocks!", { b: "b" });

f({ b: "b" });

f("JS sucks!", null, 13);