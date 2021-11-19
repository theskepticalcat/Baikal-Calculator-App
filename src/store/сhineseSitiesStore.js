import { makeAutoObservable } from "mobx";

export default class ChineseCitiesStore {
    constructor() {
        this._chineseCities = [
            {
                id: 1,
                name: "Пекин"
            },
            {
                id: 2,
                name: "Гуанчжоу"
            },
            {
                id: 3,
                name: "Сунька"
            },
            {
                id: 4,
                name: "Хуньчунь"
            },
            {
                id: 5,
                name: "Далянь"
            },
            {
                id: 6,
                name: "Фошань"
            },
            {
                id: 7,
                name: "Циндао"
            },
            {
                id: 8,
                name: "Шишань"
            },
            {
                id: 9,
                name: "Шанхай"
            },
            {
                id: 10,
                name: "Шэньчжэнь"
            },
            {
                id: 11,
                name: "Путьянь"
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