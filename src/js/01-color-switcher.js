

const refs = {
    startBtnRef : document.querySelector('[data-start]'),
    stopBtnRef : document.querySelector('[data-stop]'),
}  

let timerId = null;
refs.startBtnRef.addEventListener('click', onStartBtnClick);
refs.stopBtnRef.addEventListener('click', onStopBtnClick);
  
function onStartBtnClick() {
    refs.startBtnRef.disabled = true;
    setNextColor(getRandomHexColor());

    timerId = setInterval(() => {
        setNextColor(getRandomHexColor());
    }, 1000);
}

function onStopBtnClick() {
    refs.startBtnRef.disabled = false;
    clearInterval(timerId);
}

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function setNextColor(color) {
    document.body.style.backgroundColor = color;
}