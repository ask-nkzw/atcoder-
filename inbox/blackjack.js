var input = require("fs").readFileSync("/dev/stdin", "utf8").split(' ');
let a = +input[0];
let b = +input[1];
let c = +input[2];

let goukei =  a + b + c;
if (goukei >= 22) {
    console.log("bust");
} else {
    console.log("win");
}