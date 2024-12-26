function add (x, y) {
    return x + y;
}

function subtract (x,y) {
    return x-y;
}

function multiply (x, y) {
    return x * y;
}

function divide (x, y) {
    if (y === 0) {
        return "cant divide by zero gang"; 
    }

    return x / y;
}

function operate (x, operator, y) {
    x = parseFloat(x);
    y = parseFloat(y);

    switch (operator) {
        case "+": 
            return add(x,y);
        case "-":
            return subtract(x, y);
        case "*": 
            return multiply(x, y);
        case "/":
            return divide(x, y);
        default:
            return "error, invalid operator :(";
    }
}

let output = document.querySelector("#output");
let buttonContainer = document.getElementById("buttons");
let currentNumber = "";
let currentOperator = "";

buttonContainer.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
        let operators = document.querySelectorAll(".operators")
        operators.forEach(operator => operator.style.opacity = 1);

        let value = event.target.getAttribute("data-value");

        if (!isNaN(value) && currentNumber.length < 7) {
            currentNumber += value;
            output.textContent = currentNumber; 
        } else if (value === "clear"){
            output.textContent = "0";
            currentNumber = "";
        } else if (value === "sign"){
            currentNumber = (-1 * Number(currentNumber)).toString();
            output.textContent = currentNumber;
        } else if (value === "percent") {
            currentNumber = (Number(currentNumber) / 100).toFixed(2).toString();
            output.textContent = currentNumber;
        } else if (value === "decimal" && !currentNumber.includes(".")) {
            currentNumber += ".";
            output.textContent = currentNumber;
        }

        switch (value) {
            case "+":
                currentOperator = "+";
                event.target.style.opacity = 0.7;
                break;
            case "-":
                currentOperator = "-";
                event.target.style.opacity = 0.7;
                break;
            case "*":
                currentOperator = "*";
                event.target.style.opacity = 0.7;
                break;
            case "/":
                currentOperator = "/";
                event.target.style.opacity = 0.7;
                break;
            default: 
                return "error, no operator found :("
        }
    }
});



