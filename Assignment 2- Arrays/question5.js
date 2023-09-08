function maximumProduct(nums) {
    nums.sort((a, b) => a - b);
  
    const n = nums.length;
    const option1 = nums[n - 1] * nums[n - 2] * nums[n - 3]; 
    const option2 = nums[0] * nums[1] * nums[n - 1]; 
  
    return Math.max(option1, option2);
  }

  
//   exampl

const nums1 = [1, 2, 3];
console.log(maximumProduct(nums1));

const nums2 = [1, 2, 3, 4];
console.log(maximumProduct(nums2));


