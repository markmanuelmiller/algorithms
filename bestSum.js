// https://www.youtube.com/watch?v=oBt53YbR9Kk&ab_channel=freeCodeCamp.org

// bestSum with memoization

const bestSum = (targetSum, numbers, memo = {}) => {
  // first base case is to check memo object
  if (targetSum in memo) return memo[targetSum];
  // second base case is to check if targetSum is 0
  if (targetSum === 0) return [];
  // third base case is to check if targetSum is less than 0
  if (targetSum < 0) return null;

  let shortest = null;

  for (let num of numbers) {
    const remainder = targetSum - num;
    const result = bestSum(remainder, numbers, memo);
    if (result !== null) {
      // result.push(num); // <= this does not work. we need to clone the array.
      const combination = [...result, num];
      // if (shortest === null || result.length < shortest.length) {
      if (shortest === null || combination.length < shortest.length) {
        shortest = combination;
      }
    }
  }

  memo[targetSum] = shortest;
  return shortest;
};

// m = target sum
// n = numbers.length
//
// Brute force
// time: O(n^m * m)
// space: O(m^2)
//
// Memoized
// time: O(n*m^2)
// space: O(m^2)

console.log(bestSum(7, [5, 3, 4, 7])); // [7]
console.log(bestSum(8, [2, 3, 5])); // [3, 5]
console.log(bestSum(8, [1, 4, 5])); // [4, 4]
console.log(bestSum(100, [1, 2, 5, 25])); // [25, 25, 25, 25]
