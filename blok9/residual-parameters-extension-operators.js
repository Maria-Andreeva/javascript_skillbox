const helloUser = (...name) => {
    console.log(
        `Привет: ${name}`
    );
}

const names = ["Петя", "Маша", "Вася", "Игнат", "Паша", "Леша"];

helloUser(...names);

//const name = "Петя";
//helloUser(...name);


/* ------------------------------------------------ */

const baseCar = {
    doors: 4,
    wheels: 4,
    isStarted: false,
    start() {
        this.isStarted = true;
    },

    stop() {
        this.isStarted = false;
    }
}

const myCar = {
    //...baseCar,
    color: "black"
}

//const object = Object.assign(baseCar, myCar)
const object = {
    ... baseCar, 
    ...myCar,
    myField: field,
};

console.log(object);