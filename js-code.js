let displayNum = document.querySelector('#display');
displayNum.textContent = '69';

let num1 = 0;
let num2 = 0;
let currentOp = null;

let CE = document.querySelector("#clear").addEventListener("click",function(){
    displayNum.innerHTML = '0';
    num1 = '0';
    num2 = 0;
    currentOp = null;
});

let numbers = document.querySelectorAll(".num");
for (let i = 0; i < numbers.length; i++){
    numbers[i].addEventListener("click", function(){
        if (displayNum.textContent === '0'){
            displayNum.textContent = numbers[i].id;
        }
        else {
            displayNum.textContent += numbers[i].id;
        }
    });
}


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