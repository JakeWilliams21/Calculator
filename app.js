const output = document.querySelector('.output')
const operators = document.querySelectorAll('.operator')
const equals = document.querySelector('.equals')
const clear = document.querySelector('.clear')
let prevValue = 0
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
    number.addEventListener('click', (e) => {
        if( output.innerHTML === '0') {
            output.textContent = e.target.id
        } else {
            output.textContent += e.target.id
        }
    })
})

operators.forEach(operator => {
    operator.addEventListener('click', e => {
        prevValue = output.textContent
        selectedOperator = e.target.id
        output.textContent = 0;
    })
})

equals.addEventListener('click', () => {
    let solution = 0
    intFirst = parseInt(prevValue);
    intSecond = parseInt(output.textContent);
    solution = operate(selectedOperator, intFirst, intSecond)
    output.textContent = solution

})

clear.addEventListener('click', () => {
    output.textContent = 0
    prevValue = 0
    console.log(prevValue);
})