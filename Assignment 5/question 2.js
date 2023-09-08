function arrangeCoins(n) {
    let left = 0;
    let right = n;
  
    while (left <= right) {
      let k = Math.floor((left + right) / 2);
      let totalCoins = (k * (k + 1)) / 2;
  
      if (totalCoins === n) {
        return k; 
      } else if (totalCoins < n) {
        left = k + 1; 
      } else {
        right = k - 1;
      }
    }
  
    return right; 
  }

  const n = 8;
const completeRows = arrangeCoins(n);
console.log(completeRows);

  