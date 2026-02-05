localStorage.setItem('name', 'Bibik')

console.log(name);

// LocalStorage - позволяет хранить данные прямо в браузере пользователя
// Хранит данные даже после закрытия или перезагрузки браузера
// LocalStorage - это часть глобального объекта window

localStorage.removeItem('name')

// localStorage.clear() // будем осторожны с этим методом, безвозвратно удалет все данные!!!

// LocalStorage позволяяет сохранять данные после перезагрузок и закрытия браузера
// Работа с LocalStorage - важный навык для любого разработчика JS