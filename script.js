let numbers = [];
let op = "";

initialize = () =>{
    let nums = document.querySelectorAll(".num");
    let operators = document.querySelectorAll(".operator");
    nums.forEach((num) => {
        num.addEventListener("click", ()=>{
            document.querySelector(".output").textContent += num.textContent;
        });
    });
    
    operators.forEach((operator) => {
        operator.addEventListener("click", () =>{
            if(document.querySelector(".output").textContent != ""){
                op = operator.textContent;
                numbers.push(document.querySelector(".output").textContent);
                document.querySelector(".output").textContent = "";
                console.log(numbers[0]);
            }
            
        });
    });

    let equal = document.querySelector(".equals");
    equal.addEventListener("click", () =>{
        if(numbers.size != 0  && document.querySelector(".output").textContent != "" ){
            if(op ==="+"){
                console.log("made 2");
                    document.querySelector(".output").textContent = parseInt(document.querySelector(".output").textContent) + parseInt(numbers[0]);
            }
        }
                    
    })
    
};

initialize();