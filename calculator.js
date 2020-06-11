let displayValue = 0;
//element 'disp' is the display
let stringNumber = "";
let result= 0;
let opEqual = 0;
let xNum = null;
let yNum = null;
let disp = document.querySelector('#displayText');
console.log(disp.textContent + displayValue);
let opFlag = ""; //Flag for if operator has already been set but user presses op again, then we know we
//should automatically return the result
let opCount = 0;




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
            result = add(x, y);
            break;
        case '-':
            result = subtract(x, y);
            break;
        case '*':
            result = multiply(x, y);
            break;
        case '/':
            result = divide(x,y);
            
            break;
        default:

    }
    disp.textContent = result;


    
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

        if (opFlag != "") {
            disp.textContent = "";
        }
        disp.textContent += btn.value;   

    });
});


//Event Listener below for operators ONLY
const ops = document.querySelectorAll('.operator');
ops.forEach((op) => {
    op.addEventListener('click', (e) => { //'e' can be named anythign
     
        if (opFlag == "") {
            if (xNum == null) {
                xNum = parseInt(disp.textContent); 
            } else if (yNum == null) {
                yNum = parseInt(disp.textContent);
            }
            opFlag = op.value;
            
        } else if (opFlag != "") {
            //if operators pressed multiple times in sucession, do nothing
        }

    });
});




const equalBtn = document.querySelector('.equal');
equalBtn.addEventListener('click', (e) => { //'e' can be named anythign  


        yNum = parseInt(disp.textContent);
        console.log("xNum = " + xNum + " yNum = " + yNum + " opFlag = " + opFlag);
        operate(opFlag, parseInt(xNum), yNum);
        opFlag = "";
        xNum = result;
        opCount = 0;
});


const clearBtn = document.querySelector('.clear');
clearBtn.addEventListener('click', (e) => { //'e' can be named anythign  
    //clears the display and all variables
    disp.textContent = "";
    opFlag = "";
    xNum = null;
    yNum = null;
    opCount = 0;
});

