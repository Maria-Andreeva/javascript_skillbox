// Window - это глобальный объект а браузере, который содержит вспомогательные объекты и свойства
console.log(window);

// location - это объект, хранящийся в Window, который позволяет получать информацию о текущем адресе страницы
// и менять его с помощью методов или обновлять поля объекта
window.location
window.location.reload()

// history - этот объект отвечает за управление вашей историей в браузере
window.history
window.history.back()
window.history.forward()
window.history.go(1) // шаг вперед, может быть и больше
window.history.go(-1) // шаг назад, может быть и больше

// и histoty и location в консоли браузера можно писать и без window, чтобы получить доступ к ним

// screen - это свойство показывает вам размеры вашего окна и ориентацию

window.screen

// Методы Window
// У объекта Window есть множество встроенных методов
// window.alert() - отображает предупреждающее диалоговое окно
// window.prompt() - возвращает текст, введенный пользователем в диалоге подсказки
// window.open() - открывает новое окно
// window.close() - закрывает текущее окно
// window.setInterval() - назначаeт выполнение функции каждые Х миллисекунд
// window.clearInterval() - отмменяет повторяющееся исполнение, установленное с помощью window.setInterval()
// window.setTimeout() - устанавливает отложенное выполнение функции
// window.clearTimeout() - отменяет повторяющееся исполнение, установленное с помощью window.setTimeout

/*
setInterval(() => {
    console.log("Привет");
}, 1000);

setTimeout(() => {
    console.log("Я отлоденная функция");
}, 2000);
*/

const interval = setInterval(() => {
    console.log("Привет");
}, 1000);

setTimeout(() => {
    clearInterval(interval);
}, 5000);

// События Window - это функции, которые вызываются на какое-то событие в нашем окне браузера
// У объекта Window есть множество встроенных ссобытий, на которые можно подписаться

// window.onclick - свойство обработчика событий для клика в окне
// window.onresize - свойство обработчика событий для изменения размера окна

window.onclick = (event) => {
    console.log('Клик', event);
}

window.onresize = (event) => {
    console.log('Изменяем размеры окна браузера', {
        height: event.target.innerHeight,
        width: event.target.innerWidth
    });
}

//window.on...