console.log("************** FIBONACCI *********************");

// recursividad
const fib = (n: number): number => {
  if(n < 2) return n;
  return fib(n - 2) + fib(n - 1);
};

console.log(fib(10)); // 55 

// otra forma de resolver la sucesion fibonacci

const fib2 = (n: number): number => {
  const fibonacci = [0,1];
  for(let i = 2; i <= n; i++) {
    fibonacci[i] = fibonacci[i - 2] + fibonacci[i - 1];
  }
  return fibonacci[n];
};

console.log(fib2(20)); // 6765
