"use strict";
let num = 10;
function showFirstMessage(text, text2) {
    console.log(text);
    console.log(text2);
    num = 20;
}
 
showFirstMessage("hello World!", "privet");
console.log(num);

function calc(a, b) {
    return (a + b);
}
console.log(calc(4,3));
console.log(calc(3,3));
console.log(calc(10,3));