function canPlaceFlowers(flowerbed, n) {
    let count = 0;
    const length = flowerbed.length;
  
    for (let i = 0; i < length; i++) {
      if (flowerbed[i] === 0) {
        const prev = i === 0 ? 0 : flowerbed[i - 1];
        const next = i === length - 1 ? 0 : flowerbed[i + 1];
        if (prev === 0 && next === 0) {
          flowerbed[i] = 1; 
          count++;
        }
      }
    }
  
    return count >= n;
  }

//   example

const flowerbed1 = [1, 0, 0, 0, 1];
const n1 = 1;
console.log(canPlaceFlowers(flowerbed1, n1)); 

const flowerbed2 = [1, 0, 0, 0, 1];
const n2 = 2;
console.log(canPlaceFlowers(flowerbed2, n2)); 


