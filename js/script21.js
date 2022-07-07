"use strict";

console.log( NaN || 2 || undefined ); //true, 2;
console.log( NaN && 2 && undefined ); //fals, NaN;
console.log( 1 && 2 && 3 ); //true, 3
console.log( 1 && 2 || !3 ); //true, 2
console.log( 25 || null && !3 ); //, 25
console.log( NaN || null || !3 || undefined || 5 ); // true, 5
console.log( NaN || null && !3 && undefined || 5 ); //true, 5
console.log( 5 === 5 && 3 > 1 || 5 ); // true
console.log( 3 > 1);

/* const humburger = 3;
const fries =3;
const cola = 0;
const nugeets = 2;

if (humburger === 3 && cola || fries === 3 && nugeets) {
    console.log("done!");
} */

/* let humburger;
const fries = NaN;
const cola = 0;
const nugeets = 2;

if (humburger || cola || fries === 3 || nugeets) {
        console.log('done!');
} */

let hamburger;
const fries = NaN;
const cola = 0;
const nuggets = 2;

if (hamburger && cola || fries === 3 && nuggets) {
console.log('hamburger && cola || fries === 3 && nuggets');
} else { 
    console.log(hamburger && cola || fries === 3 && nuggets);}


console.log(fries || 3 && nuggets);