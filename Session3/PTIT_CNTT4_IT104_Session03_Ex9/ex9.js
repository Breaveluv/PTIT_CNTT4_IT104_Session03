function parseInput(value) {
    var num = typeof value === 'string' ? parseFloat(value) : value;
    return isNaN(num) ? null : num;
}
function add(a, b) {
    var num1 = parseInput(a);
    var num2 = parseInput(b);
    if (num1 === null || num2 === null)
        return "Invalid input!";
    return num1 + num2;
}
function subtract(a, b) {
    var num1 = parseInput(a);
    var num2 = parseInput(b);
    if (num1 === null || num2 === null)
        return "Invalid input!";
    return num1 - num2;
}
function multiply(a, b) {
    var num1 = parseInput(a);
    var num2 = parseInput(b);
    if (num1 === null || num2 === null)
        return "Invalid input!";
    return num1 * num2;
}
function divide(a, b) {
    var num1 = parseInput(a);
    var num2 = parseInput(b);
    if (num1 === null || num2 === null || num2 === 0)
        return "Invalid input!";
    return num1 / num2;
}
// New functions
function power(base, exponent) {
    var b = parseInput(base);
    var e = parseInput(exponent);
    if (b === null || e === null)
        return "Invalid input!";
    return Math.pow(b, e);
}
function sqrt(base, root) {
    var b = parseInput(base);
    var r = parseInput(root);
    if (b === null || r === null || r === 0)
        return "Invalid input!";
    return Math.pow(b, 1 / r);
}
function factorial(n) {
    var num = parseInput(n);
    if (num === null || num < 0 || !Number.isInteger(num))
        return "Invalid input!";
    var result = 1;
    for (var i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
}
// Main handler
function calculate(operation) {
    var input1 = document.getElementById("input1").value;
    var input2 = document.getElementById("input2").value;
    var result;
    switch (operation) {
        case "add":
            result = add(input1, input2);
            break;
        case "subtract":
            result = subtract(input1, input2);
            break;
        case "multiply":
            result = multiply(input1, input2);
            break;
        case "divide":
            result = divide(input1, input2);
            break;
        case "power":
            result = power(input1, input2);
            break;
        case "sqrt":
            result = sqrt(input1, input2);
            break;
        case "factorial":
            result = factorial(input1);
            break;
        default:
            result = "Unknown operation";
    }
    var resultElement = document.getElementById("result");
    resultElement.textContent = "Result: " + result;
}
