function convertTo2D(original, m, n) {
  const len = original.length;
  if (len !== m * n) {
    return []; 
  }

  const result = [];
  for (let i = 0; i < m; i++) {
    const row = original.slice(i * n, (i + 1) * n);
    result.push(row);
  }

  return result;
}

const original = [1, 2, 3, 4, 5, 6];
const m = 2;
const n = 3;

const result = convertTo2D(original, m, n);
console.log(result);
