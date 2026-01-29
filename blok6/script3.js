/*for (let i = 0; i <= 33; i++) {
    console.log("Hello for");
}*/

/*
const contentElement = document.querySelector('.content');
for (let i = 1; i <= 33; i++) {
    const h2Element = document.createElement('h2');
    h2Element.textContent = `${i} заголовок на странице`;
    contentElement.append(h2Element);
}*/

const contentEl = document.querySelector('.content');
const products = ["Шкаф", "Стол", "Стул", "табуретка"];

for (let i = 0; i < products.length; i++) {
    //const product = products[i];
    //console.log(product);

    const h3El = document.createElement("h3");
    h3El.textContent = `Товар номер ${i + 1}`;

    const nameProduct = document.createElement("p");
    nameProduct.textContent = products[i];

    contentEl.append(h3El);
    contentEl.append(nameProduct);
}