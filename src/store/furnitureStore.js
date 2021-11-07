import { makeAutoObservable } from "mobx";

export default class FurnitureStore {
    constructor() {
        this._furniture = [
            {
                id: 1,
                name: "Диван-кровать, раскладывается",
                price: 300,
                netweight: 40,
                grossweight: 50
            },
            {
                id: 2,
                name: "Стол, трескается",
                price: 300,
                netweight: 40,
                grossweight: 50
            },
            {
                id: 3,
                name: "Стул, быстро ломается",
                price: 300,
                netweight: 40,
                grossweight: 50
            },
            {
                id: 4,
                name: "Шкаф, ничего не вмещается",
                price: 300,
                netweight: 40,
                grossweight: 50
            }
        ];
        this._selectedFurniture = {};
        makeAutoObservable(this);
    }

    get furniture() {
        return this._furniture;
    }


    setSelectedFurniture(furniture) {       //экшен для изменения состояния
        this._selectedFurniture = furniture;
    }
    get selectedFurniture() {
        return this._selectedFurniture;
    }
}