let op = "";
let points = 0;

const equalBtn = document.querySelector(".equals");
const percentBtn = document.querySelector(".percent");
const acBtn = document.querySelector(".AC");
const backspaceBtn = document.querySelector(".backspace");
const numbers = document.querySelectorAll(".num");
const operators = document.querySelectorAll(".operator");
const numerator = document.querySelector(".output");
const denominator = document.querySelector(".in");
const pointBtn = document.querySelector(".point");
const operatorDisplay = document.querySelector(".operation");

function numberInsert(e) {
    if (denominator.textContent.length < 17) {
        e.type === "click" ? denominator.textContent += this.textContent : denominator.textContent += e.key;
    }
};

function operatorSelect(e) {
    if (denominator.textContent !== "" && numerator.textContent === "") {
        numerator.textContent = denominator.textContent;
        denominator.textContent = "";
    }
    e.type === "click" ? op = this.textContent : op = e.key;
    operatorDisplay.textContent = op;
};

function deleteNumber() {
    denominator.textContent = denominator.textContent.slice(0, -1);
};

function clearAll() {
    denominator.textContent = "";
    numerator.textContent = "";
    operatorDisplay.textContent = "";
    op = "";

};

function percent() {
    denominator.textContent = parseFloat(denominator.textContent) / 100;
}

function insertPoint() {
    if (!denominator.textContent.includes('.')) {
        denominator.textContent += ".";
    }
}

function solve() {
    if (denominator.textContent !== "") {
        switch (op) {
            case "+":
                denominator.textContent = parseFloat(numerator.textContent) + parseFloat(denominator.textContent);
                break;
            case "-":
                denominator.textContent = parseFloat(numerator.textContent) - parseFloat(denominator.textContent);
                break;
            case "*":
                denominator.textContent = parseFloat(numerator.textContent) * parseFloat(denominator.textContent);
                break;
            case "/":
                denominator.textContent = parseFloat(numerator.textContent) / parseFloat(denominator.textContent);
                break;

            default:
                denominator.textContent = denominator.textContent;
                break;
        }
        op = "";
        numerator.textContent = "";
        operatorDisplay.textContent = "";
    };
};

numbers.forEach((number) => {
    number.addEventListener("click", numberInsert);
});

operators.forEach((operator) => {
    operator.addEventListener("click", operatorSelect);
});

equalBtn.addEventListener("click", solve);

backspaceBtn.addEventListener("click", deleteNumber);

acBtn.addEventListener("click", clearAll);

percentBtn.addEventListener("click", percent);

pointBtn.addEventListener("click", insertPoint);

document.addEventListener("keydown", (e) => {
    if (e.key.match(/[0-9]/g)) {
        numberInsert(e);
    }

    else if (e.key.match(/[+*\/-]/g)) {
        operatorSelect(e);
    }

    else if (e.key === "Backspace") {
        deleteNumber();
    }

    else if (e.key === ".") {
        insertPoint();
    }

    else if (e.key === "Enter" || e.key === "=") {
        e.preventDefault();
        solve();
    }
});