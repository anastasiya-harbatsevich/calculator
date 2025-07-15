"use strict";

Object.defineProperty(exports, "__esModule", { value: true });

exports.add = add;
exports.subtract = subtract;
exports.multiply = multiply;
exports.divide = divide;

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error("Divide by 0 is unimpossible");
    }
    else {
        return a / b;
    }
}
