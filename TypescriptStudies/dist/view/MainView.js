"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MainView {
    constructor(CalcView) {
        this.CalcView = CalcView;
    }
    start() {
        console.log("Iniciando a calculadora");
        this.CalcView.StartCalcView();
    }
}
exports.default = MainView;
