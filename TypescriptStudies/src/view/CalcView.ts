import CalcController from "../controller/CalcController"

export default class CalcView extends CalcController{

    public StartCalcView(): void{
        console.log(this.Summing());
        console.log(this.Subtracting());
        console.log(this.Multiplying());
        console.log(this.Dividing());

    }

}
