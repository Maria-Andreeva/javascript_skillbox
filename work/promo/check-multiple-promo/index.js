const promocodeArr = [
    {
        promocode: 'PROM10',
        gift: "Скидка 10%"
    },
    {
        promocode: 'PROM50',
        gift: "Скидка 50%"
    },
    {
        promocode: 'GIFT',
        gift: "Подарок в корзине"
    }
]

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

button.addEventListener("click", () => {
    const oldMessage = promoCode.querySelector(".promo-code__message");
    if (oldMessage) oldMessage.remove();

    const enteredCode = input.value.trim().toUpperCase();

    const foundPromo = promocodeArr.find(item => item.promocode === enteredCode);

    if (foundPromo) {

        const message = document.createElement("p");
        message.className = "promo-code__message";
        message.textContent = "Промокод применён. " + foundPromo.gift;
        message.style.color = "green";

        promoCode.append(message);

        input.style.color = "green";
        input.style.fontWeight = "bold";
        input.style.borderColor = "green";

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
});