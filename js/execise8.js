"use strict";

/* 1) Создайте функцию, которая принимает в себя целое число минут и возвращает время в нужном формате строки.
 (Смотри пример). Обратите внимание на окончание слова "час" - оно меняется в зависимости от цифры. 
 Если вместо аргумента приходит не число, дробное или отрицательное число - функция возвращает строку 
 "Ошибка, проверьте данные"

Внимание! Давайте пока ограничимся максимум 600ю минутами (10 часов). Так как проверки на большие числа
 будут раздувать код (33 часа, 31 час, 11 часов и тд). Этого будет достаточно и код будет проверять именно 
 этот промежуток (1 - 10 часов). Но вы можете реализовать и полный скрипт, он тоже должен проходить тесты.

Пример:

getTimeFromMinutes(150) => "Это 2 часа и 30 минут"

getTimeFromMinutes(50) => "Это 0 часов и 50 минут"

getTimeFromMinutes(0) => "Это 0 часов и 0 минут"

getTimeFromMinutes(-150) => "Ошибка, проверьте данные" */

function getTimeFromMinutes(minutes) {

    if (typeof minutes !== 'number' || minutes < 0 || !Number.isInteger(minutes) || minutes > 600) {
        return 'Ошибка, проверьте данные';
    }
    let str = ``;
    let hour = Math.trunc(minutes / 60);
    let minute = minutes % 60;
    if (hour === 0 || hour >= 5) {
        str = `Это ${hour} часов и ${minute} минут`;
    }
    if (hour > 1 && hour <= 4) {
        str = `Это ${hour} часа и ${minute} минут`;
    }
    if (hour === 1) {
        str = `Это ${hour} час и ${minute} минут`;
    }

    //1-4 - часа, 5-10 - часов
    return str;
}

console.log(getTimeFromMinutes(150));
console.log(getTimeFromMinutes(50));
console.log(getTimeFromMinutes(0));
console.log(getTimeFromMinutes(-150));

/* 2) Напишите функцию, которая принимает в себя 4 числа и возвращает самое большее из них. Если один из 
аргументов не является числом или их меньше 4 - возвращается 0. Дробные числа разрешены.

Пример:

findMaxNumber(1, 5, 6.6, 11); =>  11

findMaxNumber(1, 5, '6', '10');  =>  0

У этой задачи есть очень много вариантов решения, в том числе и встроенное в JS. Подходит любое :)

Но постарайтесь решить самостоятельно  */

function findMaxNumber(num1, num2, num3, num4) {

    if (typeof num1 !== 'number' ||
        typeof num2 !== 'number' ||
        typeof num3 !== 'number' ||
        typeof num4 !== 'number') {
        return 0;
    } else {
        return Math.max(num1, num2,num3,num4);
    }
}

console.log(findMaxNumber(1, 5, 6.6, 11));
console.log(findMaxNumber(1, 5, '6', '10'));


/* else if (num1 === null || num2 === null || num3 === null || num4 === null) {
           return 0;
       } */