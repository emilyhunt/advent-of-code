/* Functions for calculating*/


function applyOperator(unsolvedMonkey, withHumanVariable) {

    // Special case for if this has a humn var
    if (withHumanVariable 
            && (typeof unsolvedMonkey.monkeyOne === "string" 
                || typeof unsolvedMonkey.monkeyTwo === "string")) {
        return [
            unsolvedMonkey.monkeyOne.toString(), 
            unsolvedMonkey.operator, 
            unsolvedMonkey.monkeyTwo.toString()
        ].join(" ");
    }

    if (unsolvedMonkey.operator === "+") {
        return unsolvedMonkey.monkeyOne + unsolvedMonkey.monkeyTwo;
    } else if (unsolvedMonkey.operator === "-") {
        return unsolvedMonkey.monkeyOne - unsolvedMonkey.monkeyTwo;
    } else if (unsolvedMonkey.operator === "*") {
        return unsolvedMonkey.monkeyOne * unsolvedMonkey.monkeyTwo;
    } else if (unsolvedMonkey.operator === "/") {
        return unsolvedMonkey.monkeyOne / unsolvedMonkey.monkeyTwo;
    } else {
        throw `Operator ${unsolvedMonkey.operator} not recognised!`;
    }
}


function checkIfMonkeyCanBeSolved(monkey, solvedMonkeys) {
    if (typeof monkey !== "number" && solvedMonkeys.hasOwnProperty(monkey)) {
        return solvedMonkeys[monkey];
    } else {
        return monkey;
    }
}


function solveMonkey(monkeyKey, solvedMonkeys, unsolvedMonkeys, withHumanVariable) {
    // Check that this monkey is still unsolved (sometimes the queue contains duplicates and we don't remove them for
    // the sake of efficiency)
    if (!unsolvedMonkeys.hasOwnProperty(monkeyKey)) {
        return [];
    }

    // Otherwise, let's grab this monkeh and try and get both monkey references
    const unsolvedMonkey = unsolvedMonkeys[monkeyKey];
    unsolvedMonkey.monkeyOne = checkIfMonkeyCanBeSolved(unsolvedMonkey.monkeyOne, solvedMonkeys, withHumanVariable);
    unsolvedMonkey.monkeyTwo = checkIfMonkeyCanBeSolved(unsolvedMonkey.monkeyTwo, solvedMonkeys, withHumanVariable);

    // See if we were able to solve either
    let toReturn = [];
    if (typeof unsolvedMonkey.monkeyOne === "string" 
            && !(withHumanVariable && unsolvedMonkey.monkeyOne.includes("humn"))) {
        toReturn.push(unsolvedMonkey.monkeyOne);
    }
    if (typeof unsolvedMonkey.monkeyTwo === "string" 
            && !(withHumanVariable && unsolvedMonkey.monkeyTwo.includes("humn"))) {
        toReturn.push(unsolvedMonkey.monkeyTwo);
    }

    // If we're able to solve both (i.e. we have no references to return), try applying the operator
    if (toReturn.length === 0) {
        solvedMonkeys[monkeyKey] = applyOperator(unsolvedMonkey, withHumanVariable);
        delete unsolvedMonkeys[monkeyKey];
    }  

    // Otherwise, return an array containing monkeys we weren't able to get a solution for (which should be solved asap)
    return toReturn;
}


function createStartingObjects(data, withHumanVariable) {
    const solvedMonkeys = new Object();
    const unsolvedMonkeys = new Object();

    // Cycle over all lines of input and assign monkeys to either the object of solved or unsolved monkeys
    for (const line of data) {
        const monkeyID = line[0].replace(":", "");

        // Standard cases
        if (line.length === 4) {
            unsolvedMonkeys[monkeyID] = {id: monkeyID, monkeyOne: line[1], monkeyTwo: line[3], operator: line[2]};
        } else if (line.length === 2) {
            solvedMonkeys[monkeyID] = Number(line[1]);
        } else {
            throw `Unrecognised input line split by ' ': ${line}`;
        }
    }

    // Special case modifiers for part 2
    if (withHumanVariable) {
        unsolvedMonkeys.root.operator = "=";
        solvedMonkeys.humn = "humn";
    }

    return [solvedMonkeys, unsolvedMonkeys];
}


export function solveMonkeyJobs(data, withHumanVariable) {
    // Decide if humn is a special variable or not
    if (withHumanVariable === undefined) {
        withHumanVariable = false;
    }

    // Create starting solved monks
    const [solvedMonkeys, unsolvedMonkeys] = createStartingObjects(data, withHumanVariable);

    // Make a priority queue array. We add keys to this as they appear and prioritise checking them first. When the
    // queue is empty, we can look around for other objects.
    const priorityQueue = ["root"]//Object.keys(unsolvedMonkeys);

    // Cycle continuously until we solve the root monkey
    while (true) {
        // Check that we haven't ran out of items
        if (priorityQueue.length === 0) {
            throw "Found no items to solve! priorityQueue has zero length."
        }

        // Otherwise, try to solve the next monkeh
        const currentMonkey = priorityQueue[0];
        //console.log(currentMonkey);
        const nextQueueItems = solveMonkey(currentMonkey, solvedMonkeys, unsolvedMonkeys, withHumanVariable);
        //console.log(nextQueueItems.length);

        // If we solved the monkey, then remove it from the queue
        if (nextQueueItems.length === 0) {
            priorityQueue.shift();

            // If the monkey we just solved is root, then we can stop looping here!
            if (currentMonkey === "root") {
                break;
            }

        // Otherwise, add new items to the front of the queue
        } else {
            priorityQueue.unshift(...nextQueueItems);
        }
    }

    return solvedMonkeys.root;

}
