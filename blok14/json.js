const book = {
    title: "Война и Мир",
    author: "Лев Николаевич Толстой"
}

localStorage.setItem("book", book)

// JSON = JavaScript Object Notation

// Легковесный, текстовый, независимый от языка формат обмена данными
// Позволяет легко читать и записывать структуры данных

// Данные представлены в виде пар "ключ/значение"
// Данные разделяются запятыми
// Объекты содержатся в фигурных скобках
// Массивы содержатся в квадратных скобках

// Пример:
//{   
//    "name": "John Doe",
//    "age" : 30,
//    "cars" : ["Ford", "BMW", "Fiat"]
//}

/*const car = {
    model: 'Audi',
    year: '2022'
}

localStorage.getItem('car', JSON.stringify(car))
*/
const car = JSON.parse(localStorage.getItem('car'));
console.log(car.year);

// Методы JSON.stringify() и JSON.parse() - это мощные интрументы в JavaScript
// для работы с объектамии и обмена данными