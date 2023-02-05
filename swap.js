var x = 5;
var y = 7;
var z;

// Mehtod 1: temp
z = x;
x = y;
y = z;
console.log('x: '+x+'; y = '+y);

// Method 2: destructing
var x = 55;
var y = 77;
[x, y] = [y, x];
console.log('x: '+x+'; y = '+y);