// https://www.youtube.com/watch?v=oBt53YbR9Kk&ab_channel=freeCodeCamp.org

// howSum with memoization

const howSum = (targetSum, numbers, memo = {}) => {
  // first base case is to check memo object
  if (targetSum in memo) return memo[targetSum];
  // second base case is to check if targetSum is 0
  if (targetSum === 0) return [];
  // third base case is to check if targetSum is less than 0
  if (targetSum < 0) return null;

  for (let num of numbers) {
    const remainder = targetSum - num;
    const result = howSum(remainder, numbers, memo);
    if (result !== null) {
      result.push(num);
      memo[targetSum] = result;
      return result;
    }
  }

  memo[targetSum] = null;
  return null;
};

// m = target sum
// n = numbers.length

// Brute force
// time: O(n^m * m)
// space: O(m)
//
// Memoized
// time: O(n*m^2)
// space: O(m^2)

console.log(howSum(7, [2, 3])); // [3, 2, 2]
console.log(howSum(7, [5, 3, 4, 7])); // [4, 3]
console.log(howSum(7, [2, 4])); // null
console.log(howSum(8, [2, 3, 5])); // [2, 2, 2, 2]
console.log(howSum(300, [7, 14])); // null
