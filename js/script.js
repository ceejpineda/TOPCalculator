let btn = document.querySelectorAll('div.buttons');
let btnContent = document.querySelectorAll('div.buttons > span');
let screen = document.getElementById('screenText');
const digits = [0,1,2,3,4,5,6,7,8,9];

btn.forEach(btns => {
    btns.addEventListener('click', e => {
        if(btns.innerText in digits){
            screen.innerText += btns.innerText;
        }
        if(btns.innerText == "+"){
            console.log("hello");
        }
        if(btns.innerText == "-"){
            console.log("hello");
        }
        if(btns.innerText == "÷"){
            console.log("hello");
        }
        if(btns.innerText == "×"){
            console.log("hello");
        }

    });
});