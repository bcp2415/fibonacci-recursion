function calculateFibonacci(integer) {
  if (integer === 0) {
    return 0;
  } else if (integer === 1) {
    return 1;
  } else if (integer > 1) {
    return (calculateFibonacci(integer - 1) + calculateFibonacci(integer - 2));
  };
}


const test = 20;
console.log(`Fibonacci of ${test} is ${calculateFibonacci(test)}.`);