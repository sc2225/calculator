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