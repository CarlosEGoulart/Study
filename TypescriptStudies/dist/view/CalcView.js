"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const CalcController_1 = __importDefault(require("../controller/CalcController"));
class CalcView extends CalcController_1.default {
    StartCalcView() {
        console.log(this.Summing());
        console.log(this.Subtracting());
        console.log(this.Multiplying());
        console.log(this.Dividing());
    }
}
exports.default = CalcView;
