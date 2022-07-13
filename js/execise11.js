"use strict";

//task 1:
const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    let familyName = "";
    let result = "";
    if (arr.length === 0) {
        result = 'Семья пуста';
    }
    arr.forEach(function (item) {
        familyName += `${item} `;
        result = `Семья состоит из: ${familyName}`;
    });
    return result;
}

//console.log(showFamily(family));

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    arr.forEach(function (item) {
        console.log(item.toLocaleLowerCase());
    });
}
standardizeStrings(favoriteCities);