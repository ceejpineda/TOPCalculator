let btn = document.querySelectorAll('div.buttons');
let btnContent = document.querySelectorAll('div.buttons > span');
let screen = document.getElementById('screenText');
const numbers = [0,1,2,3,4,5,6,7,8,9];
let digit1 = null;
let digit2 = null;
let operators = ["+","-","×","÷"];
let operator = "";
let result = 0;

btn.forEach(btns => {
    btns.addEventListener('click', e => {
        if((btns.innerText in numbers) && digit1 == null){
            screen.innerText += btns.innerText + " ";
            digit1 = parseInt(btns.innerText);
        }else if((digit1 != null) && (btns.innerText in numbers)){
            digit2 = parseInt(btns.innerText);
        }
        if(operators.includes(btns.innerText)){
            operator = btns.innerText;
        }
        
        if(btns.innerText == '='){
            result = doMath(digit1, digit2);
            screen.innerText = screen.innerText + "=" + String(result);
        }
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