import { makeAutoObservable } from "mobx";

export default class SelectedOptionsStore {
    constructor() {
        this._selectedOptions = {
            from: 'Пекин',
            to: 'Москва',
            currency: 'USD'
        };
        makeAutoObservable(this);
    }

    setOptions(options) {
        this._selectedOptions = options;
    }

    get selectedOptions() {
        return this._selectedOptions;
    }
}