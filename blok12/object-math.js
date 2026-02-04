// Math - это встроенный объект, хранящий в своих свойствах и методах математические константы и функции
console.log(Math);

// Math.min // Math.max
// Принимают в себя сколько угодно числовых параметров и возвращают:
// Math.min - наименьшее число
// Math.max - наибольшее число

console.log(Math.min(1, 2, 3, 4, 5, 6, -1));
console.log(Math.max(1, 2, 3, 4, 5, 6, -1));
console.log(Math.max(1, 2, 3, 4, 5, 6, -1, 'hj')); // NaN

// Math.floor, Math.ceil, Math.round
// Math.floor округляет в меньшую сторону
// Math.ceil округляет в большую сторону
// Math.round округляет в ближайшую сторону

console.log(Math.floor(10.95));
console.log(Math.ceil(10.15));
console.log(Math.round(10.49));
console.log(Math.round(10.51));
console.log(Math.round(10.50));

// Math.random - используется для получения рандомного числа от 0 до 1
console.log(Math.random()); // * 100 // * 1000 // * 10000
console.log(Math.random() * 1000);
console.log(Math.round(Math.random() * 1000));

// Алгоритм генерирования произвольного числа от 1 до 6
function randomFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

console.log(randomFromInterval(1, 6));