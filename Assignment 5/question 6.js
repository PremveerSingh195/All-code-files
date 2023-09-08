function findDuplicates(nums) {
    const n = nums.length;
    const result = [];
  
    for (let i = 0; i < n; i++) {
      const index = Math.abs(nums[i]) - 1;
      if (nums[index] > 0) {
        nums[index] = -nums[index];
      } else {
        result.push(Math.abs(nums[i]));
      }
    }
  
    return result;
  }

  const nums = [4, 3, 2, 7, 8, 2, 3, 1];
const duplicates = findDuplicates(nums);
console.log(duplicates);
