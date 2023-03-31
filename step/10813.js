const fs = require('fs');
let input;
input = fs.readFileSync("dev/stdin").toString().trim().split("\n");
let N = parseInt(input[0].split(" ")[0]);
let M = parseInt(input[0].split(" ")[1]);
let basket = [];
let ballA;
let ballB;


for(let i = 0; i < N; i++){
  basket[i] = i+1;
}
for(let i=0; i< M; i++){
  let temp;
  ballA = parseInt(input[i + 1].split(" ")[0]);
  ballB = parseInt(input[i + 1].split(" ")[1]);
  temp = basket[ballA -1];
  basket[ballA -1] = basket[ballB -1];
  basket[ballB -1] = temp;
}
let answer = basket.join(" ");
console.log(answer)
