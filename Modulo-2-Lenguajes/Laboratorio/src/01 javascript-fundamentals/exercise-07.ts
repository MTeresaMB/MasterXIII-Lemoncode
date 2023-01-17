console.log("****** EXCERCISE 7 - Values ******");

// Apartado A

// function f() {
//   console.log(a); // Undefined
//   console.log(g()); // Undefined

//   var a = "good job!";
//   function g() {
//     return a;
//   }
//   console.log(a); // Good Job!
// }

// f();

// Los dos Undefined son porque se estan llamando a la variable a y a la funcion g
// antes de ser declaradas

// El good job! porque ya ha sido declarada e inicializada la variable a

// Apartado B

// var a = 1;

// (function() {
//   console.log(a); // Undefined
//   var a = 2;
//   b = 4;
//   var c = 3;
// })();

// console.log(a); // 1
// console.log(b); // 4 
// console.log(c); // Error c is not defined

// Undefined porque se esta llamando a una variable que no esta definida dentro 
// de la funcion autoejecutable y aunque sea una variable var solo tienen ambito
// en la funcion

// El segundo console.log(a) -> con valor 1 es porque esta tomando la inicializacion de la variable
// anterior a la funcion 

// En el tercer console.log(b) -> con valor 4 es porque es una varible de ambito global, por lo que se tendra
// utilizar fuera de la funcion

// En el ultimo console.log(c) -> lanza un error de que la variable no esta definida, porque solo esta declarada e inicializada
// en el ambito de la funcion, por lo que no se podria utilizar fuera de ella.

// Apartada C 

// f();
// var a = 1;

// function f() {
//   console.log(a); // Undefined
//   b = 4;
//   var c = 3;
// }

// console.log(a); // 1
// console.log(b); // 4
// console.log(c); // Error c is not defined

// Los resultados son los mismos que en el apartado B, aunque se usa el hoisting, los resultados
// no cambian 
