// Date - это функция, которая возвращает вам строкой локализованную дату
// Локализованная дата соответствует той таймзоне, где ее запросили

console.log(new Date());
console.log(new Date().getDate()); // текущий день
console.log(new Date().getMonth() + 1); // текущий месяц (! внимание! месяцы в объекте Date исчисляются с 0 до 11!!! , поэтому « +1 »)
console.log(new Date().getFullYear()); // текущий год

// Есть несколько способов передать параметры в функцию Date, что получить собственную дату
console.log(new Date(2000, 1, 10, 14, 25, 10)); // 10-02-2000 14:25:10

console.log(new Date('2000-02-10T14:25:10')); // 10-02-2000 14:25:10

// Если мы передаем 1 параметр, то значит мы просто передаем милисекунды
// Дата младше 1970 года
console.log(new Date(-(1000 * 60 * 60 * 24)));  // 31-12-1969

// изменение даты
console.log(new Date());
console.log(new Date(new Date().setDate(1)));
console.log(new Date(new Date().setMonth(11))); // принимает числа и больше 11, но если они будут больше, то он тогда просто складывает
console.log(new Date(new Date().setMonth(24)));
console.log(new Date(new Date().setFullYear(2000)));

// new Date().set...

// Сравнение, вычитание и сложение дат
console.log(new Date() > new Date('2000-02-10'));

console.log(new Date(+new Date() + (1000 * 60 * 60 * 24)));
console.log(new Date(Number(new Date()) + (1000 * 60 * 60 * 24)));