const fs = require('fs');
let input = fs.readFileSync("/dev/stdin").toString().trim();
let arr = [];
for(let i = 1; i <= input; i++){
  console.log("*".repeat(i));
}
