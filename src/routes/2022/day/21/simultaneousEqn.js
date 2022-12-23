/* Functions for solving simultaneous equations */

// I can't believe this is how I have to use this fucking module
import nerdamer from "nerdamer";
import { solve } from "nerdamer/Solve";
solve;


/**
 * https://stackoverflow.com/a/4009771/12709989
 * @param {*} string 
 * @param {*} substring 
 * @returns 
 */
export function countInstances(string, substring) {
    return string.split(substring).length - 1;
}


// const OPERAND_MAPPING = {
//     "/": (left, right) => left / right,
//     "*": (left, right) => left * right,
//     "+": (left, right) => left + right,
//     "-": (left, right) => left - right,
// }


// function simplifyExpression(expression, result, variableName) {
//     // Remove trailing/leading spaces
//     expression = expression.trim();

//     // Find first bracket instance
//     const firstBracket = expression.indexOf("(");
//     const lastBracket = expression.lastIndexOf(")");

//     // Handle if the entire expression is bracketted
//     if (firstBracket === 0 && lastBracket === expression.length - 1) {

//     // Handle if one side is not bracketed
//     } else {

//     }
// }


export function solveSimultaneousEquation(equation) {
    const variable = "humn";

    // Check that variable only occurs once (this function can only deal with once lol)
    if (countInstances(equation, variable) !== 1) {
        throw `Invalid quantity of variable '${humn}' in equation:\n${equation}`;
    }
    if (countInstances(equation, "=") !== 1) {
        throw `Equation contains invalid number of equality operators '='`;
    }

    equation = equation.replaceAll(variable, "x");
    console.log(equation);
    return nerdamer.solve(equation, "x");
}