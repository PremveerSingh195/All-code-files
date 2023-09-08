function minimumDifference(nums, k) {
    const n = nums.length;
    let maxNum = Math.max(...nums);
    let minNum = Math.min(...nums);
  
    if (maxNum - minNum <= 2 * k) {
      return 0;
    }
  
    maxNum -= k;
    minNum += k;
  
    maxNum = Math.max(...nums);
    minNum = Math.min(...nums);
  
    return maxNum - minNum;
  }

//   example

const nums1 = [1, 3, 6];
const k1 = 3;
console.log(minimumDifference(nums1, k1));


