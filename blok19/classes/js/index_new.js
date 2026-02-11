import Card from './Card.js';

const app = document.getElementById("app");

let card1 = new Card("Смартфон", 20000, "./img/product_1.jpg");
app.append(card1.getElement());
//.priceEl.textContent = 100
//console.log(card1)


//card1.setAddCount(3);
//card1.setAddCount(0);

card1.addCount = 3;
//console.log(card1.addCount);

//console.log(card1.getAddCount());
//card1.setAddCount(7);


card1.title = "Test";
card1.price = 10;


let card2 = new Card("Наушники", 2500, "./img/product_2.jpg");
app.append(card2.getElement());

let card3 = new Card("Зарядка", 540, "./img/product_3.jpg" );
app.append(card3.getElement());
//console.log(card3.getElement());


