/* Задача:
У вас есть список учеников, которые хотят поиграть в игру:
const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];
Но команд может быть только 3 по 3 человека. Напишите функцию sortStudentsByGroups, которая принимает 
в себя массив строк.
Внутри она сначала сортирует имена по алфавиту. Затем распределяет учеников по 3 человека в 3 группы 
по алфавитному порядку. Эти группы должны быть массивами. Как итог, функция возвращает новый массив 
с тремя командами и строкой как 4й элемент.
Пример:
sortStudentsByGroups(students)  =>
[
  [ 'Andrew', 'Ann', 'Bernard' ],
  [ 'Cris', 'Josh', 'Mark' ],
  [ 'Peter', 'Sam', 'Sandra' ],
  'Оставшиеся студенты: Takesi'
]
Если убрать одно студента из списка, то результат будет:
[
  [ 'Andrew', 'Ann', 'Bernard' ],
  [ 'Cris', 'Josh', 'Mark' ],
  [ 'Peter', 'Sam', 'Sandra' ],
  'Оставшиеся студенты: -'
]
А если добавить одного, то:
[
  [ 'Andrew', 'Ann', 'Bernard' ],
  [ 'Cris', 'Josh', 'Mark' ],
  [ 'Peter', 'Sam', 'Sandra' ],
  'Оставшиеся студенты: Takesi, Somebody'
]
То есть, меняется содержимое строки. Все оставшиеся ученики попадают туда.
Задача интересная, немного заковыристая, но все необходимое для неё мы уже проходили. Просто распишите 
логику действий строка за строкой. */
"use strict";

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Bernard', 'Takesi'];

/* function sortStudentsByGroups(arr) {
    let sortArr = '';
    let sortArrGroup = [];
    let sortArrAll = [];
    const length = arr.length;
    sortArr = arr.sort();
    for (let i = 0; i < 3; i++) {
        sortArrGroup = sortArr.splice(0, 3);
        sortArrAll[i] = sortArrGroup;
        if (sortArr.length === 0) {
            sortArrAll[i + 1] = `Оставшиеся студенты: -`;
        } else if (sortArr.length > 0) {
            let str = sortArr.join(', ');
            sortArrAll[i + 1] = `Оставшиеся студенты: ${str}`;
        }
    }
    return sortArrAll;
} */


console.log(sortStudentsByGroups(students));
function sortStudentsByGroups(arr) {
arr.sort();
    const a = [], b = [], c = [], rest = [];

    for (let i = 0; i < arr.length; i++) {
        if (i < 3) {
            a.push(arr[i]);
        } else if (i < 6) {
            b.push(arr[i]);
        } else if (i < 9) {
            c.push(arr[i]);
        } else {
            rest.push(arr[i]);
        }
    }
    return [a,b,c, `Оставшиеся студенты: ${rest.length === 0 ? '-' : rest.join(', ')}`];
}