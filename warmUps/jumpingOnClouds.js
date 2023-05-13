function jumpingOnClouds(c) {
  let jumps = 0;
  let idx = 0;

  while (idx < c.length) {
    if (idx + 2 < c.length && c[idx + 2] === 0) {
      idx += 2;
    } else idx++;

    jumps++;
  }

  return jumps - 1;
}

function main() {
  for (let input of this) {
    console.log('input: ', input);
    console.log('output: ', jumpingOnClouds(input), '\n\n');
  }
}
const inputs = [
  [0, 0, 1, 0, 0, 1, 0],
  [0, 0, 0, 1, 0, 0],
];

module.exports = { Main: main.apply(inputs) };
