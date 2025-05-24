import Calculator from "../model/Calc";

export default class calcController extends Calculator{
    
    constructor(NumberA: number, NumberB: number){
        super(NumberA, NumberB);
    }

    public getNumberA(): number {
        return this.numberA;
    }
    
    public getNumberB(): number {
        return this.numberB;
    }
    
    public setNumberA(numberA: number): void{
        this.numberA = numberA;
    }

    public setNumberB(numberB: number): void{
        this.numberB = numberB;
    }
    
    public Summing(): number{
        let Summing = this.numberA + this.numberB;
        return Summing;
    }

    public Subtracting(): number{
        let Subtracting = this.numberA - this.numberB;
        return Subtracting;
    }

    public Multiplying(): number{
        if(this.numberA == 0 || this.numberB == 0){
            return 0;
        }else{
            let Multiplying = this.numberA * this.numberB;
            return Multiplying;
        }
    }

    public Dividing(): number{
        if(this.numberA == 0 || this.numberB == 0){
            return 0;
        }else{
            let Dividing = this.numberA / this.numberB;
            return Dividing;
        }
    }
}
