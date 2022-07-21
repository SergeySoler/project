"use strict";

//task 3
const someString = 'This is some strange string';

function reverse(str) {
    if (typeof str !== 'string') {
        return 'Ошибка!';
    }
    return str.split('').reverse().join('');
}
console.log(reverse(someString));

//task4 ?? решить на работе

