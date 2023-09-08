function isMonotonic(nums) {
    let increasing = true;
    let decreasing = true;
  
    for (let i = 1; i < nums.length; i++) {
      if (nums[i] < nums[i - 1]) {
        increasing = false;
      }
      if (nums[i] > nums[i - 1]) {
        decreasing = false;
      }
    }
  
    return increasing || decreasing;
  }

//   example

const nums1 = [1, 2, 2, 3];
console.log(isMonotonic(nums1));

const nums4 = [1, 2, 4, 3];
console.log(isMonotonic(nums4)); 
