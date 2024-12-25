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
        }
    }
});

function operate (x, y, operator) {

}

