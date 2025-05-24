import MainView from "./view/MainView";
import CalcView from "./view/CalcView";


const calcView = new CalcView(10, 20);

const mainView = new MainView(calcView);

mainView.start();