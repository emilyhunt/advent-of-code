import { Screen } from "./part1"

/**
 * Takes preprocessed data as an argument and returns answer for part 2.
 * 
 * @param {any} data - generic preprocessed data, expecting the format as returned by preprocessData
 */
 export function part2 (data) {
    const screen = new Screen(data);
    screen.processInputs();
    return screen.render();
};