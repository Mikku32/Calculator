const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

function appendToDisplay(input) {
    display.value += input;
}

function calculate() {
    try{
        display.value = eval(display.value);
    }
    catch(err){
        display.value = "Error";
        setTimeout(clearDisplay, 1000);
    }
}

function clearDisplay() {
    display.value = "";
}