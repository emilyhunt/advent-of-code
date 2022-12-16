/* Convenience class for working with valves. */

export class Valve {
    constructor(valveString) {
        // Get name and names of neighbors
        const valveStringSplit = valveString
            .replace(";", "")
            .replace("=", " ")
            .trim()
            .split(" ");
        
        this.name = valveStringSplit[1];
        this.flowRate = Number(valveStringSplit[5]);
        this.neighbors = valveStringSplit.slice(10).map(x => x.replace(",", ""));
        this.hasNonzeroFlow = this.flowRate !== 0;
    }

    eventualPressureRelease(currentTime) {
        const remainingTime = 30 - currentTime - 1;

        if (remainingTime < 0) {
            throw "Negative remaining time was calculated";
        }

        return this.flowRate * remainingTime;
    }
    
}
