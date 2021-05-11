//update number on calculator screen function
const calculatorScreen = document.querySelector('.calculator-screen');

const updateScreen = (number) => {
    calculatorScreen.value = number;
}

//take clicked "number" and update the screen
const numbers = document.querySelectorAll(".number");

numbers.forEach ( (number) => {
    number.addEventListener("click", (event) => {
        inputNumber(event.target.value);
        updateScreen(currentNumber);
    })
})

//define variable that gonna be calculated
let prevNumber = '';
let calculatorOperator = '';
let currentNumber = '0'

//update number on current number
const inputNumber = (number) => {
    if(currentNumber === '0'){    
        currentNumber = number;
    }else{
        currentNumber += number;
    }
}

//Operator
const operators = document.querySelectorAll(".operator");

operators.forEach((operator) => {
    operator.addEventListener("click", (event) => {
        inputOperator(event.target.value);
    })
})

//save operator that user choose and update numbers'variable value
const inputOperator = (operator) => {
    if(calculatorOperator === ''){
        prevNumber = currentNumber;
    }
    calculatorOperator = operator;
    currentNumber = '0';
}


//equal sign
const equalSign = document.querySelector('.equal-sign');

equalSign.addEventListener('click', () =>   {
    calculate();
    updateScreen(currentNumber);
})

//calculate all variable
const calculate = () => {
    let result = '';
    switch(calculatorOperator){
        case "+":
            result = parseFloat(prevNumber) + parseFloat(currentNumber);
            break;
        case "-":
            result = prevNumber - currentNumber;
            break;
        case "*":
            result = prevNumber * currentNumber;
            break;
        case "/":
            result = prevNumber / currentNumber;
            break;
        default:
            break;
    }
    currentNumber = result;
    calculatorOperator = '';
}

//All-Clear/AC function
const ClearBtn = document.querySelector('.all-clear');

ClearBtn.addEventListener('click', () => {
    clearAll();
    updateScreen(currentNumber);
})

const clearAll = () => {
    prevNumber = '';
    calculatorOperator = '';
    currentNumber = '';
}

//Decimal
const decimal = document.querySelector('.decimal');

decimal.addEventListener('click', (event) => {
    inputDecimal(event.target.value);
    updateScreen(currentNumber);
})

inputDecimal = (dot) => {
    if(currentNumber.includes('.')){
        return
    }
    currentNumber += dot;
}