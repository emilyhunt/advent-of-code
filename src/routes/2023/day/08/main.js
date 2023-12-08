/* Primary functions for solving the puzzle live here. */

/**
 * Preprocessor applied to all possible inputs. 
 * Should be a quick function that does useful setup steps compatible with parts 1 and 2.
 * @param {string} data raw input from the file
 * @returns {any} data, preprocessed into something useful!
 */
export function preprocessData (data) {
    const split = data.trim().split("\n\n");
    const mapping = {"L": 0, "R": 1};
    const allDirections = split[0].split("").map((c) => mapping[c]);
    let allNodes = split[1].replaceAll("(", "").replaceAll(")", "").split("\n").map((row) => row.split(" = "));
    const allNodesObject = {};
    for (const row of allNodes) {
        allNodesObject[row[0]] = row[1].split(", ")
    }
    return {directions: allDirections, nodes: allNodesObject}
};

/**
 * Takes preprocessed data as an argument and returns answer for part 1.
 * @param {any} preprocessedData generic preprocessed data, expecting the format as returned by preprocessData
 * @returns {any} result of part 1
 */
export function part1 (preprocessedData) {
    const totalDirections = preprocessedData.directions.length;
    let steps = 0;
    let node = "AAA";
    do {
        node = preprocessedData.nodes[node][preprocessedData.directions[steps % totalDirections]];
        steps++;
    } while (node !== "ZZZ")
    return steps;
};

/**
 * Takes preprocessed data as an argument and returns answer for part 2.
 * @param {any} preprocessedData generic preprocessed data, expecting the format as returned by preprocessData
 * @returns {any} result of part 2!
 */
export function part2 (preprocessedData) {
    let nodes = Object.keys(preprocessedData.nodes).filter(key => key.endsWith("A"));
    const totalDirections = preprocessedData.directions.length;
    console.log(nodes)
    let steps = 0;
    do {
        nodes = nodes.map(node => preprocessedData.nodes[node][preprocessedData.directions[steps % totalDirections]]);
        steps++;
    } while (!nodes.every(node => node.endsWith("Z")))
    return steps;
};