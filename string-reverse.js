/**
 * Reverse String 1
 */

var x = "I love my Bangladesh very much";

function reverseText (x) {
    let reservedSen = '';
    for(i = x.length - 1; i >= 0; i--) {
        reservedSen += x[i];
    }
    return reservedSen;
}

var result1 = reverseText(x);
console.log(result1);

/**
 * Reverse String 2
 */

var y = "I love my Bangladesh very much";

function reverseText1 (y) {
    let reservedSen1 = y.split(' ');
    console.log(reservedSen1);
    // I love my Bangladesh very much
    
    let newReverse = [];
    for (let i = reservedSen1.length - 1; i>=0; i--) {
        newReverse.push(reservedSen1[i]);
    }
    return newReverse.join(' ');
}

var result2 = reverseText1(y);
console.log(result2);