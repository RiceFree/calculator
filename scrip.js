//Functions

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

//Initial variables I need
let displayValue = "";
let operator;
let a = [];
let newA = [];


//Keyborad numbers events
let numbers = document.querySelectorAll('.btn');
let screenValue = document.querySelector('#screen');
numbers.forEach(num => {
    num.addEventListener('click', (e) => {
        displayValue += num.id;
        screenValue.textContent = '';
        screenValue.textContent = displayValue;
        let a = displayValue
    });
    num.addEventListener('mouseover', (e) => {
        num.classList.add('hoverBtn');
    });
    num.addEventListener('mouseleave', (e) => {
        num.classList.remove('hoverBtn');
    });
});

//Operations + Clear buttons Hover events
let operators = document.querySelectorAll('.OpBtn');
operators.forEach(op => {
    op.addEventListener('mouseover', (e) => {
        op.classList.add('hoverOpBtn');
    });
    op.addEventListener('mouseleave', (e) => {
        op.classList.remove('hoverOpBtn');
    });
});

let clearBtn = document.querySelector('#clear');
clearBtn.addEventListener('click', (e) => {
    displayValue = '';
    screenValue.textContent = displayValue;
    a = [];
    newA = [];
});



//Operations
const resultBtn = document.querySelector('#equal')

resultBtn.addEventListener('mouseover', (e) => {
    resultBtn.style.backgroundImage = 'linear-gradient(rgb(107, 19, 26), rgb(133, 65, 65))'
});
resultBtn.addEventListener('mouseleave', (e) => {
    resultBtn.style.backgroundImage = 'linear-gradient(rgb(202, 83, 93), rgb(172, 69, 69))'
});

resultBtn.addEventListener('click', (e) => {
    let thisObj = {
        "number": Number(displayValue),
    }
    a.push(thisObj);
    let x = a[0]["number"];
    for (let i = 1; i < a.length; i++) {
        if (a[i-1]["operator"] === add || a[i-1]["operator"] === subtract) {
            let obj = {
                "operator": a[i-1]["operator"],
                "number": x,
            }
            x = a[i]["number"];
            newA.push(obj);
        } else {
            x = operate(a[i-1]["operator"], x, a[i]["number"]);
        }
    }
    if (a[a.length - 2]["operator"] === add || a[a.length - 2]["operator"] === subtract) {
        let obj = {
            "number": a[a.length - 1]["number"]
        };
        newA.push(obj);
    } else {
        let obj = {
            "number": x
        };
        newA.push(obj);
    }

    let res = Number(newA[0]["number"])
    for (let i=1; i< newA.length; i++) {
        res = operate(newA[i-1]["operator"], res, newA[i]["number"]);
    }
    
    if (res === Infinity) {
        res = "ERROR"
    } else {
        res = Math.round(res * 100) / 100;
    }
    displayValue = res;
    screenValue.textContent = displayValue;
    displayValue = '';
    newA = [];
    a = []
});


const adding = document.querySelector('#add');
const subtracting = document.querySelector('#minus');
const multiplying = document.querySelector('#multiply');
const dividing = document.querySelector('#divide');

adding.addEventListener('click', (e) => {
    if (displayValue === "" || displayValue ==="Let's do some math! :)") {
        displayValue = "";
        return
    }

    let obj = {
        "operator": add,
        "number": Number(displayValue),
    };   
    a.push(obj);
    displayValue = "";
})

subtracting.addEventListener('click', (e) => {
    if (displayValue === "" || displayValue ==="Let's do some math! :)") {
        displayValue = "";
        return
    }
    let obj = {
        "operator": subtract,
        "number": Number(displayValue),
    };   
    a.push(obj);
    displayValue = "";
})

multiplying.addEventListener('click', (e) => {
    if (displayValue === "" || displayValue ==="Let's do some math! :)") {
        displayValue = "";
        return
    }
    let obj = {
        "operator": multiply,
        "number": Number(displayValue),
    };   
    a.push(obj);
    displayValue = "";
})

dividing.addEventListener('click', (e) => {
    if (displayValue === "" || displayValue ==="Let's do some math! :)") {
        displayValue = "";
        return
    }
    let obj = {
        "operator": divide,
        "number": Number(displayValue),
    };   
    a.push(obj);
    displayValue = "";
})
/** 
adding.addEventListener('click', (e) =>{
    if (num1 === undefined) {
    num1 = displayValue;
    operator = add;
    displayValue = '';
    screenValue.textContent = displayValue;
    } else {
        num1 += Number(displayValue);
        operator = add;
        displayValue = '';
        screenValue.textContent = displayValue;
    }
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
    num = undefined;
})*/