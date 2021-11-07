import { makeAutoObservable } from "mobx";

export default class RussianCitiesStore {
    constructor() {
        this._russianSities = [
            {
                id: 1,
                name: "Москва"
            },
            {
                id: 2,
                name: "Владивосток"
            },
            {
                id: 3,
                name: "Череповец"
            },
            {
                id: 4,
                name: "Находка"
            }
        ]

        this._selectedRussianCity = {};
        makeAutoObservable(this);
    }

    
    setRussianCities(russianCities) {
        this._russianSities = russianCities;
    }
    get russianCities() {
        return this._russianSities;
    }
}