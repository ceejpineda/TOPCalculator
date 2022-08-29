//Query Selectors
const numbers = document.querySelectorAll('[data-number]');
const operators = document.querySelectorAll('[data-operators]');
const equals = document.querySelector('[data-equals]');
const back = document.querySelector('[data-back]');
const clear = document.querySelector('[data-clear]');
const topScreenText = document.querySelector('[data-top]');
const mainScreenText = document.querySelector('[data-main]');


//My First time Using Class in JavaScript
class Calculator{
    constructor(topScreen, mainScreen){
        this.topScreenText = topScreenText;
        this.mainScreenText = mainScreenText;
        this.clear();
    }

    clear(){
        this.mainScreen = '';
        this.topScreen = '';
        this.operation = undefined;
    }

    back(){

    }

    numberToScreen(number){
        if(number === '.' && this.mainScreen.includes('.')) return;
        this.mainScreen = this.mainScreen.toString() + number.toString();
    }

    operator(operation){

    }

    screenRefresh(){
        this.mainScreenText.innerText = this.mainScreen
    }
}

const calculator = new Calculator(topScreenText, mainScreenText);

numbers.forEach(number => {
    number.addEventListener('click', ()=>{
        calculator.numberToScreen(number.innerText);
        calculator.screenRefresh();
    })
})