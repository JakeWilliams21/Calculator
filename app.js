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