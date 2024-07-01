// function recursiveFibonacci(n) {
//   if (n < 2) {
//     return n;
//   }

//   return recursiveFibonacci(n - 1) + recursiveFibonacci(n - 2);
// }

// console.log(recursiveFibonacci(2));
// console.log(recursiveFibonacci(6));
// console.log(recursiveFibonacci(7));

function fibonacciUnder(num, a = 0, b = 1) {
  if (num < a) {
    return;
  }

  console.log(a);

  return fibonacciUnder(num, b, a + b);
}

fibonacciUnder(100);
