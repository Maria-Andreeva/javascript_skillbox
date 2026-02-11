const promocodeObj = {
    promocode: "PROM50",
    gift: "Скидка 50%"
};

const promoCode = document.createElement("div");
promoCode.className = "promo-code";

const promoRow = document.createElement("div");
promoRow.className = "promo-code__row";

const input = document.createElement("input");
input.type = "text";
input.className = "promo-code__input";
input.placeholder = "ПРОМОКОД";

const button = document.createElement("button");
button.className = "promo-code__btn";
button.textContent = "Применить";

promoRow.append(input, button);
promoCode.append(promoRow);
document.body.append(promoCode);


function setCookie(name, value, days = 1) {
    const maxAge = days * 24 * 60 * 60;
    document.cookie = `${name}=${value}; max-age=${maxAge}; path=/`;
}

function deleteCookie(name) {
    document.cookie = `${name}=; max-age=0; path=/`;
}

function getCookie() {
    return document.cookie
        .split('; ')
        .reduce((acc, item) => {
            const [name, value] = item.split('=');
            acc[name] = value;
            return acc;
        }, {});
}


function applyPromo() {

    const oldMessage = promoCode.querySelector(".promo-code__message");
    if (oldMessage) oldMessage.remove();

    const message = document.createElement("p");
    message.className = "promo-code__message";
    message.textContent = "Промокод применён. " + promocodeObj.gift;
    message.style.color = "green";

    promoCode.append(message);

    input.style.color = "green";
    input.style.fontWeight = "bold";
    input.style.borderColor = "green";
}


button.addEventListener("click", () => {

    const enteredCode = input.value.trim().toUpperCase();

    if (enteredCode === promocodeObj.promocode) {

        setCookie("promo", enteredCode);
        applyPromo();

    } else {
        input.value = "";
    }
});


input.addEventListener("input", () => {

    const oldMessage = promoCode.querySelector(".promo-code__message");
    if (oldMessage) oldMessage.remove();

    input.style.color = "";
    input.style.borderColor = "";
    input.style.fontWeight = "";

    deleteCookie("promo");
});


const cookies = getCookie();

if (cookies.promo === promocodeObj.promocode) {
    input.value = cookies.promo;
    applyPromo();
}
