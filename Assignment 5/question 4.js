function findDisappearedNumbers(nums1, nums2) {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);
  
    const answer = [[], []];
  
    for (const num of set1) {
      if (!set2.has(num)) {
        answer[0].push(num);
      }
    }
  
    for (const num of set2) {
      if (!set1.has(num)) {
        answer[1].push(num);
      }
    }
  
    return answer;
  }

  const nums1 = [4, 3, 2, 7, 8, 2, 3, 1];
const nums2 = [4, 3, 1, 2, 9, 6];
const answer = findDisappearedNumbers(nums1, nums2);
console.log(answer);
