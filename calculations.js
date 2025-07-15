"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const operations_1 = require("./operations");
const prompt = (0, prompt_sync_1.default)();
const firstInput = prompt('Enter the first number: ');
const secondInput = prompt('Enter the second number: ');
let operatorInput = prompt('Enter operator: ');
const a = parseFloat(firstInput);
const b = parseFloat(secondInput);
if (isNaN(a) || isNaN(b)) {
    console.log('Entered symbol isnt a number');
    process.exit(1);
}
;
const operators = ['+', '-', '*', '/'];
while (!operators.includes(operatorInput)) {
    console.log('Unknown operator');
    operatorInput = prompt('Enter correct operator: ');
}
try {
    let result;
    switch (operatorInput) {
        case '+':
            result = (0, operations_1.add)(a, b);
            break;
        case '-':
            result = (0, operations_1.subtract)(a, b);
            break;
        case '*':
            result = (0, operations_1.multiply)(a, b);
            break;
        case '/':
            result = (0, operations_1.divide)(a, b);
            break;
        default:
            console.log('Unknown operation');
            process.exit(1);
    }
    console.log(`Result: ${a} ${operatorInput} ${b} = ${result}`);
}
catch (error) {
    console.log(`${error.message}`);
}
