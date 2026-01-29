let str = "Hello World new!";
console.log(str.length);
console.log(str[0]);
console.log(str[5]);

let newStr = str.toLocaleUpperCase();
console.log(newStr);

let newStr2 = str.toLocaleLowerCase();
console.log(newStr2);

console.log(str.indexOf('l'));
console.log(str.lastIndexOf('l'));

console.log(str.slice(0, 5));
console.log(str.substring(6, 11));
console.log(str.replace('world', 'Mars'));
console.log(str.split(" "));
console.log(str.trim()); // убрать пробелы
//console.log(str.split(" "));

console.log(str.startsWith("Hello"));
console.log(str.endsWith("new"));




