import { makeAutoObservable } from "mobx";

export default class MiniFormStore {
    constructor() {
        this._selectedOptions = {};
        makeAutoObservable(this);
    }

    setOptions(options) {
        this._selectedOptions = options;
    }

    get selectedOptions() {
        return this._selectedOptions;
    }
}