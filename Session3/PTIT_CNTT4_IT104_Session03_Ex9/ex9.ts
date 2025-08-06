function parseInput(value: string | number): number | null {
    const num = typeof value === 'string' ? parseFloat(value) : value;
    return isNaN(num) ? null : num;
}

function add(a: string | number, b: string | number): number | string {
    const num1 = parseInput(a);
    const num2 = parseInput(b);
    if (num1 === null || num2 === null) return "Invalid input!";
    return num1 + num2;
}

function subtract(a: string | number, b: string | number): number | string {
    const num1 = parseInput(a);
    const num2 = parseInput(b);
    if (num1 === null || num2 === null) return "Invalid input!";
    return num1 - num2;
}

function multiply(a: string | number, b: string | number): number | string {
    const num1 = parseInput(a);
    const num2 = parseInput(b);
    if (num1 === null || num2 === null) return "Invalid input!";
    return num1 * num2;
}

function divide(a: string | number, b: string | number): number | string {
    const num1 = parseInput(a);
    const num2 = parseInput(b);
    if (num1 === null || num2 === null || num2 === 0) return "Invalid input!";
    return num1 / num2;
}

// New functions
function power(base: string | number, exponent: string | number): number | string {
    const b = parseInput(base);
    const e = parseInput(exponent);
    if (b === null || e === null) return "Invalid input!";
    return Math.pow(b, e);
}

function sqrt(base: string | number, root: string | number): number | string {
    const b = parseInput(base);
    const r = parseInput(root);
    if (b === null || r === null || r === 0) return "Invalid input!";
    return Math.pow(b, 1 / r);
}

function factorial(n: string | number): number | string {
    const num = parseInput(n);
    if (num === null || num < 0 || !Number.isInteger(num)) return "Invalid input!";
    let result = 1;
    for (let i = 2; i <= num; i++) {
        result *= i;
    }
    return result;
}

// Main handler
function calculate(operation: string) {
    const input1 = (document.getElementById("input1") as HTMLInputElement).value;
    const input2 = (document.getElementById("input2") as HTMLInputElement).value;
    let result: string | number;

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

    const resultElement = document.getElementById("result")!;
    resultElement.textContent = "Result: " + result;
}
