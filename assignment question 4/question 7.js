function maxCount(m, n, ops) {
    let minRow = m;
    let minCol = n;
  
    for (const [row, col] of ops) {
      minRow = Math.min(minRow, row);
      minCol = Math.min(minCol, col);
    }
  
    return minRow * minCol;
  }
  const m = 3;
  const n = 3;
  const ops = [[2, 2], [3, 3]];
  
  const result = maxCount(m, n, ops);
  console.log(result);
  
  