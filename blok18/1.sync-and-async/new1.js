// 1 ================================

// блок кода
window.onload = () => {
    function func1() {
        // блок кода
        console.log('foo');
    }

    for (let i = 0; i < 5; i += 1) {
        // блок кода
        console.log(1);
    }

    console.log(2);

    let a = 0;
    let b = 0;

    if (a === b) {
        // блок кода
        func1();
    }
}

// 2 ================================

window.onload = () => {
    console.log(Date.now(), "сперва");

    setTimeout(() => {
        console.log(Date.now(), "потом");
    }, 0);

    console.log(Date.now(), "сейчас");
}