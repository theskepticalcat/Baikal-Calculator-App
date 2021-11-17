import { makeAutoObservable } from "mobx";

export default class CurrencyStore {
    constructor() {
        this._currency = [
            {
                id: 1,
                name: "USD",
                rate: 71.25,
            },
            {
                id: 2,
                name: "CNY",
                rate: 11.14
            },
            {
                id: 3,
                name: "RUB",
                rate: "–––––"
            }
        ]

        this._selectedCurrency = { 
            id: 1,
            name: "USD",
            rate: 71.25
        };
        makeAutoObservable(this);
    }

    
    setCurrency(currency) {
        this._currency = currency;
    }

    setSelectedCurrency(selectedCurrency) {
        this._selectedCurrency = selectedCurrency;
    }

    get currency() {
        return this._currency;
    }

    get selectedCurrency() {
        return this._selectedCurrency;
    }
}