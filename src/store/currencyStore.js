import { makeAutoObservable } from "mobx";

export default class CurrencyStore {
    constructor() {
        this._currency = [
            {
                id: 1,
                name: "USD",
                rate: 71.25,
                default: true
            },
            {
                id: 2,
                name: "CYN",
                rate: 11.14
            },
            {
                id: 3,
                name: "RUB",
                rate: 1
            }
        ]

        this._selectedCurrency = {};
        makeAutoObservable(this);
    }

    
    setCurrency(currency) {
        this._currency = currency;
    }

    get currency() {
        return this._currency;
    }
}