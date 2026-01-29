const products = ["Арбуз", "Книга", "Кофе", "Макароны", "Молоко", "Сахар", "Яблоки"]

function renderList(array){
    listEl.innerHTML = "";
    for (let i = 0; i < array.length; i++) {
        const liEl = document.createElement("li");
        liEl.textContent = `${i + 1}) ${array[i]}`;
        listEl.append(liEl);
    }
}

const h1El = document.createElement("h1")
h1El.textContent = "Корзина покупателя"
document.body.append(h1El)

const btnAddAndFilterEl = document.createElement("button")
btnAddAndFilterEl.textContent = "Добавить товар"
btnAddAndFilterEl.classList.add("btn");
document.body.append(btnAddAndFilterEl)


const listEl = document.createElement("ul")
listEl.classList.add("products__list");
document.body.append(listEl);

btnAddAndFilterEl.onclick = function () {
    const addProduct = prompt("Введите название товара");

    if (!addProduct) {
        alert("Название товара не введено!");
        return;
    }

    products.push(addProduct);

    products.sort((a, b) => a.localeCompare(b));

    renderList(products);
};

renderList(products);