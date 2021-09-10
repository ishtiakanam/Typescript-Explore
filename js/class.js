"use strict";
class Car {
    constructor(model, price) {
        this.modal = model;
        this.price = price;
        this.millage = 100000;
    }
    getActuallMillage() {
        const realMillage = this.millage + 5000;
        return realMillage;
    }
    getTotalPrice(tax) {
        const textAmount = this.price * tax / 100;
        const total = this.price + textAmount;
        return total;
    }
}
const toyota = new Car('toyota', 100000);
const getTotalPrice = toyota.getTotalPrice(25);
