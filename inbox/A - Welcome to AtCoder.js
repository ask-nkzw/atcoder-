var input = require('fs').readFileSync('/dev/stdin', 'utf8');
let a = +input[0];
let b = +input[1];
let c = +input[2];

let goukei =  a + b + c;
console.log( goukei + "myonmyon" );