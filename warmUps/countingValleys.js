function countingValleys(steps, path) {
  let valleyCount = 0;

  let idx = 0;
  let currSeaLvl = 0;
  while (idx < steps) {
    // console.log('path[idx]: ', path[idx]);
    // console.log('idx: ', idx);
    if (path[idx] === 'U') {
      currSeaLvl++;
      if (currSeaLvl === 0 && idx !== 0) {
        valleyCount++;
      }
    }

    if (path[idx] === 'D') {
      currSeaLvl--;
    }
    // console.log('currSeaLvl: ', currSeaLvl);

    idx++;
    // console.log();
  }
  return valleyCount;
}

function main() {
  for (let input of this) {
    console.log(input);
    console.log('\n\n', countingValleys(input.steps, input.path), '\n\n');
  }
}
const inputs = [{ path: 'UDDDUDUU', steps: 8 }];

module.exports = { Main: main.apply(inputs) };
