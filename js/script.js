let btn = document.querySelectorAll('.buttons');

btn.forEach(btns => {
    btns.addEventListener('mousemove', e => {
      let rect = e.target.getBoundingClientRect();
      let x = e.clientX - rect.left;
      let y = e.clientY - rect.top;
      btns.style.setProperty('--x', x + 'px');
      btns.style.setProperty('--y', y + 'px');
    });
});