// isNaN() - функция определяет, является ли переданный параметр не числом, то есть NaN
console.log(isNan(10)); // false
console.log(isNan('10')); // false 
console.log(isNan('10q')); // true

// parseFloat() - функция на вход принимает строку, а возвращает число с плавающей точкой, т.е. дробное число
console.log(parseFloat('10.15')); // 10.15
console.log(parseFloat('10.15 qwerty')); // 10.15
console.log(parseFloat('10.15qwerty')); // 10.15
console.log(parseFloat('10.15.20')); // 10.15
console.log(parseFloat('qwerty 10.15.20')); // NaN
console.log(parseFloat('1990.99 рублей.')); // 1990.99

// parseInt() - функция работает почти так же, как и parseFloat(), но возвращает уже целое число, без дроби
console.log(parseInt('1990.99 рублей.')); // 1990

// enodeURI() и encodeURIComponent() - эти функции кодируют строку, заменяя символы на последовательность 
// символов, представленных в кодировке utf-8
// encodeURI() кодирует не все символы, encodeURIComponent() - все

// decodeURI() и decodeURIComponent() - эти фукнции декодируют все то, что закодировали enodeURI() и encodeURIComponent()
