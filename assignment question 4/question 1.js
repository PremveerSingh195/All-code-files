function findCommonElements(arr1, arr2, arr3) {
  const result = [];
  let i = 0, j = 0, k = 0; 

  while (i < arr1.length && j < arr2.length && k < arr3.length) {
    if (arr1[i] === arr2[j] && arr2[j] === arr3[k]) {
      result.push(arr1[i]); 
      i++;
      j++;
      k++;
    } else if (arr1[i] < arr2[j]) {
      i++;
    } else if (arr2[j] < arr3[k]) {
      j++;
    } else {
      k++; 
    }
  }

  return result;
}

const arr1 = [1, 3, 4, 6, 7];
const arr2 = [2, 3, 4, 7];
const arr3 = [3, 4, 7, 9];

const result = findCommonElements(arr1, arr2, arr3);
console.log(result); 
