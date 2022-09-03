//Query Selectors
const numbers = document.querySelectorAll('[data-number]');
const operators = document.querySelectorAll('[data-operator]');
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
        this.mainScreen = this.mainScreen.toString().slice(0,-1);
    }

    numberToScreen(number){
        if(number === '.' && this.mainScreen.includes('.')) return;
        this.mainScreen = this.mainScreen.toString() + number.toString();
    }

    operatorToDo(operation){
        if(this.mainScreen === ''){
            return;
        }
        if(this.topScreen !== ''){
            this.doMath();
        }
        this.operation = operation;
        this.topScreen = this.mainScreen;
        this.mainScreen = '';
    }

    doMath(){
        var result;
        var digitOne = parseFloat(this.topScreen);
        var digitTwo = parseFloat(this.mainScreen);
        if(isNaN(digitTwo)||isNaN(digitTwo)){
            return;
        }
        if(this.operation === '+'){
            result = digitOne + digitTwo;
        }else if(this.operation === '-'){
            result = digitOne - digitTwo;
        }else if(this.operation === '*'){
            result = digitOne * digitTwo;
        }else if(this.operation === '/'){
            result = digitOne / digitTwo;
        }else{
            return;
        }
        this.mainScreen = result;
        this.operation = undefined;
        this.topScreen = '';
    }

    screenRefresh(){
        this.mainScreenText.innerText = this.mainScreen;
        if(this.operation != null){
            this.topScreenText.innerText = `${this.topScreen} ${this.operation}`;
        }else{
            this.topScreenText.innerText = '';
        }
    }
}

const calculator = new Calculator(topScreenText, mainScreenText);

numbers.forEach(number => {
    number.addEventListener('click', ()=>{
        calculator.numberToScreen(number.innerText);
        calculator.screenRefresh();
    })
})

operators.forEach(operator =>{
    operator.addEventListener('click', ()=>{
        calculator.operatorToDo(operator.innerText);
        calculator.screenRefresh();
    })
})

equals.addEventListener('click', () =>{
    calculator.doMath();
    calculator.screenRefresh();
})

clear.addEventListener('click', () =>{
    calculator.clear();
    calculator.screenRefresh();
})
back.addEventListener('click', () =>{
    calculator.back();
    calculator.screenRefresh();
})