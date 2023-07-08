let displayNum = document.querySelector('#display');
displayNum.textContent = '0';
let reset = false;
let hetriedit = false;

let num1 = 0;
let num2 = null;
let currentOp = null;

function round(value, precision) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}

let CE = document.querySelector("#clear").addEventListener("click",function(){
    reset = true;
    displayNum.innerHTML = '0';
    num1 = '0';
    num2 = null;
    currentOp = null;
});

let numbers = document.querySelectorAll(".num");
for (let i = 0; i < numbers.length; i++){
    numbers[i].addEventListener("click", function(){
        if (displayNum.textContent === '0' || reset === true){
            reset = false;
            displayNum.textContent = numbers[i].id;
        }
        else if (num1 !== 0 && currentOp != null && displayNum.textContent === 0){
            displayNum.textContent = numbers[i].id;
        }
        else {
            displayNum.textContent += numbers[i].id;
        }
    });
}

let operations = document.querySelectorAll(".op");
for (let i = 0; i < operations.length; i++){
    operations[i].addEventListener("click", function(){
        if (num2 === null){
            num1 = parseInt(displayNum.textContent);
            currentOp = operations[i].id;
            num2 = 0;
            displayNum.textContent = num2;
        }
        else if (num1 !== null && num2 !== null){
            num2 = displayNum.textContent;
            num1 = round(operator(currentOp, num1, num2), 10);
            num2 = 0;
            displayNum.textContent = num1;
            currentOp = operations[i].id;
        }
    });
}

let equals = document.querySelector('#equals').addEventListener("click", function(){
    if (num1 !== null && currentOp !== null && num2 !== null){
        reset = true;
        num2 = displayNum.textContent;
        if(num2 === 0 && currentOp === "div"){
            displayNum.textContent = "Nice try, bud";
        }
        num1 = round(operator(currentOp, num1, num2), 10);
        if (num1 === "He tried it"){
            num1 = 0;
            num2 = null;
            displayNum.textContent = "Nice try, bud";
            currentOp = null;
        }
        else {
            num2 = null;
            displayNum.textContent = num1;
            currentOp = null;
        }
    }
});


function add(a, b){
    return parseInt(a)+parseInt(b);
}

function subtract(a, b){
    return a-b;
}

function multiply(a, b){
    return a*b;
}

function divide(a, b){
    if (parseInt(b) === 0){
        return "He tried it";
    }
    return a/b;
}

function operator(op, num1, num2){
    op = op.toLowerCase().trim();
    if(op === "add"){
        return add(num1,num2);
    }
    if(op === "sub"){
        return subtract(num1,num2);
    }
    if(op === "mul"){
        return multiply(num1,num2);
    }
    if(op === "div"){
        return divide(num1,num2);
    }
    return "Give me a valid operation, damnit.";
}

//let num1 = 3;
//let num2 = 5;
//console.log(add(num1, num2) + "\n" + subtract(num1, num2) + "\n" + multiply(num1,num2) + "\n" + divide(multiply(num1, num1), num1));

//const oper = prompt("What operation do you want to do?");
//num1 = prompt("Number 1");
//num2 = prompt("Number 2");
//const calculation = operator(oper, num1, num2);

//const answer = document.createElement('h1');
//answer.textContent = calculation;
//document.querySelector('body').appendChild(answer);