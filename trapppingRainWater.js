/**
 * https://leetcode.com/problems/trapping-rain-water/submissions/
 * @param {number[]} height
 * @return {number}
 */

var trap = function (height) {
  let rain = 0;
  let left = 0;
  let right = 0;
  let highest = 0;

  const countRain = (l, r) => {
    const h = Math.min(height[l], height[r]);
    let bucket = 0;
    while (l < r) {
      const result = h - height[l];
      if (result > 0) {
        bucket += result;
      }
      l++;
    }
    return bucket;
  };

  while (left < height.length) {
    if (height[left] <= 0) {
      left++;
      continue;
    }

    right = left + 1;
    highest = right;

    while (right < height.length && height[right] < height[left]) {
      if (height[right] > height[highest]) {
        highest = right;
      }

      right++;
    }

    // if right did not reach the end
    if (height[right] > height[highest]) {
      rain += countRain(left, right);
      left = right;
    } else {
      rain += countRain(left, highest);
      left = highest;
    }
  }

  return rain;
};

// other submissions

var trap = function (height) {
  let volume = 0;
  let leftMax = height[0];
  let rightMax = height[height.length - 1];
  let left = 0;
  let right = height.length - 1;

  while (left < right) {
    if (leftMax <= rightMax) {
      left++;
      if (height[left] > leftMax) {
        leftMax = height[left];
      } else {
        volume += leftMax - height[left];
      }
    } else {
      right--;
      if (height[right] > rightMax) {
        rightMax = height[right];
      } else {
        volume += rightMax - height[right];
      }
    }
  }

  return volume;
};
