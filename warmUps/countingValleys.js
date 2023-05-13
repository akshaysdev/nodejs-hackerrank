function countingValleys(steps, path) {
  let valleyCount = 0;

  let idx = 0;
  let currSeaLvl = 0;
  while (idx < steps) {
    if (path[idx] === 'U') {
      currSeaLvl++;
      if (currSeaLvl === 0 && idx !== 0) {
        valleyCount++;
      }
    }

    if (path[idx] === 'D') {
      currSeaLvl--;
    }

    idx++;
  }
  return valleyCount;
}

function main() {
  for (let input of this) {
    console.log('input: ', input);
    console.log('output: ', countingValleys(input.steps, input.path), '\n\n');
  }
}
const inputs = [{ path: 'UDDDUDUU', steps: 8 }];

module.exports = { Main: main.apply(inputs) };
