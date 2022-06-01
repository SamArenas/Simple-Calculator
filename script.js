let number = 0;
let op = "";

initialize = () =>{
    let nums = document.querySelectorAll(".num");
    let operators = document.querySelectorAll(".operator");
    nums.forEach((num) => {
        num.addEventListener("click", ()=>{
            document.querySelector(".in").textContent += num.textContent;
        });
    });
    
    operators.forEach((operator) => {
        operator.addEventListener("click", () =>{
            if(document.querySelector(".in").textContent != ""){
                document.querySelector(".output").textContent  = (document.querySelector(".in").textContent);
                document.querySelector(".in").textContent = "";
            }
            op = operator.textContent;
        });
    });

    let equal = document.querySelector(".equals");
    equal.addEventListener("click", () =>{
        if(document.querySelector(".in").textContent != "" ){
            console.log(document.querySelector(".output").textContent + " " + op + " " + document.querySelector(".in").textContent);
            switch (op) {
                case "+":
                    document.querySelector(".output").textContent = parseFloat(document.querySelector(".output").textContent) + parseFloat(document.querySelector(".in").textContent);
                    break;
                case "-":
                    document.querySelector(".output").textContent = parseFloat(document.querySelector(".output").textContent) - parseFloat(document.querySelector(".in").textContent);
                    break;
                case "*":
                    document.querySelector(".output").textContent = parseFloat(document.querySelector(".output").textContent) * parseFloat(document.querySelector(".in").textContent);
                    break;
                case "/":
                    document.querySelector(".output").textContent = parseFloat(document.querySelector(".output").textContent) / parseFloat(document.querySelector(".in").textContent);
                    break;
            }
            op = "";
            document.querySelector(".in").textContent = "";
            
        }         
    })

    let backspace = document.querySelector(".backspace");

    backspace.addEventListener("click" , () =>{
        document.querySelector(".in").textContent =  document.querySelector(".in").textContent.slice(0,-1);
    });

    let ac = document.querySelector(".AC");
    ac.addEventListener("click" , () =>{
        document.querySelector(".in").textContent = "";
        document.querySelector(".output").textContent = "";
        op = "";
    });
    
};

initialize();