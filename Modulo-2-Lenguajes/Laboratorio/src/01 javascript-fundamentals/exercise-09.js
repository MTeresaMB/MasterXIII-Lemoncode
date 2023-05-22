console.log("****** EXCERCISE 9 - Primes ******");

function isPrime(number){
  if(number <= 1) return false;
  for(let i = 2; i <= number - 1; i++){
    if(number % i == 0) return false;
  }
  return true;
}

function showPrimes(from, to){
  for(let i = from; i <= to; i++){
    console.log(i + (isPrime(i) ? " is prime number " : " is not a prime number"));
  }
}

showPrimes(1,100);

// Challange
function isPrimeSqrt(number){
  if(number <= 1) return false;
  for(let i = 2; i <= Math.sqrt(number); i++){
    if(number % i == 0) return false;
  }
  return true;
}
showPrimes(1,100);