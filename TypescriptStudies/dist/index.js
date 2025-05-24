"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const MainView_1 = __importDefault(require("./view/MainView"));
const CalcView_1 = __importDefault(require("./view/CalcView"));
const calcView = new CalcView_1.default(10, 20);
// Instantiate the MainView, passing the CalcView
const mainView = new MainView_1.default(calcView);
mainView.start();
