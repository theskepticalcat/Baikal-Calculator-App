import { makeAutoObservable } from "mobx";

export default class ChineseCitiesStore {
    constructor() {
        this._chineseCities = [
            {
                id: 1,
                name: "Пекин"
            },
            {
                id: 1,
                name: "Гуанчжоу"
            },
            {
                id: 1,
                name: "Сунька"
            },
            {
                id: 1,
                name: "Хуньчунь"
            }
        ]

        this._selectedChineseCity = {};
        makeAutoObservable(this);
    }

    
    setChineseCities(chineseCities) {
        this._chineseCities = chineseCities;
    }
    get chineseCities() {
        return this._chineseCities;
    }
}