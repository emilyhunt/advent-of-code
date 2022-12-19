/* Class representing a given blueprint */

import { Robot } from "./robot";


function getNextPossibleBlueprints(blueprint, blueprintsToTest, maxCosts) {
    for (const robot in blueprint.robots) {
        const needsMore = blueprint.resourcesPerTurn[robot] < maxCosts[robot] || robot === "geode";
        const couldMake = blueprint.couldCreateRobot(robot);

        if (needsMore && couldMake) {
            if (blueprint.nextRobot === undefined) {
                blueprint.nextRobot = robot;
            } else {
                const newBlueprint = blueprint.copy();
                newBlueprint.nextRobot = robot;
                blueprintsToTest.push(newBlueprint);
            }
        }
    }
}


function stepBlueprints(blueprintsToTest, maxCosts) {
    // Assign next robots
    for (const blueprint of blueprintsToTest) {
        if (blueprint.nextRobot === undefined) {
            getNextPossibleBlueprints(blueprint, blueprintsToTest, maxCosts);
        }
    }
    
    // Step every robot
    for (const blueprint of blueprintsToTest) {
        // Try and build a robot and gather resources
        if (blueprint.canCreateNextRobot()) {
            blueprint.gatherResources();
            blueprint.createNextRobot();
        } else {
            blueprint.gatherResources();
        }
    }
}


function printBlueprint(blueprint) {
    console.log(
        blueprint.step,
        "- o", blueprint.resources.ore,
        "- c", blueprint.resources.clay,
        "- o", blueprint.resources.obsidian,
        "- g", blueprint.resources.geode,
        "- os", blueprint.resourcesPerTurn.ore,
        "- cs", blueprint.resourcesPerTurn.clay,
        "- os", blueprint.resourcesPerTurn.obsidian,
        "- gs", blueprint.resourcesPerTurn.geode,
        blueprint.nextRobot,
    )

}


export function testBlueprint(blueprintString, maxSteps, maxSimultaneousBlueprints) {
    // Make a starter blueprint
    let blueprintsToTest = [Blueprint.fromString(blueprintString)];

    const maxCosts = {
        ore: 0,
        clay: 0,
        obsidian: 0,
    };
    
    for (const robot in blueprintsToTest[0].robots) {
        const cost = blueprintsToTest[0].robots[robot].cost

        for (const resource in maxCosts) {
            if (cost.hasOwnProperty(resource))
                maxCosts[resource] = Math.max(cost[resource], maxCosts[resource]);
        }
    }

    let step = 0;
    while (step < maxSteps) {
        // Step all blueprints
        stepBlueprints(blueprintsToTest, maxCosts);

        // Remove low-scorers
        if (blueprintsToTest.length > maxSimultaneousBlueprints) {
            blueprintsToTest = blueprintsToTest
                .sort((a, b) => b.resourcesPerTurn.geode - a.resourcesPerTurn.geode)
                .slice(0, maxSimultaneousBlueprints);
        }

        step += 1;
        //console.log(step, blueprintsToTest.length);
    }

    //console.log(blueprintsToTest);

    // Calculate the maximum blueprint quality and return
    return blueprintsToTest;
}


class Blueprint {
    constructor(id, step, robotPrototypes, resources, resourcesPerTurn) {
        this.id = id;
        this.step = step;
        this.robots = robotPrototypes;
        this.resources = structuredClone(resources);
        this.resourcesPerTurn = structuredClone(resourcesPerTurn);
        this.nextRobot;
    }

    static fromString(lineOfData) {
        const separated = lineOfData.split(" ");

        const id = Number(separated[1].replace(":", ""));
        const step = 0;

        const robots = {
            ore: new Robot({ore: Number(separated[6])}, "ore"),
            clay: new Robot({ore: Number(separated[12])}, "clay"),
            obsidian: new Robot({ore: Number(separated[18]), clay: Number(separated[21])}, "obsidian"),
            geode: new Robot({ore: Number(separated[27]), obsidian: Number(separated[30])}, "geode"),
        };

        const resources = {
            ore: 0,
            clay: 0,
            obsidian: 0,
            geode: 0,
        };

        // Starting robot!
        const resourcesPerTurn = structuredClone(resources);
        robots.ore.create(resourcesPerTurn);

        return new Blueprint(id, step, robots, resources, resourcesPerTurn);
    }

    canCreateNextRobot() {
        return this.canCreateRobot(this.nextRobot);
    }

    canCreateRobot(type) {
        return this.robots[type].canBuild(this.resources);
    }

    couldCreateRobot(type) {
        for (const resource in this.robots[type].cost) {
            if (this.resourcesPerTurn[resource] === 0) {
                return false;
            }
        }
        return true;
    }

    createNextRobot() {
        this.createRobot(this.nextRobot);
        this.nextRobot = undefined;
    }

    createRobot(type) {
        this.robots[type].create(this.resourcesPerTurn, this.resources);
    }

    gatherResources() {
        for (const resource in this.resourcesPerTurn) {
            this.resources[resource] += this.resourcesPerTurn[resource];
        }
        this.step += 1;
    }

    gatherResourcesUntilEnd(maxSteps) {
        const stepsRemaining = maxSteps - this.step;
        for (const resource in this.resourcesPerTurn) {
            this.resources[resource] += this.resourcesPerTurn[resource] * stepsRemaining;
        }
        this.step = maxSteps;
    }

    calculateQuality() {
        return this.id * this.resources["geode"];
    }

    copy() {
        return new Blueprint(this.id, this.step, this.robots, this.resources, this.resourcesPerTurn);
    }
}