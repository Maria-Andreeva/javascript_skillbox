import Card from './Card.js';

export default class AmazingCard extends Card {
    constructor(title, price, imgUrl, maxCount = 100) {
        super(title, price, imgUrl);
        this.maxCount = maxCount;
    }

    getAddButtonEl() {
        const addButtonWrapEl = document.createElement("div");
        addButtonWrapEl.classList.add("card__add-wrap");

        this.addButtonEl = super.getAddButtonEl();

        this.addCounterWrapEl = document.createElement("div");
        this.addCounterWrapEl.classList.add("card__add-counter-wrap");

        this.minusButtonEl = document.createElement("button");
        this.minusButtonEl.classList.add("card__add-counter-btn");
        this.minusButtonEl.textContent = "-";

        this.minusButtonEl.addEventListener("click", () => {
            this.addCount--
        })

        this.addCounterEl = document.createElement("div");
        this.addCounterEl.classList.add("card__add-counter");
        this.addCounterEl.textContent = this.addCount;

        this.plusButtonEl = document.createElement("button");
        this.plusButtonEl.classList.add("card__add-counter-btn");
        this.plusButtonEl.textContent = "+";

        this.plusButtonEl.addEventListener("click", () => {
            this.addCount++
        })

        this.addCounterWrapEl.append(this.minusButtonEl, this.addCounterEl, this.plusButtonEl);

        addButtonWrapEl.append(this.addButtonEl, this.addCounterWrapEl);
        return addButtonWrapEl;
    }

    set addCount(value) {
        if(value > this.maxCount) {
            this._addCount = this.maxCount
        } else {
            this._addCount = value;
        }

        if(this.addCounterWrapEl) {
            if(this._addCount > 0) {
                this.addButtonEl.classList.add("added")
                this.addCounterEl.textContent = this._addCount

                if(this._addCount >= this.maxCount) {
                    this.plusButtonEl.disabled = true
                } else {
                    this.plusButtonEl.disabled = false
                }
            } else {
                this.addButtonEl.classList.remove("added")
                this.addCounterEl.textContent = 0
            }
        }
    }

    get addCount() {
        return this._addCount;
    }
}