const car = {
    nsme: "BMW",
    color: "green",
    wheels: 4,
    doors: 2,
    hp: 340,
    isStarted: false,
    engine: {
        hp: 340,
        capacity: 3,
        mileage: 60000,
    },
    start: function() {
        this.isStarted = true;
    },
    openDoor(door) {
        console.log("Открываем дверь", door);
    }
}

car.stop = function () {
    console.log(this);
    this.isStarted = false;
}

car.start()

// console.log(car.isStarted);