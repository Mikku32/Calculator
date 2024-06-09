const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

function appendToDisplay(input) {
    display.value += input;
}

function calculate() {
    display.value = eval(display.value);
}

function clearDisplay() {
    display.value = "";
}