function sortedSquares(nums) {
    const n = nums.length;
    const result = new Array(n);
    let left = 0;
    let right = n - 1;
    let index = n - 1;
  
    while (left <= right) {
      const leftSquare = nums[left] * nums[left];
      const rightSquare = nums[right] * nums[right];
  
      if (leftSquare > rightSquare) {
        result[index] = leftSquare;
        left++;
      } else {
        result[index] = rightSquare;
        right--;
      }
  
      index--;
    }
  
    return result;
  }

  const nums = [-4, -2, 0, 2, 4];

const result = sortedSquares(nums);
console.log(result); 
