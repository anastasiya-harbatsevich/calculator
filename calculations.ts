import promptSync from 'prompt-sync';
import {add, subtract, multiply, divide} from './operations';

const prompt = promptSync();

const firstInput = prompt('Enter the first number: ');
const secondInput = prompt('Enter the second number: ');
let operatorInput = prompt('Enter operator: ');

const a = parseFloat(firstInput);
const b = parseFloat(secondInput);

if (isNaN(a) || isNaN(b)) {
    console.log('Entered symbol isnt a number');
    process.exit(1);
};

const operators = ['+', '-', '*', '/'];

while (!operators.includes(operatorInput)) {
    console.log('Unknown operator');
    operatorInput = prompt('Enter correct operator: ')
}

try {
    let result: number;
    switch (operatorInput) {
        case '+' :
            result = add(a, b);
            break;
        case '-' :
            result = subtract(a, b);
            break;
        case '*' :
            result = multiply(a, b);
            break;
        case '/' :
            result = divide(a, b);
            break;
        default :
            console.log('Unknown operation');
            process.exit(1);
    }
    console.log(`Result: ${a} ${operatorInput} ${b} = ${result}`);
} catch (error) {
    console.log(`${(error as Error).message}`);
}