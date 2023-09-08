function containsDuplicate(nums) {
    const numSet = new Set();
  
    for (let num of nums) {
      if (numSet.has(num)) {
        return true; 
      }
      numSet.add(num);
    }
  
    return false; 
  }

//   example

const nums1 = [1, 2, 3, 1];
console.log(containsDuplicate(nums1)); 

const nums2 = [1, 2, 3, 4];
console.log(containsDuplicate(nums2));

const nums3 = [1, 1, 1, 1, 1];
console.log(containsDuplicate(nums3));
