function transposeMatrix(matrix) {
    const rows = matrix.length;
    const cols = matrix[0].length;
  
    const transpose = Array(cols).fill(null).map(() => Array(rows));
  
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        transpose[j][i] = matrix[i][j];
      }
    }
  
    return transpose;
  }

  const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  const result = transposeMatrix(matrix);
  console.log(result);  