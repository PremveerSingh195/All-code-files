function findOriginalArray(changed) {
    if (changed.length % 2 !== 0) {
     
      return [];
    }
  
    const frequency = new Map();
  
    
    for (const num of changed) {
      frequency.set(num, (frequency.get(num) || 0) + 1);
    }
  
    const original = [];
  
   
    for (const num of changed) {
      if (frequency.get(num) === 0) {
    
        continue;
      }
  
      const doubledNum = num * 2;
  
      if (!frequency.has(doubledNum) || frequency.get(doubledNum) === 0) {
    
        return [];
      }
  
      original.push(num);
      frequency.set(num, frequency.get(num) - 1);
      frequency.set(doubledNum, frequency.get(doubledNum) - 1);
    }
  
    return original;
  }

  const changed = [1, 3, 2, 6, 4, 8];
const original = findOriginalArray(changed);
console.log(original);
