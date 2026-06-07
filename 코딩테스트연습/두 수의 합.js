nums = [2, 7, 11, 15];
target = 9;

function twoSum(nums, target) {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];

    if (map[diff] !== undefined) {
      return [map[diff], i];
    }

    map[nums[i]] = i;
  }
}

console.log(twoSum([2, 7, 11, 15], 9));
