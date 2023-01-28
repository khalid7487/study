// fibonacci series calculate result
function fibonacci(n) {
  if (n < 2) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

console.log(fibonacci(7));
// result 21

// fibonacci series print
function fibonacci1(n) {
  if (n == 1) {
    return [0, 1];
  } else {
    let arr = fibonacci1(n - 1);
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    return arr;
  }
}

console.log(fibonacci1(8));

// optimize way with memorization
//js object, keys will be arg to fn, value will the be return value

const fib = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
};

console.log(fib(50));
