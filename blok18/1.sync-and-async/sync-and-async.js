// Вывести информацию о товарах со скидкой в интернет-магазине.
// Данные о товарах получаете и выводите на страницу, выполняя функцию getGoods(callback)

// callback - функция, которую вызывают, когда товары загрузились

const goods = [
    "Зубная паста",
    "Мороженое",
    "Булочка с маком",
    "Газировка",
    "Сыр"
]

// Имитируем время загрузки товаров
const getGoods = (callback) => {
   const showItem = (item) => {
       console.log(item);
       const div = document.createElement("div");
       div.innerHTML = `<br /> ${item} <br /><hr>`;
       document.body.append(div);
   }

   const time = 3000 //(Math.random() * 4 + 1) * 1000;
   setTimeout(() => {
       goods.forEach(showItem);
       callback && callback();
   }, time)
}

const showTime = () => {
    // получаем текущее время и выводим его в виде удобно читаемой строки
    const time = new Date().toLocaleTimeString();
    // создаем блок в который поместим строку со временем и добавим его в конец body
    const div = document.createElement("div");
    div.style.backgroundColor = "lightgray";
    div.innerHTML = `<br /> ${time} <br />`;
    document.body.append(div);
}

const showError = () => {
    const div = document.createElement("div");
    div.style.backgroundColor = "red";
    div.style.color = "white";
    div.innerHTML = `<br /> Ошибка <br />`;
    document.body.append(div);
}

window.onload = () => {
    showTime();
    let timer = setTimeout(showError, 5000);

    const handleGoodsLoaded = () => {
        showTime();
        clearTimeout(timer);
    }
    getGoods(handleGoodsLoaded);
}