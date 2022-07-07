"use strict";

// firstTask

// for (i=5; i<=10; i++) {
//     console.log(i);
// }

for (let i = 5; i < 11; i++) {
    console.log(i);
}


// secondTask

// for (i=20; i>=10; i--) {
//     if ( i === 13 ) {
//         break }
//         console.log(i);
// }

for (let i = 20; i >= 10; i--) {
    if (i === 13) break;
    console.log(i)
}


// // thirdTask
// let result = 0;
// for (i=0; i<10; i++) {
//     result++;
    
//     if (result % 2 === 0) {
//     console.log(result);
//     }
// }

for (let i = 2; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}


// //4

// for (let i = 2; i <= 16; i++) {
//         if (i % 2 === 0) {
//             continue;
//         } else {
//             console.log(i);
//         }
//     }


let i = 2;

while (i <= 16) {
    if (i % 2 === 0) {
        i++;
        continue;
    } else {
        console.log(i);
    }
    i++;
}


let i = 2;
while (i <= 16) { 
    i++;
    if (i % 2 === 0) {
        continue;
    } else {
        console.log(i);
    }
}

let arr = [];
let a = 0
for (let i=5; i<= 10; i++) {
    
    arr[a] = i;
    a++;
    if (i === 10) {
        console.log(arr);
    }
   
}


const arrayOfNumbers = [];

    for (let i = 5; i < 11; i++) {
        arrayOfNumbers[i - 5] = i;
    }

    console.log(arrayOfNumbers);
    