let displayValue = 0;
//element 'disp' is the display
let stringNumber = "";
let result= 0;
let firstNum = 0;
let disp = document.querySelector('#displayText');
console.log(disp.textContent + displayValue);
let opFlag = ""; //Flag for if operator has already been set but user presses op again, then we know we
//should automatically return the result



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
let buttonNames = ["7", "8", "9", "/", "4", "5", "6", "x", "1", "2", "3", "-", "0", "=", "AC", "+"];

let doc = document.querySelector(".button_container");
let buttonNames_length = buttonNames.length;

for (x = 0; x < buttonNames_length; x++) {
    let button = document.createElement("input");
    button.type = "button";

    if (buttonNames[x] == "/" || buttonNames[x] == "+" || buttonNames[x] == "-" || buttonNames[x] == "x") {
        //if button name is an operator, assign to a class named operator
        button.className = "operator";
    } else if (buttonNames[x] == "AC") {
        //if button name is AC, then assign to a class named "clear"
        button.className = "clear";
    } else if (buttonNames[x] == '=') {
        //if button name is =, then assign to name equal
        button.className = "equal";
    } else {
        //logic for all other digit buttons
        button.className= "btn_digits";
    }
    button.id = buttonNames[x];
    button.value= buttonNames[x];
    doc.appendChild(button);
}

const digits = document.querySelectorAll('.btn_digits');

//iterates through all objects in collection 'buttons' and registers them to an event listener
//'btn' is a parameter that takes in am object from 'buttons' --> this can be set to any name
//Event listener below is for digits ONLY
digits.forEach((btn) => {
    btn.addEventListener('click', (e) => { //'e' can be named anythign
        //stringNumber holds whatever is inputted by user
        if (opFlag  == "") {
          stringNumber += btn.value;
          disp.textContent += btn.value;
       } else if (opFlag != "") {
        
       }
    });
});



const ops = document.querySelectorAll('.operator');
ops.forEach((op) => {
    op.addEventListener('click', (e) => { //'e' can be named anythign
        //populate the display
        let firstNum = parseInt(disp.textContent);
        //check if theres a number in the display then add it to the result
        if (stringNumber != "") {
            if (op.value == "+") {
                //add to results
                opFlag = "+";
               // result += stringNumber ;
            } else if (op.value == "-") {
                //subtract from result
                //result -= stringNumber;
                opFlag = "-";
            } else if (op.value == "/") {
                //result /= stringNumber;
                opFlag = "/";
            }

            firstNum = 0;
        } else {

            //TODO: Need to figure out logic for when operators are pressed before entering numbers
 
        }

            
       
    });
});

