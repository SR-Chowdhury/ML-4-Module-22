var country = 'Bangladesh is my Country';

console.log(country);

console.log(country[15]);

country = country + ' and i love my country';
console.log(country);

console.log(country.toLowerCase());
console.log(country.toUpperCase());

console.log('Lenght of String: '+ country.length);

// includes() return true or false
console.log('Includes(): '+ country.includes('Bangladesh'));

// startsWith() return true of false
console.log('Is it starts with Bang? : ' + country.startsWith('Bang'));

// endssWith() return true of false
console.log('Is it end with Country? : ' + country.toLowerCase().endsWith('country'));

// indexOf return either value if exists or -1 (-1 means no exists) 
console.log('Is my word exists in Country string and where: '+ country.indexOf('my'));

var newString = 'You will be stay in my heart as i knew from the start!';
if(newString.indexOf('start!') != -1) {
    console.log('Your value is exists');
} else {
    console.log('No exists');
}

// Concat
var x = 'Hello';
var y = 'World';
var concatString = x.concat(' '+y + '!');
console.log(concatString);

// Join
var lines = [
    'You will stay in my heart as i knew from the start',
    'And',
    'You will stay in my heart never keep you a part'
]
console.log(lines.join(' + '));

// Split()
var newLines = 'You will stay in my heart as i knew from the start And You will stay in my heart never keep you a part';
var split1 = newLines.split('');
var split2 = newLines.split(' ');
var split3 = newLines.split('And');
console.log(split1);
console.log(split2);
console.log(split3);

// Slice()
var newSlice1 = newLines.slice(51);
var newSlice2 = newLines.slice(0, 50);
console.log(newSlice1);
console.log(newSlice2);

// Substring()
var newSubstring1 = newLines.substring(0, 25);
console.log(newSubstring1);

// trim()
var newLines2 = ' Hello World! ';
var trimAll = newLines2.trim();
var trimStart = newLines2.trimStart();
var trimEnd = newLines2.trimEnd();
console.log(trimAll);
console.log(trimStart);
console.log(trimEnd);