function shuffle(nums, n) {
    const result = [];
  
    for (let i = 0; i < n; i++) {
      result.push(nums[i]);
      result.push(nums[n + i]); 
    }
  
    return result;
  }
  const nums = [1, 2, 3, 4];
  const n = 2;
  
  const result = shuffle(nums, n);
  console.log(result); 
    