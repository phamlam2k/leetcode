/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let arr = [];

  for (let i = 0; i <= nums.length - 1; i++) {
    let findNumber = target - nums[i];

    for (j = i + 1; j <= nums.length - 1; j++) {
      if (nums[j] === findNumber) {
        arr = [i, j];
      }
    }
  }

  return arr;
};
