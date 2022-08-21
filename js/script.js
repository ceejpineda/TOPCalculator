let btn = document.querySelectorAll('.buttons');
let screen = document.getElementById('screenText')

btn.forEach(btns => {
    btns.addEventListener('click', e => {
        screen.innerText += btns.innerText
    });
});