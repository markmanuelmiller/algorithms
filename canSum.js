// freecodecamp video on dynamic programming

// canSum with memoization

const canSum = (targetSum, numbers, memo = {}) => {
  // first base case is to check memo object
  if (targetSum in memo) return memo[targetSum];
  // second base case is to check if targetSum is 0
  if (targetSum === 0) return true;
  // third base case is to check if targetSum is less than 0
  if (targetSum < 0) return false;

  // for each number in the numbers array...
  for (let num of numbers) {
    const remainder = targetSum - num;
    // recursively call canSum, passing in new remainder
    if (canSum(remainder, numbers, memo) === true) {
      memo[targetSum] = true;
      return true;
    }
  }

  memo[targetSum] = false;
  return false;
};

console.log(canSum(7, [2, 3])); // true
console.log(canSum(7, [5, 3, 4, 7])); // true
console.log(canSum(7, [2, 4])); // false
console.log(canSum(8, [2, 3, 5])); // true
console.log(canSum(300, [7, 14])); // false
