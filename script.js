'use strict';
const operation = prompt("What do you want to do (+, -, /, *)?", '');
const x = +prompt("Choose the first number?", '');
const y = +prompt("Choose the second number?", '');

function sum() {
    return alert(`summa ${x + y}`);
}

function min() {
    return alert(`subtraction ${x - y}`);
}

function mult() {
    return alert(`multiplication ${x * y}`);
}

function div() {
    return alert(`division ${x / y}`);
}
if (operation === '+') {
    sum()
} else if (operation === '-') {
    min()
} else if (operation === '*') {
    mult()
} else if (operation === '/') {
    div()
}