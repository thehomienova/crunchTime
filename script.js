function add (x, y) {
    return x + y;
}

function subtract (x,y) {
    return x-y;
}

function multiply (x, y) {
    let finalNum = x * y;
    if (finalNum.toString().length > 7) {
        return Math.floor(finalNum * 100) / 100;
    } else {
        return finalNum;
    }
}

function divide (x, y) {
    if (y === 0) {
        return "nope"; 
    }

    let finalNum = x / y;
    if (finalNum.toString().length > 7) {
        return Math.floor(finalNum * 100) / 100;
    } else {
        return finalNum;
    }
    

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
let firstNum = "";
let secondNum = "";
let currentOperator = "";
let finalNum = "";


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
            firstNum = "";
            secondNum = "";
            currentOperator = "";
            finalNum = "";
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
            case "add":
            case "subtract":
            case "multiply":
            case "divide":
                if (firstNum && currentOperator && currentNumber) {
                    secondNum = currentNumber;
                    firstNum = operate(firstNum, currentOperator, secondNum);
                    output.textContent = firstNum;
                } else {
                    firstNum = currentNumber;
                }
                currentOperator = value === "add" ? "+" :
                value === "subtract" ? "-" :
                value === "multiply" ? "*" : "/";
                currentNumber = "";
                event.target.style.opacity = 0.7;
                    break;
            case "equal":
                secondNum = currentNumber; 
                let finalNum = operate(firstNum, currentOperator, secondNum);
                firstNum = finalNum;
                currentNumber = ""; 
                output.textContent = finalNum;
                break;
            default: 
                return "error, no operator found :("
        }
    }
});

document.addEventListener("keydown", function(event) {

    let operators = document.querySelectorAll(".operators")
    operators.forEach(operator => operator.style.opacity = 1);

    let keyPressed = event.key;
    if (keyPressed >= 0 || keyPressed <= 9) {
        if (currentNumber.toString().length < 7) {
            currentNumber += keyPressed;
            output.textContent = currentNumber;
        }
    } else if (keyPressed === "Backspace") {
        if (output.textContent.length === 1) {
            output.textContent = "0"
            currentNumber = "";
        } else if (output.textContent.length > 1) {
            output.textContent = output.textContent.slice(0, -1);
            currentNumber = output.textContent;
        } 
    }  else if (keyPressed === "."  && !currentNumber.includes(".")) {
        
        currentNumber += ".";
        output.textContent = currentNumber;
    }

        switch (keyPressed) {
            case "+":
            case "-":
            case "*":
            case "/":
                if (firstNum && currentOperator && currentNumber) {
                    secondNum = currentNumber;
                    firstNum = operate(firstNum, currentOperator, secondNum);
                    output.textContent = firstNum;
                } else {
                    firstNum = currentNumber;
                }
                
                currentOperator = keyPressed === "+" ? "+" :
                keyPressed === "-" ? "-" :
                keyPressed === "*" ? "*" : "/";
                currentNumber = "";
    
                document.getElementById(currentOperator.toString()).style.opacity = 0.7;            
                    break;
            case "=":
            case "Enter": 
                let equal = document.getElementById("=");
                equal.style.opacity = 0.7;
                setTimeout(() => {
                    equal.style.opacity = 1;
                  }, 100); 
                secondNum = currentNumber; 
                let finalNum = operate(firstNum, currentOperator, secondNum);
                firstNum = finalNum;
                currentNumber = ""; 
                output.textContent = finalNum;
                break;
            default: 
                return "error, no operator found :("
        }
        
});




