export class Add {
    constructor (value) {
        this.value = value;
    }
    apply (old) {
        return old + this.value;
    }
}

export class Multiply {
    constructor (value) {
        this.value = value;
    }
    apply (old) {
        return old * this.value;
    }
}

export class Square {
    constructor () {
    }
    apply (old) {
        return old * old;
    }
}

export function getOperation(operationString) {
    // Split it into something we can work with
    const operationStringSplit = operationString.trim().split(" ");
    const expectedOperationStringLength = 6;

    // Error check, helps if there's an op here I haven't implemented
    if (operationStringSplit.length != expectedOperationStringLength) {
        throw `Operation string has length different to expected value\n${operationString}`;
    }

    // Get individual parts of the string that are useful
    const operator = operationStringSplit[4];
    let value = operationStringSplit[5];

    // Cycle through, getting the right thing
    if (value === "old" && operator === "*") {
        return new Square();
    }

    value = Number(value);
    if (operator === "+") {
        return new Add(value);
    } 
    if (operator === "*") {
        return new Multiply(value);
    }
    throw `Expected operation defined by ${operationString} not recognised! Operator: ${operator} Value: ${value}`;
}
