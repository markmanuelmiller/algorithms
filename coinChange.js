var coinChange = function (coins, amount) {
  const memo = {};

  const recurse = (amount) => {
    if (amount in memo) return memo[amount];
    if (amount === 0) return [];
    if (amount < 0) return null;

    let change = null;

    for (let coin of coins) {
      const newAmount = amount - coin;
      const result = recurse(newAmount);
      if (result !== null) {
        // console.log(result);
        // console.log(coin);
        // console.log(memo);
        const newChange = [...result, coin];
        if (change === null || newChange.length < change.length) {
          // memo[newAmount] = newChange;
          change = newChange;
          // return newChange;
        }
      }
    }

    memo[amount] = change;
    return change;
  };

  const finalChange = recurse(amount);

  return finalChange === null ? -1 : finalChange.length;
};

debugger;
console.log(coinChange([1, 2, 5], 11)); // 3
const ans = coinChange([2, 5], 11); // 4
console.log(ans);

// coinChange without recursion

const coinChangeIterative = function (coins, amount) {
  const cache = new Array(amount + 1).fill(amount + 1);
  cache[0] = 0;
  for (let i = 0; i <= amount; i++) {
    for (let coin = 0; coin < coins.length; coin++) {
      if (coins[coin] <= i) {
        cache[i] = Math.min(cache[i], cache[i - coins[coin]] + 1);
      }
    }
  }
  return cache[amount] > amount ? -1 : cache[amount];
};
