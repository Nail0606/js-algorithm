const fs = require("fs");
let input;
try {
  input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
} catch {
  input = `5
5 50 50 70 80 100
7 100 95 90 80 70 60 50
3 70 90 80
3 70 90 81
9 100 99 98 97 96 95 94 93 91`
    .trim()
    .split("\n");
}

let C = +input[0];
for (let i = 1; i <= C; i++) {
  let studentCount = input[i].split(" ")[0];
  let arr = input[i].split(" ");
  let shift = arr.shift();
  let arr2 = arr.map((n) => +n);
  let sum = arr2.reduce((a, b) => a + b);
  let avg = sum / studentCount;
  let arr3 = arr2.filter((n) => n > avg);
  let answer = parseFloat(arr3.length / studentCount);
  console.log((answer * 100).toFixed(3) + "%");
}
