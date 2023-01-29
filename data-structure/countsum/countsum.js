/*
  here we need to calculate a positive integer number with an array 
  if array any possible combination of sum is  equal to the positive number 
  then return true 
  else return false  
 */

// the brute force solution is given below:
const canSum = (targetSum, numbers) => {
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;

  for (let num of numbers) {
    const remainder = targetSum - num;
    if (canSum(remainder, numbers) === true) {
      return true;
    }
  }
  return false;
};

console.log(canSum(7, [2, 3]));
console.log(canSum(7, [5, 3, 4, 7]));
console.log(canSum(7, [2, 4]));
console.log(canSum(8, [2, 3, 5]));
// console.log(canSum(300, [7, 14]));

/*
  Note: m =target sum 
        n= array length
  Time complexity: o(n^m) and space complexity: o(m)
*/

const optimizeCanSum = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;

  for (let num of numbers) {
    const remainder = targetSum - num;
    if (optimizeCanSum(remainder, numbers, memo) === true) {
      memo[targetSum] = true;
      return true;
    }
  }
  memo[targetSum] = false;
  return false;
};
console.log("optimize with memorization");

console.log(optimizeCanSum(7, [2, 3]));
console.log(optimizeCanSum(7, [5, 3, 4, 7]));
console.log(optimizeCanSum(7, [2, 4]));
console.log(optimizeCanSum(8, [2, 3, 5]));
console.log(optimizeCanSum(300, [7, 14]));

/*
  Note: m =target sum 
        n= array length
  Time complexity: o(n*m) and space complexity: o(m)
*/
