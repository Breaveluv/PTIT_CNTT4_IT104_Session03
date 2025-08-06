function parseInput(value) {
    var num = typeof value === 'string' ? parseFloat(value) : value;
    return isNaN(num) ? null : num;
}
function add(a, b) {
    var num1 = parseInput(a);
    var num2 = parseInput(b);
    if (num1 === null || num2 === null) {
        return "Invalid input!";
    }
    return num1 + num2;
}
function subtract(a, b) {
    var num1 = parseInput(a);
    var num2 = parseInput(b);
    if (num1 === null || num2 === null) {
        return "Invalid input!";
    }
    return num1 - num2;
}
function multiply(a, b) {
    var num1 = parseInput(a);
    var num2 = parseInput(b);
    if (num1 === null || num2 === null) {
        return "Invalid input!";
    }
    return num1 * num2;
}
function divide(a, b) {
    var num1 = parseInput(a);
    var num2 = parseInput(b);
    if (num1 === null || num2 === null || num2 === 0) {
        return "Invalid input!";
    }
    return num1 / num2;
}

console.log(add("5", 10));
console.log(subtract("20", "4"));
console.log(multiply(3, "abc"));
console.log(divide("10", 0));
