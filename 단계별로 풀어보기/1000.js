//두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.

//처음에는 이렇게 작성했다
//단순히 a,b로 값이 주어지는줄 알았고, js로 입력하는 법을 몰랐다.

console.log(A + B);

//그 후 js에서의 입력 방법에 대해 알게 되었다.

var fs = require("fs");
var input = fs.readFileSync("/dev/stdin").toString().split(" ");
var a = parseInt(input[0]);
var b = parseInt(input[1]);
console.log(a + b);
