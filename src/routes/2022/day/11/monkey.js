import { Item } from "./item";
import { getOperation } from "./operations";

/**
 * Represents a single Monkey and all of its items.
 */
class Monkey {
    constructor (monkeyData) {
        monkeyData = String(monkeyData);
        monkeyData = monkeyData.split("\n");
        
        // Get item values from string & make them
        this.items = monkeyData[1]
            .split(":")[1]
            .replace(" ", "")
            .split(",")
            .map(x => new Item(Number(x)));

        // Initialise our operation
        this.operation = getOperation(monkeyData[2]);

        // Initialise our test by getting the divisor, true monkey and false monkey from strings
        this.divisor = Number(monkeyData[3].split(" ").slice(-1)[0]);
        this.monkeyTestTrue = Number(monkeyData[4].split(" ").slice(-1)[0]);
        this.monkeyTestFalse = Number(monkeyData[5].split(" ").slice(-1)[0]);

        // Other things to init
        this.inspections = 0;  // Count of how many times we've inspected an item
    }

    hasAnItem () {
        if (this.items.length > 0) {
            return true;
        }
        return false;
    }

    processNextItem (worryReduceable, commonDivisor) {
        // Get our item & remove it from the current items array
        const itemToThrow = this.items.shift();

        // Apply operations and test to see who we throwin to
        itemToThrow.applyOperation(this.operation);
        this.inspections += 1;

        if (worryReduceable) {
            itemToThrow.reduceWorry();
        } else {
            itemToThrow.reduceByDivisor(commonDivisor);
        }

        if (itemToThrow.divisibleBy(this.divisor)) {
            return {item: itemToThrow, recipient: this.monkeyTestTrue};
        } 
        return {item: itemToThrow, recipient: this.monkeyTestFalse};
    }

    receiveItem (item) {
        this.items.push(item);
    }
}

/**
 * Creates monkey objects based on initial data and offers a neat way to keep them all together.
 */
export class MonkeyBusiness {
    constructor (preprocessedData) {
        // Initialise the monkeys
        this.monkeys = [];
        for (const monkeyData of preprocessedData) {
            this.monkeys.push(new Monkey(monkeyData));
        }
        this.commonDivisor = this.monkeys.map(m => m.divisor).reduce((a, b) => a * b, 1);
    }

    iterateOverMonkeys (worryReduceable) {
        for (const monkey of this.monkeys) {

            while (monkey.hasAnItem()) {
                const thrown = monkey.processNextItem(worryReduceable, this.commonDivisor);
                this.monkeys[thrown.recipient].receiveItem(thrown.item);
            }
        }
    }

    runMonkeyBusiness (numberOfRounds, worryReduceable) {
        let round = 1;

        while (round <= numberOfRounds) {
            this.iterateOverMonkeys(worryReduceable);
            round += 1;
        }
    }

    calculateMonkeyBusiness() {
        let inspections = new Int32Array(this.monkeys.map(m => m.inspections));
        inspections = inspections.sort().slice(-2);
        return inspections[0] * inspections[1];
    }
}