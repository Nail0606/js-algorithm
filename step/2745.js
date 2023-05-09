const fs = require("fs");
let input;
try {
  input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
} catch {
  input = `ZZZZZ 36`.trim().split(" ");
}

let B = Number(input[1]);
let N = input[0];

console.log(parseInt(N, B));
