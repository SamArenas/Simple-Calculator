let number = 0;
let op = "";
let numerator = document.querySelector(".output");
let denominator = document.querySelector(".in");


initialize = () => {
    let equalBtn = document.querySelector(".equals");
    let percentBtn = document.querySelector(".percent");
    let acBtn = document.querySelector(".AC");
    let backspaceBtn = document.querySelector(".backspace");

    let nums = document.querySelectorAll(".num");
    let operators = document.querySelectorAll(".operator");


    let numInsert = function (val) {
        if (val.type === "click") {
            denominator.textContent += this.textContent;
        }
        else {
            denominator.textContent += val.key;
        }

    };

    let operatorSelect = function () {
        if (denominator.textContent !== "") {
            numerator.textContent = denominator.textContent;
            denominator.textContent = "";
        }
        op = this.textContent;
    };

    let solve = function () {
        if (denominator.textContent !== "") {
            //console.log(numerator.textContent + " " + op + " " + denominator.textContent);
            switch (op) {
                case "+":
                    numerator.textContent = parseFloat(numerator.textContent) + parseFloat(denominator.textContent);
                    break;
                case "-":
                    numerator.textContent = parseFloat(numerator.textContent) - parseFloat(denominator.textContent);
                    break;
                case "*":
                    numerator.textContent = parseFloat(numerator.textContent) * parseFloat(denominator.textContent);
                    break;
                case "/":
                    numerator.textContent = parseFloat(numerator.textContent) / parseFloat(denominator.textContent);
                    break;

                default:
                    numerator.textContent = denominator.textContent;
                    break;
            }
            op = "";

            denominator.textContent = "";
        };
    };


    //add click event for each number
    nums.forEach((num) => {
        num.addEventListener("click", numInsert);
    });


    //add click event for operator selected
    operators.forEach((operator) => {
        operator.addEventListener("click", operatorSelect);
    });

    // click event for equal button
    equalBtn.addEventListener("click", solve);

    //events for backspace button, clear all and percent btn
    backspaceBtn.addEventListener("click", () => {
        denominator.textContent = denominator.textContent.slice(0, -1);
    });

    acBtn.addEventListener("click", () => {
        denominator.textContent = "";
        numerator.textContent = "";
        op = "";
    });

    percentBtn.addEventListener("click", () => {
        if (denominator.textContent === "") {
            numerator.textContent = parseFloat(numerator.textContent) / 100;
        }
        else {
            denominator.textContent = parseFloat(denominator.textContent) / 100;
        }
    });

    document.addEventListener("keydown", (e) => {
        if (e.key.match(/[0-9]/g)) {
            numInsert(e);
        }

        else if (e.key.match(/ [*+-/] /g)) {
            operatorSelect(e);
        }

        else if (e.key === "Backspace") {
            denominator.textContent = denominator.textContent.slice(0, -1);
        }

        if (e.key === "Enter" || e.key === "=") {
            e.preventDefault();
            solve();

        }
    });

};

initialize();