const fs = require('fs');
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
let flag = 1
let i = 0;
while(flag){
  if(input[i] === "0 0"){
    break;
  }
  let arr = input[i].split(" ")
  let sum = +arr[0] + +arr[1];
  console.log(sum);
  i++;
}