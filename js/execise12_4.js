"use strict";

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    if (arr.length === 0) {
        return 'Нет доступных валют';
    }
    arr.forEach(function (item, i) {
        if (item === missingCurr) {
            arr.splice(i, 1);
        }
    });
    let str = 'Доступные валюты:\n';
    arr.forEach(function (item, i) {
        str += `${item}\n`;
    });
    return str;
}
console.log(availableCurr([...baseCurrencies, ...additionalCurrencies],
    [...baseCurrencies, ...additionalCurrencies][0]));