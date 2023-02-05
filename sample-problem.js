/**
 * Max() Example 1
 */

function getTheChake(x, y, z) {
    return Math.max(x, y, z);
}

var x = 84, y = 99, z = 77;
var winner = getTheChake(x, y, z);
switch(winner ){
    case 84:
        console.log('X is the Winner');
        break;
    case 99:
        console.log('Y is the Winner'); // Y is the winner
        break;
    default:
        console.log('Z is the Winner');
        break;
}
console.log(winner);


/**
 * Max() Example 2: Method 1
 */

function maxInArray (arr) {
    var maxLenght = arr[0];
    for (var i = 0; i< arr.length; i++) {
        if(maxLenght < arr[i]) {
            maxLenght = arr[i];
        }
    }
    return maxLenght;
}

var arr = [150, 140, 136, 185, 154, 210];
var tallest = maxInArray(arr);
console.log('The tallest guy is ' + tallest);

// Max() Example 2: Method 2
function maxInArray2 (arr1) {
    var maxLenght = arr[0];
    for (var i = 0; i< arr.length; i++) {
        maxLenght = Math.max(maxLenght, arr1[i]);
    }
    return maxLenght;
}
var arr1 = [150, 320, 140, 136, 185, 154, 210];
var tallest1 = maxInArray2(arr1);
console.log('The tallest guy is ' + tallest1);