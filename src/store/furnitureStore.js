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
                m3: 2,
                total: 0
            },
            {
                id: 2,
                name: "Стол, трескается",
                price: 3000,
                netweight: 40,
                grossweight: 50,
                m3: 3,
                total: 0
            },
            {
                id: 3,
                name: "Стул, быстро ломается",
                price: 500,
                netweight: 40,
                grossweight: 50,
                m3: 1,
                total: 0
            },
            {
                id: 4,
                name: "Шкаф, ничего не вмещается",
                price: 100.000,
                netweight: 40,
                grossweight: 50,
                m3: 4,
                total: 0
            },
            {
                id: 5,
                name: "Шкаф, ничего не вмещается",
                price: 300,
                netweight: 40,
                grossweight: 50,
                m3: 4,
                total: 0
            },
            {
                id: 6,
                name: "Стол, трескается",
                price: 300,
                netweight: 40,
                grossweight: 50,
                m3: 3,
                total: 0
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


    setSelectedFurniture(furniture) {   //добавление нового об-кта с мебелью
        furniture.total = furniture.total + 1;  //увеличиваем количество на 1
        this._selectedFurniture.push(furniture);
    }

    get selectedFurniture() {
        //return this._selectedFurniture;  //как получить только уникальные значения из этого об-кта?
        var unique = Array.from(new Set(this._selectedFurniture.map(JSON.stringify))).map(JSON.parse);
        return unique;
    }

    resetSelected(arr) {    //экшен обновления всего массива с эл-тами при удалении элемента
        this._selectedFurniture = arr;
    }
}