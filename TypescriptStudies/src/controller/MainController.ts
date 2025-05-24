import CalcController from "./CalcController";

export default class MainController{
    public CalcController: CalcController;

    constructor(CalcController: CalcController){
        this.CalcController = CalcController;
    }
}