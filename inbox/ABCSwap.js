var input = require("fs").readFileSync("/dev/stdin", "utf8").split(' ');


let tmp = input[0]
input[0] = input[1]
input[1] = tmp

tmp = input[1]
input[1] = input[2]
input[2] = tmp

console.log(input.join(' '))


// let x = parseInt(hyoujun[0]);
// let y = parseInt(hyoujun[1]);
// let z = parseInt(hyoujun[2]);

// let hako = [z, x, y];

// console.log(hako.join(' '));

