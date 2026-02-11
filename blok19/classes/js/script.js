import Card from './Card.js';
import AmazingCard from './AmazingCard.js';

const app = document.getElementById("app");

let card1 = new Card("Смартфон", 20000, "./img/product_1.jpg");
app.append(card1.getElement());

console.log(card1)


let card2 = new Card("Наушники", 2500, "./img/product_2.jpg");
app.append(card2.getElement());

let card3 = new AmazingCard("Зарядка", 540, "./img/product_3.jpg", 5);
app.append(card3.getElement());
card3.addCount = 10
console.log(card3)