const fs = require("fs");
let input;
try {
  input = fs.readFileSync("/dev/stdin").toString().trim();
} catch (error) {
  input = `nljj`.trim();
}

let croatiaAlpabet = ["c=","c-","dz=","d-","lj","nj","s=","z="];
let Arr = input
let count = 0;
for(let i = 0; i<croatiaAlpabet.length; i++){
  if(Arr.indexOf(croatiaAlpabet[i]) !== -1){
    while(Arr.indexOf(croatiaAlpabet[i]) !== -1){
    Arr = Arr.replace(croatiaAlpabet[i],'*');
    count++;
    //지금 lj 를 빼니까 nj 가 남아서 그게 또 빼지는 문제
    }
  }
}
console.log(Arr.length);