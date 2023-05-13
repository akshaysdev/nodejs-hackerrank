function repeatedString(s, n) {
  let noOfAsInStr = 0;
  for (let idx = 0; idx < s.length; idx++) {
    if (s[idx] === 'a') noOfAsInStr++;
  }
  const noOfTimesStrRepeated = Math.floor(n / s.length);
  const remainder = n % s.length;

  let remainderAsInStr = 0;
  for (let idx = 0; idx < remainder; idx++) {
    if (s[idx] === 'a') remainderAsInStr++;
  }

  return noOfAsInStr * noOfTimesStrRepeated + remainderAsInStr;
}

function main() {
  for (let input of this) {
    console.log('input: ', input);
    console.log('output: ', repeatedString(input.s, input.n), '\n\n');
  }
}
const inputs = [
  { s: 'aba', n: 10 },
  { s: 'a', n: 1000000000000 },
];

module.exports = { Main: main.apply(inputs) };
