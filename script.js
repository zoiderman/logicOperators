"use strict";

// const hamburger = 5;
// const fries = null;

// if (hamburger && fries) {
//     console.log('Im not hungry anymore')
// }

// const hamburger = 3;
// const fries = 1;
// const cola = 0;

// console.log(hamburger === 3 && cola && fries);

// console.log(1 && 0);
// console.log(1 && 5);
// console.log(null && 5);
// console.log(0 && 'jummyjump');

// if (hamburger === 3 && cola === 1 && fries) {
//     console.log('We are not hungre')
// } else {
//     console.log('We are going to another caffe')
// }

    const hamburger = 3;
    const fries = 3;
    const cola = 2;
    const nuggets = 2;


    if (hamburger === 3 && cola || fries === 3 && nuggets) {
        console.log('We are not hungry')
    } else {
        console.log('We are going to another caffe')
    }

    let johnReport, alexRreport, samReport, mariaReport = 'done';

    console.log(hamburger === 3 && cola || fries === 3 && nuggets);

    console.log(!0);

    console.log( NaN || 2 || undefined );
    console.log( NaN && 2 && undefined );
    console.log( 1 && 2 && 3 );
    console.log( !1 && 2 || !3 );
    console.log( 25 || null  && !3 );
    console.log( NaN || null || !3 || undefined || 5);
    console.log( NaN || null && !3 && undefined || 5);
    console.log( 5  && 3  || 5);






