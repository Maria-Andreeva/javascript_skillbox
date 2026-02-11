// Сеттеры и геттеры - свойства класса, представленные специальными методами:
// сеттер - для записи значения и свойства, а геттер - для чтения


class Card {
    //test = "Test"
    imgUrl = "./img/not_img.jpg"

    constructor(title, price, imgUrl) {
        //console.log("test")
        //console.log(title)
        this.title = title;
        this.price = price;
        //this.imgUrl = imgUrl;

        if(imgUrl) {
            this.imgUrl = imgUrl;
        }

        //console.log(this.test);
    }
}
/*
let card1 = {
    title: "Смартфон",
    price: 20000,
    imgUrl: "./img/product_1.jpg",
}

let card2 = {
    title: "Наушники",
    price: 2500,
    imgUrl: "./img/product_2.jpg",
}

let card3 = {
    title: "Зарядка",
    price: 540,
    imgUrl: "./img/product_3.jpg",
}

*/

let card1 = new Card("Смартфон", 20000, "./img/product_1.jpg");
let card2 = new Card("Наушники", 2500, "./img/product_2.jpg");
let card3 = new Card("Зарядка", 540, "./img/product_3.jpg");
let card4 = new Card("Планшет", 32000);

console.log(card1);
console.log(card2);
console.log(card3);
console.log(card4);





import Card from './Card.js';
import AmazingCard from './AmazingCard.js';

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

