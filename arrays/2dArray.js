function hourglassSum(arr) {
  let maxSum = -Infinity;
  
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      const top = arr[i][j] + arr[i][j + 1] + arr[i][j + 2];
      const mid = arr[i + 1][j + 1];
      const bottom = arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2];

      const currSum = top + mid + bottom;
      maxSum = maxSum < currSum ? currSum : maxSum;
    }
  }
  return maxSum;
}

function main() {
  for (let input of this) {
    console.log('input: ', input);
    console.log('output: ', hourglassSum(input), '\n\n');
  }
}

const inputs = [
  [
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 2, 4, 4, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 1, 2, 4, 0],
  ],
  [
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 9, 2, -4, -4, 0],
    [0, 0, 0, -2, 0, 0],
    [0, 0, -1, -2, -4, 0],
  ],
  [
    [-9, -9, -9, 1, 1, 1],
    [0, -9, 0, 4, 3, 2],
    [-9, -9, -9, 1, 2, 3],
    [0, 0, 8, 6, 6, 0],
    [0, 0, 0, -2, 0, 0],
    [0, 0, 1, 2, 4, 0],
  ],
];

module.exports = { Main: main.apply(inputs) };
