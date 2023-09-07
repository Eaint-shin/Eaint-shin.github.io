const container = document.querySelector('.container');
const question = document.querySelector('.question');
const yesBtn = document.querySelector('.yes-btn');
const noBtn = document.querySelector('.no-btn');

const containerRect =container.getBoundingClientRect();
const noBtnRect= noBtn.getBoundingClientRect();
yesBtn.addEventListener(`click`,()=>{
    window.location.href='pyinloz1.html';
});

noBtn.addEventListener(`mouseover`,()=>{
    const i = Math.floor(Math.random() * (containerRect.width - noBtnRect.width)) + 1;
    const j = Math.floor(Math.random() * (containerRect.height - noBtnRect.height)) + 1;

    noBtn.style.left = i + 'px';
    noBtn.style.top = j+'px';
});
