"use strict";

// task1
function sayHello(userName) {
    let string = 'Привет, ' + userName;
    return string;
}
console.log(sayHello('Серегй!'));

// task2

function returnNeighboringNumbers(num) {
    let arr = [];
    arr[0] = num - 1;
    arr[1] = num;
    arr[2] = num + 1;
    return arr;
}
console.log(returnNeighboringNumbers(5));

// task3

function getMathResult(num, times) {
    if (typeof times === 'string' || times <= 0) {
        return num;
    }
        let str = '';
        for (let i = 1; i <= times; i++) {
            if (times === i) {
                str += `${num * i}`;
            } else {
                str += `${num * i}---`;
            }

        }
    
    return str;
}
console.log(getMathResult(5, 3)); // 5---10---15
console.log(getMathResult(3, 10)); // 3---6---9---12---15---18---21---24---27---30
console.log(getMathResult(10, 5)); // 10---20---30---40---50
console.log(getMathResult(10, '5')); //10
console.log(getMathResult(10, 0)); //10
console.log(getMathResult(20, -5)); //20