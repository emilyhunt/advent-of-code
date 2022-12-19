/* Class for representation of robots and various methods attached to them */

export class Robot {
    constructor(cost, resourceMined) {
        this.cost = cost;
        this.type = resourceMined;
    }

    /**
     * Returns true if can be built from current resources, else false
     * @param {*} currentResources 
     */
    canBuild(currentResources) {
        for (const resource in this.cost) {
            if (currentResources[resource] < this.cost[resource]) {
                return false;
            }
        }
        return true;
    }

    /**
     * Returns a new Robot identical to this one. Subtracts from the amount of currently available resources.
     * @param {object?} currentResources 
     * @returns 
     */
    create(resourcesPerTurn, currentResources) {
        if (currentResources !== undefined) {
            for (const resource in this.cost) {
                currentResources[resource] -= this.cost[resource];
            }
        }
        resourcesPerTurn[this.type] += 1;
    }

    getResource() {
        return this.type;
    }
}