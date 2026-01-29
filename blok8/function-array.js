const products = ["Шкаф", "Стул", "Стол", "Шкаф"];

for (let i = 0; i < products.length; i++) {
    const element = products[i];
    console.log(element);
}

console.log("---- ------ -----");

products.forEach(element => {
    //console.log(element);
    const h3El = document.createElement("h3");
    h3El.textContent = element;
    const textEl = document.createElement("p");
    textEl.textContent = "text info product";
    const priceEl = document.createElement("p");
    priceEl.textContent = 2000;
    app.append(h3El);
    app.append(textEl);
    app.append(priceEl)
});

console.log(products.indexOf("Стул"));
console.log(products.lastIndexOf("Стул"));
console.log(products.includes("Стул"));


