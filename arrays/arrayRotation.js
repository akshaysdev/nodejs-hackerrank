function rotLeft(arr, d) {
  //   let start = 0;
  //   let end = arr.length - 1;

  //   while (d > 0) {
  //     start = (start + 1) % arr.length;
  //     end = (end + 1) % arr.length;
  //     d--;
  //   }

  //   const output = [];
  //   for (let idx = start; idx !== end; idx = (idx + 1) % arr.length) {
  //     output.push(arr[idx]);
  //   }
  //   output.push(arr[end]);

  //   return output;

  for (let i = 0; i < d; i++) {
    arr.push(arr.shift());
  }
  return arr;
}

function main() {
  for (let input of this) {
    console.log('input: ', input);
    console.log('output: ', rotLeft(input.arr, input.d), '\n\n');
  }
}

const inputs = [
  { arr: [1, 2, 3, 4, 5], d: 4 },
  { arr: [41, 73, 89, 7, 10, 1, 59, 58, 84, 77, 77, 97, 58, 1, 86, 58, 26, 10, 86, 51], d: 10 },
  { arr: [33, 47, 70, 37, 8, 53, 13, 93, 71, 72, 51, 100, 60, 87, 97], d: 13 },
];

module.exports = { Main: main.apply(inputs) };
