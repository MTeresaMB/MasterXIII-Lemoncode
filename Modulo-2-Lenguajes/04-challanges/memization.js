const expensiveFunction = () => {
  console.log("Una única llamada");
  return 3.1415;
}

// const memoize = ¿..?;

const memoized = memoize(expensiveFunction);
console.log(memoized()); // Una única llamada // 3.1415
console.log(memoized()); // 3.1415
console.log(memoized()); // 3.1415

// let count = 0; // Comprobacion de nº de ejecuciones
// const repeatText = (repetitions: number, text: string): string =>
//   (count++, `${text} `.repeat(repetitions).trim())

// const memoize = ¿..?;

// const memoizedGreet = memoize(repeatText);

// console.log(memoizedGreet(1, "pam"));   // pam
// console.log(memoizedGreet(3, "chun"));  // chun chun chun
// console.log(memoizedGreet(1, "pam"));   // pam
// console.log(memoizedGreet(3, "chun"));  // chun chun chun
// console.log(count);                     // 2