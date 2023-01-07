import { Coords2DDirection } from "./coords";


export function createMap(preprocessedData) {

    // Change string values to ints (easier comparisons maybe)
    const mapping = {};
    mapping["."] = 0;
    mapping["#"] = 1;
    mapping[" "] = 2;

    let map = preprocessedData.map
        .split("\n")
        .map(line => line.split("")
            .map(value => mapping[value])
        );

    // Fill the end of arrays up so they all have the same length
    let maxLength = Math.max(...map.map(x => x.length));
    map = map.map(x => x.concat(Array(maxLength - x.length).fill(2)));

    return map;
}


function createMap3D () {}


function processMove(moves, indexStart, position, map) {
    // Get first index of a left or a right, meaning we can get how far to go
    const firstLeft = moves.indexOf("L", indexStart);
    const firstRight = moves.indexOf("R", indexStart);

    let indexEnd;
    if (firstLeft === -1 && firstRight === -1) {
        indexEnd = moves.length;
    } else if (firstLeft === -1) {
        indexEnd = firstRight;
    } else if (firstRight === -1) {
        indexEnd = firstLeft;
    } else {
        indexEnd = Math.min(firstLeft, firstRight);
    }

    // Get a number out
    const distanceToMove = Number(moves.slice(indexStart, indexEnd));
    // console.log(distanceToMove);

    // Try to move this many times
    let distanceTravelled = 0;
    while (distanceTravelled < distanceToMove) {
        const xStart = position.x;
        const yStart = position.y;

        position.move();

        let mapValue = map[position.y][position.x];

        // Go backwards & stop if we hit a wall
        if (mapValue === 1) {
            position.moveBackwards();
            break;
        }
        // OR, we need to traverse the void
        else if (mapValue === 2) {
            while (mapValue === 2) {
                position.move();
                mapValue = map[position.y][position.x];
            }

            // Check again. If there's a wall on the other side then we return to original pos
            // and can stop
            if (mapValue === 1) {
                position.x = xStart;
                position.y = yStart;
                break;
            }
        }
        // Code at this point has moved successfully
        distanceTravelled += 1;

        // console.log(distanceTravelled, position.x, position.y, position.direction);
    }

    return indexEnd;
}


export function traverseMap(preprocessedData) {
    // Initialisation steps
    const map = createMap(preprocessedData);
    const moves = preprocessedData.moves.trim();
    const startingX = map[0].indexOf(0);
    const startingY = 0;
    const startingDirection = 1;

    const position = new Coords2DDirection(
        startingX, startingY, startingDirection, map[0].length - 1, map.length - 1);
    
    // console.log("start:", position.x, position.y, position.direction);

    // Process moves
    let i = 0;
    while (i < moves.length) {
        if (moves[i] === "R") {
            position.turnRight();
            i += 1;
            // console.log("R");
        } else if (moves[i] === "L") {
            position.turnLeft();
            i += 1;
            // console.log("L");
        } else {
            i = processMove(moves, i, position, map);
        }
        // console.log("position:", position.x, position.y, position.direction);
    }

    // Get final pos details and return
    return position.scorePosition();
}