function sortedSquares(nums) {
    const n = nums.length;
    let left = 0;
    let right = n - 1;
    const result = new Array(n);
  
    for (let i = n - 1; i >= 0; i--) {
      const squareLeft = nums[left] * nums[left];
      const squareRight = nums[right] * nums[right];
  
      if (squareLeft > squareRight) {
        result[i] = squareLeft;
        left++;
      } else {
        result[i] = squareRight;
        right--;
      }
    }
  
    return result;
  }

  const nums = [-4, -1, 0, 3, 10];
const squaredSorted = sortedSquares(nums);
console.log(squaredSorted);
