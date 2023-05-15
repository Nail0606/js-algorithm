const fs = require("fs");
let input;
try {
  input = fs.readFileSync("/dev/stdin").toString().trim();
} catch {
  input = `14`.trim();
}


let num = 0;
let count = 1;
let flag = 0;
let diff;
let m;
let n;
while(num < input){
  num += count;
  count++;
  if(flag === 0){
    flag = 1;
  }else{
    flag = 0;
  }
}
diff = num - input;
let num2;
if(flag === 0){
  for(let i = 0; i < diff; i++){

  }
}else{
  for(let i = 0; i < diff; i++){
    
  }
}
console.log(count - 1,flag,diff);