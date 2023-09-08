function findDisjointElements(nums1, nums2) {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);
  
    const answer = [];
    const distinctNums1 = [];
    const distinctNums2 = [];
  
    for (const num of set1) {
      if (!set2.has(num)) {
        distinctNums1.push(num);
      }
    }
  
    for (const num of set2) {
      if (!set1.has(num)) {
        distinctNums2.push(num);
      }
    }
  
    answer.push(distinctNums1);
    answer.push(distinctNums2);
  
    return answer;
  }

  
  const nums1 = [1, 2, 2, 3, 4, 5];
const nums2 = [2, 4, 6, 8];

const result = findDisjointElements(nums1, nums2);
console.log(result);
