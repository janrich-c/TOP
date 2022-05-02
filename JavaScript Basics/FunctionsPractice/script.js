function add7(number) {
    return number + 7;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function capitalize(string = '') {
    string = string.toLowerCase();
    let rest = string.slice(1);
    string = string.charAt(0).toUpperCase() + rest;
    return string;
}

function lastLetter(string = '') {
    return string.charAt(string.length - 1);
}

let input = prompt("enet name");