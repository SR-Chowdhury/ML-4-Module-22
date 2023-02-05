// Math.pow(x, y)
var num1 = Math.pow(2, 3);
console.log('2 the Power of 3 = '+ num1);

// Math.abs(): return positive value
var num2 = 2 - 4;
console.log('Absolute value of num2 = '+ Math.abs(num2));

// Math.round()
var num3 = 2.456;
var num4 = 2.510;
console.log('Round value of num3 = ' + Math.round(num3));
console.log('Round value of num4 = ' + Math.round(num4));

// Math.ciling()
var num5 = 2.360;
console.log('Celling value of num5 = ' + Math.ceil(num5));

// Math.floor()
console.log('Flooring value of num5 = ' + Math.floor(num5));

// Math.random()
for (let i = 0; i< 5; i++) {
    console.log('Value: '+Math.round(Math.random()*100));
    
}
