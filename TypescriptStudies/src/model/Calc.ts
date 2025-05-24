export default abstract class Calculator{
    public numberA: number;
    public numberB: number;

    constructor(numberA: number, numberB: number){
        this.numberA = numberA;
        this.numberB = numberB;
    }

    public abstract getNumberA(): number;

    public abstract getNumberB(): number;

    public abstract setNumberA(numberA: number): void;

    public abstract setNumberB(numberB: number): void; 
}