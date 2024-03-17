/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
    return number1 + number2;
}

function addNumbers() {
    let number1 = Number(document.getElementById('add1').value);
    let number2 = Number(document.getElementById('add2').value);

    let sum = add(number1, number2);

    document.getElementById('sum').value = sum;
}

document.getElementById('addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
function subtract(number1, number2) {
    return number1 - number2;
}

function subtractNumbers() {
    let number1 = Number(document.getElementById('subtract1').value);
    let number2 = Number(document.getElementById('subtract2').value);

    document.getElementById('difference').value = subtract(number1, number2);
}

document.getElementById('subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (factor1, factor2) => factor1 * factor2;

const multiplyNumbers = () => {
    let factor1 = Number(document.getElementById('factor1').value);
    let factor2 = Number(document.getElementById('factor2').value);

    document.getElementById('product').value = multiply(factor1, factor2);
}

document.getElementById('multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */
const divide = (dividend, divisor) => dividend / divisor;

function divideNumbers() {
    let dividend = Number(document.getElementById('dividend').value);
    let divisor = Number(document.getElementById('divisor').value);

    document.getElementById('quotient').value = divide(dividend, divisor);
}

document.getElementById('divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */
function getFinalTotal() {
    const subTotal = Number(document.getElementById('subtotal').value);
    const memberElement = document.getElementById('member');
    let finalTotal = subTotal.toFixed(2);

    if (memberElement.checked == true) {
        finalTotal = (subTotal * .80).toFixed(2);
    }

    document.getElementById('total').innerHTML = `$${finalTotal}`;
}

document.getElementById('getTotal').addEventListener('click', getFinalTotal);

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
const sourceArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
document.querySelector('#array').innerHTML = sourceArray;

/* Output Odds Only Array */
function isOdd(number) {
    if (number % 2 === 1) {
        return number;
    }
}

const oddArray = sourceArray.filter(isOdd);
document.querySelector('#odds').innerHTML = oddArray;

/* Output Evens Only Array */
function isEven(number) {
    if (number % 2 === 0) {
        return number;
    }
}

const evenArray = sourceArray.filter(isEven);
document.querySelector('#evens').innerHTML = evenArray;

/* Output Sum of Org. Array */
document.querySelector('#sumOfArray').innerHTML = sourceArray.reduce((acc, cur) => acc + cur);

/* Output Multiplied by 2 Array */
document.querySelector('#multiplied').innerHTML = sourceArray.map(number => number * 2);

/* Output Sum of Multiplied by 2 Array */
document.querySelector('#sumOfMultiplied').innerHTML = sourceArray
.map(number => number * 2)
.reduce((acc, cur) => acc + cur);