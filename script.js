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

let output = document.querySelector("#output");
let buttonContainer = document.getElementById("buttons");
let currentNumber = "";

buttonContainer.addEventListener("click", (event) => {
    if (event.target.tagName === "BUTTON") {
        let value = event.target.getAttribute("data-value");
        
        if (!isNaN(value) && currentNumber.length < 7) {
            currentNumber += value;
            output.textContent = currentNumber; 
        } else if (value === "clear"){
            output.textContent = "0";
            currentNumber = "";
        } else if (value === "sign"){
            currentNumber *= (-1);
            output.textContent = currentNumber;
        } else if (value === "percent") {
            currentNumber = (Number(currentNumber) / 100).toFixed(2).toString();
            output.textContent = currentNumber;
        }
    }
});

function operate (x, operator, y) {
    x = parseFloat(x);
    y = parseFloat(y);

    switch (operator) {
        case "+": 
            return x + y;
        case "-":
            return x - y;
        case "*": 
            return x * y;
        case "/":
            return y === 0 ? "Error: Division by zero" : x / y;
        default:
            return "Error: Invalid operator";
    }
}

