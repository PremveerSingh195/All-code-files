function moveZeroes(nums) {
    let nonZeroPtr = 0;
  

    for (let currPtr = 0; currPtr < nums.length; currPtr++) {
   
      if (nums[currPtr] !== 0) {
      
        nums[nonZeroPtr] = nums[currPtr];
        nonZeroPtr++;
      }
    }
  
  
    while (nonZeroPtr < nums.length) {
      nums[nonZeroPtr] = 0;
      nonZeroPtr++;
    }
  }

  
// example

const nums = [0, 1, 0, 3, 12];
moveZeroes(nums);
console.log(nums); 
