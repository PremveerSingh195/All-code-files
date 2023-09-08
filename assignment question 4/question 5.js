function arrangeCoins(n) {
    let left = 0;
    let right = n;
  
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      const coinsNeeded = (mid * (mid + 1)) / 2; 
  
      if (coinsNeeded === n) {
        return mid; 
      } else if (coinsNeeded < n) {
        left = mid + 1; 
      } else {
        right = mid - 1; 
      }
    }
  
    return right; 
  }

  const n = 8;

const result = arrangeCoins(n);
console.log(result); 
