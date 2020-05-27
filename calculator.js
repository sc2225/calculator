function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x/y;
}

function operate(operator, x, y) {

    //switch statement to determine which function to execute based on operation
    switch(operator) {
        case '+':
            add(x, y);
            break;
        case '-':
            subtract(x, y);
            break;
        case '*':
            multiply(x, y);
            break;
        case '/':
            divide(x,y);
            break;
        default:
        ; 
    }
    
}

//using array of names, create buttons for calculator using loop
let buttonNames = ["7", "8", "9", "/", "4", "5", "6", "X", "1", "2", "3", "-", "0", "=", "+", "AC"];

let doc = document.querySelector(".button_container");
let buttonNames_length = buttonNames.length;

for (x = 0; x < buttonNames_length; x++) {
    let button = document.createElement("input");
    button.type = "button";
    button.className= "btn_digits";
    button.value= buttonNames[x];
    doc.appendChild(button);
}
