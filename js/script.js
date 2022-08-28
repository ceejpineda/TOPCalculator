let numeric = document.querySelectorAll('div.numeric');
let operator = document.querySelectorAll('div.operator');
let btnContent = document.querySelectorAll('div.buttons > span');
let screen = document.getElementById('screenText');
let topText = document.getElementById('topText');
const numbers = [0,1,2,3,4,5,6,7,8,9];
let digit1 = null;
let digit2 = null;
let operand = 0;

numeric.forEach(numberics => {
    numberics.addEventListener('click', e => {
        if(screen.innerText == 0){
            screen.innerText = "";
        }
        screen.innerText += numberics.innerText;
    });
});
operator.forEach(operators => {
    operators.addEventListener('click', e =>{
        if(digit1 != null){
            digit2 = screen.innerText;
            operand = 1;
        }else{
            digit1 = screen.innerText;
        }
        if(operand == 1){
            var result = doMath();
            console.log(result)
        }
        topText.innerText = screen.innerText + " " + operators.innerText;
        screen.innerText = 0;
    });
});


function doMath(x, y){
    screen.innerText = digit1.toString() + operator + digit2.toString();
    if(operator == "+"){
        return x + y;
    }else if(operator == "-"){
        return x - y;
    }
    else if(operator == "÷"){
        return x / y;
    }
    else if(operator == "×"){
        return x * y;
    }
}