const output = document.querySelector('.output')
const operators = document.querySelectorAll('.operator')
const equals = document.querySelector('.equals')
const clear = document.querySelector('.clear')
const decimal = document.querySelector('.decimal')
let prevValue = 0
let didCompute = false;
selectedOperator = ''
console.log(output);

const add = (first, second) => first + second;
const subtract = (first, second) => first - second;
const multiply = (first, second) => first * second
const divide = (first, second) => first / second;


const operate = (operator, first, second) => {
    switch (operator) {
        case 'add':
            return add(first, second);
        case 'subtract':
            return subtract(first, second)
        case 'multiply':
            return multiply(first, second)
        case 'divide':
            return divide(first, second);
        default:
            return 0;
    }
}

const numbers = document.querySelectorAll('.number')
numbers.forEach(number => {
    number.addEventListener('click', handleInput = (e) => {
        if( output.innerHTML === '0') {
            output.textContent = e.target.id
        } else {
            output.textContent += e.target.id
        }

        if (output.textContent.includes('.')) {
            decimal.removeEventListener('click', handleInput)
        }
    })
})

if (output.textContent.includes('.')) {
    decimal.removeEventListener('click', input)
}

operators.forEach(operator => {
    operator.addEventListener('click', e => {
        if (prevValue === 0 || didCompute) {
            prevValue = output.textContent
            selectedOperator = e.target.id
            output.textContent = 0;
            didCompute = false;
        } else {
            compute();
            selectedOperator = e.target.id;
            output.textContent = 0;
        }
        
    })
})

compute = () => {
    let solution = 0
    intFirst = parseFloat(prevValue);
    intSecond = parseFloat(output.textContent);
    solution = operate(selectedOperator, intFirst, intSecond)
    prevValue = solution
    output.textContent = solution
    didCompute = true
}

equals.addEventListener('click', () => compute())

clear.addEventListener('click', () => {
    output.textContent = 0
    prevValue = 0
    console.log(prevValue);
})