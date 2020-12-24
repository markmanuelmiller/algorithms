// https://leetcode.com/problems/remove-element/submissions/

// attempt 1:

const removeElement = (nums, val) => {
  let i = 0;
  let j = nums.length - 1;
  let k = 0;

  while (i <= j) {
    if (nums[i] === val) {
      while (nums[j] === val) {
        if (j <= i) {
          return k;
        }

        j--;
      }

      // swap values
      [nums[j], nums[i]] = [nums[i], nums[j]];
    }

    i++;
    k++;
  }

  return k;
};

// other solutions

// faster

const removeElement = (nums, val) => {
  let j = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[j] = nums[i];
      j++;
    }
  }
  return j;
};
