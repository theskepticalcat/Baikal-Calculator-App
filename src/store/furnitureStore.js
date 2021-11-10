import { makeAutoObservable } from "mobx";

export default class FurnitureStore {
    constructor() {
        this._furniture = [
            {
                id: 1,
                name: "Диван-кровать, раскладывается",
                price: 300.000,
                netweight: 40,
                grossweight: 50,
                m3: 2
            },
            {
                id: 2,
                name: "Стол, трескается",
                price: 3000,
                netweight: 40,
                grossweight: 50,
                m3: 3
            },
            {
                id: 3,
                name: "Стул, быстро ломается",
                price: 500,
                netweight: 40,
                grossweight: 50,
                m3: 1
            },
            {
                id: 4,
                name: "Шкаф, ничего не вмещается",
                price: 100.000,
                netweight: 40,
                grossweight: 50,
                m3: 4
            },
            {
                id: 5,
                name: "Шкаф, ничего не вмещается",
                price: 300,
                netweight: 40,
                grossweight: 50,
                m3: 4
            },
            {
                id: 6,
                name: "Стол, трескается",
                price: 300,
                netweight: 40,
                grossweight: 50,
                m3: 3
            }
        ];
        this._selectedElem = {};
        this._selectedFurniture = [];
        makeAutoObservable(this);
    }

    get furniture() {
        return this._furniture;
    }


    setselectedElem(item) {
        this._selectedElem = item;
    }
    get selectedElem() {
        return this._selectedElem;
    }


    setSelectedFurniture(furniture) {
        this._selectedFurniture.push(furniture);
    }
    get selectedFurniture() {
        return this._selectedFurniture;
    }
}