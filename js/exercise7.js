"use strict";

//1
function calculateVolumeAndArea(edge) {

    if (typeof edge !== 'number' || edge < 0 || !Number.isInteger(edge)) {
        return 'При вычислени возникла ошибка';
    }

    let v = edge * edge * edge;
    let p = (edge * edge) * 6;

    return `Обьем куба: ${v}, площадь всей поверхности: ${p}`;
}
console.log(calculateVolumeAndArea(5));
console.log(calculateVolumeAndArea(15));
console.log(calculateVolumeAndArea(15.5));
console.log(calculateVolumeAndArea('15'));
console.log(calculateVolumeAndArea(-15));

//2

function getCoupeNumber(num) {
    if (typeof num !== "number" || num < 0 || !Number.isInteger(num)) {
        return 'Ошибка. Проверьте правильность введенного номера места';
    }
    if (num === 0 || num > 36) {
        return 'Таких мест в вагоне не существует';
    }


    if (num > 0 && num <= 36 && Number.isInteger(num)) {
        //Создание массива = [1, ..., 36];
        let arr = [];
        for (let i = 0; i < 36; i++) {
            arr[i] = i + 1;
        }
        //поиск купе;
        let firstPlace = 1;
        let lastPlace = 4;
        for (let i = 1; i <= 9; i++) {

            if (num >= arr[firstPlace - 1] && num <= arr[lastPlace - 1]) {
                return i;
            }
            firstPlace += 4;
            lastPlace += 4;
        }

    }
}


console.log(getCoupeNumber(33));
console.log(getCoupeNumber(7));
console.log(getCoupeNumber(300));
console.log(getCoupeNumber(0));
console.log(getCoupeNumber(7.7));
console.log(getCoupeNumber(-10));
console.log(getCoupeNumber('Hello'));