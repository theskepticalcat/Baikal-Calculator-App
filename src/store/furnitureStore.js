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
                name: "Какая-то деревянная палка",
                price: 400,
                netweight: 5,
                grossweight: 7,
                m3: 1,
                total: 0
            },
            {
                id: 6,
                name: "Полка для мемов",
                price: 8000,
                netweight: 10,
                grossweight: 15,
                m3: 2,
                total: 0
            },
            {
                id: 7,
                name: "Кровать для кота",
                price: 6000,
                netweight: 8,
                grossweight: 5,
                m3: 1,
                total: 0
            },
            {
                id: 8,
                name: "Миска риса",
                price: 10,
                netweight: 0.5,
                grossweight: 0.6,
                m3: 0.3,
                total: 0
            }
        ];
        this._selectedFurniture = [];
        makeAutoObservable(this);
    }

    get furniture() {
        return this._furniture;
    }


    setSelectedFurniture(furniture) {   //добавление нового об-кта с мебелью
        furniture.total = furniture.total + 1;  //увеличиваем количество на 1
        this._selectedFurniture.push(furniture);
    }

    get selectedFurniture() {
        var unique = Array.from(new Set(this._selectedFurniture.map(JSON.stringify))).map(JSON.parse);
        return unique;
    }

    resetSelected(arr) {    //экшен обновления списка выбранной мебели при удалении элемента
        this._selectedFurniture = arr;
    }
}