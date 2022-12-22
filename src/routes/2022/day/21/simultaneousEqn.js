/* Functions for solving simultaneous equations */


/**
 * https://stackoverflow.com/a/4009771/12709989
 * @param {*} string 
 * @param {*} substring 
 * @returns 
 */
function countInstances(string, substring) {
    return string.split(substring).length - 1;
}


function applyOperator(expressionSplit, operator) {

    const newExpression = [];

    // for (let i = 2; i < expressionSplit.length; i++) {
    //     const left = expressionSplit[i - 2];
    //     const operator = expressionSplit[i - 1];
    //     const right = expressionSplit[i];

    //     if (operator === operator && left !== "humn" && right !== "humn") {
    //         if (operator === "/") {
    //             newExpression.push(left / right);
    //         } else if (operator === "*") {
    //             newExpression.push(left * right);
    //         }
    //     }
    // }

}


function simplifyExpression(expression) {
    let expressionSplit = expression.split(" ");

    if (expressionSplit.length === 1) {
        return expressionSplit[0];
    }

    expressionSplit = applyOperator(expressionSplit, "/");
    expressionSplit = applyOperator(expressionSplit, "*");
    expressionSplit = applyOperator(expressionSplit, "+");
    expressionSplit = applyOperator(expressionSplit, "-");

    return expressionSplit;
}


export function solveSimultaneousEquation(equation) {
    const variable = "humn";

    // Check that variable only occurs once (this function can only deal with once lol)
    if (countInstances(equation, variable) !== 1) {
        throw `Invalid quantity of variable '${humn}' in equation:\n${equation}`;
    }
    if (countInstances(equation, "=") !== 1) {
        throw `Equation contains invalid number of equality operators '='`;
    }

    const [leftSide, rightSide] = equation.split("=");


}