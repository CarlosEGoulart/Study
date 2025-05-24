"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Calc_1 = __importDefault(require("../model/Calc"));
class calcController extends Calc_1.default {
    constructor(NumberA, NumberB) {
        super(NumberA, NumberB);
    }
    getNumberA() {
        return this.numberA;
    }
    getNumberB() {
        return this.numberB;
    }
    setNumberA(numberA) {
        this.numberA = numberA;
    }
    setNumberB(numberB) {
        this.numberB = numberB;
    }
    Summing() {
        let Summing = this.numberA + this.numberB;
        return Summing;
    }
    Subtracting() {
        let Subtracting = this.numberA - this.numberB;
        return Subtracting;
    }
    Multiplying() {
        if (this.numberA == 0 || this.numberB == 0) {
            return 0;
        }
        else {
            let Multiplying = this.numberA * this.numberB;
            return Multiplying;
        }
    }
    Dividing() {
        if (this.numberA == 0 || this.numberB == 0) {
            return 0;
        }
        else {
            let Dividing = this.numberA / this.numberB;
            return Dividing;
        }
    }
}
exports.default = calcController;
