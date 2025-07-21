Console Calculator in TypeScript

A simple console calculator for performing basic operations: addition, subtraction, multiplication, and division.The program takes user input from the terminal.

## Requirements

Node.js (version 16 or higher)

npm (comes with Node.js)

TypeScript compiler

prompt-sync package

@types/node for TypeScript type checking

## Installation

### Clone the repository:

git clone https://github.com/anastasiya-harbatsevich/calculator.git

### Install dependencies:

npm install

### Run the calculator with:

npm run calculator

## Usage Example

Enter the first number: 5

Enter the second number: 3

Enter operator: *

Result: 5 * 3 = 15

The calculator will check the validity of input values and selected operation. If invalid input is provided, it will display an error message. If invalid operator is provided, it wii ask to reenter it.

## Project Structure

├── calculations.ts    // Main program logic

├── operations.ts      // Mathematical operations

├── tsconfig.json      // TypeScript configuration

├── package-lock.json  // Automatically generated lockfile for exact dependency versions

├── package.json       // Dependencies and scripts

├── README.md          // Project description

├── .gitignore         // Git ignore rules