function distributeCandies(candyType) {
    const candySet = new Set(candyType);
    const maxCandies = Math.floor(candyType.length / 2);
    
    return Math.min(candySet.size, maxCandies);
  }
 
//   example

const candyType = [1, 1, 2, 2, 3, 3];
console.log(distributeCandies(candyType)); // Output: 3
