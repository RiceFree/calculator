function add (a, b) {
	return a + b;
}

function subtract (a, b) {
	return a - b;
}

function divide (a, b) {
    return a / b;
}

function multiply (a, b) {
    return a * b;
}

function operate (func, a, b) {
    return func(a, b);
}

let displayValue = "";

let numbers = document.querySelectorAll('.btn');
let screenValue = document.querySelector('#screen');
numbers.forEach(num => {
    num.addEventListener('click', (e) => {
        displayValue += num.id;
        screenValue.textContent = '';
        screenValue.textContent = displayValue;
    });
    num.addEventListener('mouseover', (e) => {
        num.classList.add('hoverBtn');
    });
    num.addEventListener('mouseleave', (e) => {
        num.classList.remove('hoverBtn');
    });
});

let operators = document.querySelectorAll('.OpBtn');
operators.forEach(op => {
    op.addEventListener('mouseover', (e) => {
        op.classList.add('hoverOpBtn');
    });
    op.addEventListener('mouseleave', (e) => {
        op.classList.remove('hoverOpBtn');
    });
})

let clearBtn = document.querySelector('#clear');
clearBtn.addEventListener('click', (e) => {
    displayValue = '';
    screenValue.textContent = displayValue;
});

let num1;
let num2;
let operator;

const adding = document.querySelector('#add');
const subtracting = document.querySelector('#minus');
const multiplying = document.querySelector('#multiply');
const dividing = document.querySelector('#divide');
const resultBtn = document.querySelector('#equal')

adding.addEventListener('click', (e) =>{
    num1 = displayValue;
    operator = add;
    displayValue = '';
    screenValue.textContent = displayValue;
});
subtracting.addEventListener('click', (e) =>{
    num1 = displayValue;
    operator = subtract;
    displayValue = '';
    screenValue.textContent = displayValue;
});
multiplying.addEventListener('click', (e) =>{
    num1 = displayValue;
    operator = multiply;
    displayValue = '';
    screenValue.textContent = displayValue;
});
dividing.addEventListener('click', (e) =>{
    num1 = displayValue;
    operator = divide;
    displayValue = '';
    screenValue.textContent = displayValue;
});

resultBtn.addEventListener('click', (e) => {
    num2 = displayValue;
    num1 = Number(num1);
    num2 = Number(num2);
    let result = operate(operator, num1, num2);
    displayValue = '';
    displayValue = result
    screenValue.textContent = displayValue;
})

resultBtn.addEventListener('mouseover', (e) => {
    resultBtn.style.backgroundImage = 'linear-gradient(rgb(107, 19, 26), rgb(133, 65, 65))'
});
resultBtn.addEventListener('mouseleave', (e) => {
    resultBtn.style.backgroundImage = 'linear-gradient(rgb(202, 83, 93), rgb(172, 69, 69))'
});