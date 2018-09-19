module.exports = function solveSudoku(matrix) {
  if (solve(matrix)) return matrix;
  else return 0;
}

function solve(matrix) {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (matrix[i][j] != 0) {
        continue;
      }
      for (let key = 1; key <= 9; key++) {
        if (findPossibleValue(matrix, i, j, key) == true) {
          matrix[i][j] = key;
          if (solve(matrix)) {
            return true;
          }
          matrix[i][j] = 0;
        }
      }
      return false;
    }
  }
  return true;
}

function findPossibleValue(matrix, rowIndex, columnIndex, key)
{
  if (!findRowValue(matrix, rowIndex, columnIndex, key)) return false;
  if (!findColumnValue(matrix, rowIndex, columnIndex, key)) return false;
  if (!findBlockValue(matrix, rowIndex, columnIndex, key)) return false;
  return true;
}

function findRowValue(matrix, rowIndex, columnIndex, key) {
  for (let j = 0; j < 9; j++) {
    if (j != columnIndex && matrix[rowIndex][j] == key) {
      return false;
    }
  }
  return true;
}

function findColumnValue(matrix, rowIndex, columnIndex, key) {
  for (let i = 0; i < 9; i++) {
    if (i != rowIndex && matrix[i][columnIndex] == key) {
      return false;
    }
  }
  return true;
}

function findBlockValue(matrix, rowIndex, columnIndex, key) {
  let startRow = Math.floor((rowIndex / 3)) * 3;
  let startColumn = Math.floor((columnIndex / 3)) * 3;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (i != rowIndex && j != columnIndex && matrix[startRow + i][startColumn + j] == key) {
        return false;
      }
    }
  }
  return true;
}