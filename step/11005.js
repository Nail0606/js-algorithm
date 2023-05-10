const fs = require("fs");
let input;
try {
  input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
} catch {
  input = `600 32`
    .trim()
    .split(" ");
}

let N = +input[0];
let B = +input[1];
let C = 0;
let cnt = 0;
let array = [];
while(N !== 0){
  M = parseInt(N / B);
  C = parseInt(N % B)
  cnt++;
  N = parseInt(N / B);
  console.log(cnt, M, C);
  //array에 실행 결과 나머지들만 담기(push)
}

for(let i = 0; i< cnt; i++){

}