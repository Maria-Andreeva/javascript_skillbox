const car = {
    name: "BMW",
    isStarted: false,
    start() {
        console.log("Машине заведена");
        this.isStarted = true;
    },
    stop() {
        this.isStartes = true;
    },
}

// const name = car.name;
// const isStarted = car.isStarted;
// const start = car.start;
// const stop = car.stop;

const { name, isStarted, start, stop, hp = 120 } = car;

//car.start();
//start()
//console.log(car.isStarted);

console.log(hp);

/* ---------------------  */

const arr = [1, 2, 3, 4, 10];

const [one, two, three, four, five = 5] = arr;  // 5 - будет значение по умолчанию, если в массиве не найдется элемента по этому индексу, в противном случае будет выведен сам элемент массива

console.log(five);