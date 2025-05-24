import CalcView from "./CalcView";

export default class MainView{
    private CalcView: CalcView;

    constructor(CalcView: CalcView){
        this.CalcView = CalcView
    }

    public start(): void{
        console.log("Iniciando a calculadora");
        this.CalcView.StartCalcView();
    }
}

