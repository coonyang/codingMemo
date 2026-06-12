nums = [2, 7, 11, 15];
target = 9;

function twoSum(nums, target) {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];

    if (map[diff] !== undefined) {
      // target - nums[i] 값을 map 오브젝트에서 찾음
      return [map[diff], i];
    }

    map[nums[i]] = i; // 못찾았으면 map에 해당 값 추가 // 맨 처음에 2가 들어오면 map에 { 2 : 0 } 으로 저장됨
  }
}

console.log(twoSum([2, 7, 11, 15], 9));

// 각각 비교하는 다른 방법

function towSum2(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        return [nums[i], nums[j]];
      }
    }
  }
}
