const output = document.querySelector('.output')
const save = document.querySelectorAll('.outer')
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