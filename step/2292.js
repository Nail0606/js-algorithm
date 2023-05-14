const fs = require("fs");
let input;
try {
  input = fs.readFileSync("/dev/stdin").toString().trim();
} catch {
  input = `21`.trim();
}

let six = 6;
let count = 0;
while (input - 6 >= 0) {
  input -= six;
  count++;
  six += 6;
}
console.log(count + 1);

/*
1
2 3 4 5 6 7
8 9 10 11 12 13 14 15 16 17 18 19 
20 21 22 23 24 25 26 27 28 29 30 31 32 33 34 35 36 37
38 39 40 41 42 43 44 45 46 47 48 49 50 51 52 53 54 55 56 57 58 59 60 61


6의 배수로 증가

하나의 계층이 증가할때마다 
지나가야 할 방의 갯수 + 1
*/
