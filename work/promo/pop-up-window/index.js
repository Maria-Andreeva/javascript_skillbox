const giftArr = [
    {
        title: "Скидка 20% на первую покупку в нашем магазине!",
        icon: "img/discount.svg"
    },
    {
        title: "Скидка 10% на всё!",
        icon: "img/discount_2.svg"
    },
    {
        title: "Подарок при первой покупке в нашем магазине!",
        icon: "img/gift.svg"
    },
    {
        title: "Бесплатная доставка для вас!",
        icon: "img/delivery.svg"
    },
    {
        title: "Сегодня день больших скидок!",
        icon: "img/discount_3.svg"
    }
]
// функция создания попапа
function createPromoCard(gift) {

    // создаём затемнение
    const overlay = document.createElement("div");
    overlay.className = "promo-overlay";

    // создаём карточку
    const promo = document.createElement("div");
    promo.className = "promo";

    promo.innerHTML = `
    <div class="promo__icon">
      <img class="promo__icon-img" src="${gift.icon}" alt="Подарок">
    </div>

    <div class="promo__content">
      <h2 class="promo__title">
        ${gift.title}
      </h2>

      <button class="promo__btn">
        Отлично!
      </button>
    </div>
  `;

    overlay.append(promo);
    document.body.append(overlay);

    // закрытие по кнопке
    const btn = promo.querySelector(".promo__btn");
    btn.addEventListener("click", () => {
        overlay.remove();
    });
}

// случайный выбор подарка
function getRandomGift() {
    const randomIndex = Math.floor(Math.random() * giftArr.length);
    return giftArr[randomIndex];
}

// показать через 3 секунды
setTimeout(() => {
    const randomGift = getRandomGift();
    createPromoCard(randomGift);
}, 3000);
