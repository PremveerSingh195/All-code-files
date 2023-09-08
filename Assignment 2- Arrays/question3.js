function findLHS(nums) {
    const numFreq = new Map();
    let maxLength = 0;
  
  
    for (let num of nums) {
      if (numFreq.has(num)) {
        numFreq.set(num, numFreq.get(num) + 1);
      } else {
        numFreq.set(num, 1);
      }
    }
  
 
    for (let [num, freq] of numFreq) {
      if (numFreq.has(num + 1)) {
        const currLength = freq + numFreq.get(num + 1);
        maxLength = Math.max(maxLength, currLength);
      }
    }
  
    return maxLength;
  }

  


const nums = [1, 3, 2, 2, 5, 2, 3, 7];
console.log(findLHS(nums));
