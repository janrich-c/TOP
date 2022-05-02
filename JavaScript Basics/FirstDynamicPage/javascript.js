const textInput = document.querySelector("#inputString");
const btnOutput = document.querySelector("#btnShowOutput");
const countText = document.querySelector("#countText");
const output = document.querySelector("#output");
const btnReset = document.querySelector("#btnReset");
var counter = 0;

function ChangeOutput(text) {
    counter++;
    countText.innerHTML = `You've pressed the button ${counter} times`;
    
    var randomColor = Math.floor(Math.random()*16777215).toString(16);
    countText.style.color = '#'+randomColor;
    output.innerHTML = `You typed: ${text}`;
}

function ResetPage() {
    textInput.value = '';
    counter = 0;
    text = '';
    countText.innerHTML = `You've pressed the button ${counter} times`;
    output.innerHTML = `You typed: ${text}`;
}

btnOutput.addEventListener('click', event => ChangeOutput(textInput.value));
btnReset.addEventListener('click', event => ResetPage());
