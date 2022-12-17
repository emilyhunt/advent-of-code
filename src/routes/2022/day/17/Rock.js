/* Class to represent the coordinates of some rock object. */

import { Coords2D } from "./Coords2D";

export class Rock {
    constructor(rockString) {
        const rockStringSplit = rockString.split("\n");

        this.coords = [];

        let y = rockStringSplit.length - 1;
        for (const line of rockStringSplit) {
            // Error checking
            if (line.length !== rockStringSplit[0].length) {
                throw "Input line has different length to first line!"
            }

            // Cycle over each character in the line, adding it as a coordinate at (x,y)
            let x = 0;
            for (const character of line) {
                if (character !== ".") {
                    this.coords.push(new Coords2D(x, y));
                }
                x += 1;
            }

            // Decrement y
            y -= 1;
        }

        // Info on last move
        this.canUndoLastMove = false;
        this.lastMoveWasHorizontal = false;
        this.xChange = 0;
    }

    /**
     * Resets X coordinates to starting position for this rock.
     * @param {number?} spacingFromLeft 
     */
    setMinimumXValue(spacingFromLeft) {
        // Get current lowest X value and use this to see how much to add
        const lowestX = Math.min(...this.coords.map(coord => coord.x));
        const amountToAdd = spacingFromLeft - lowestX;
        this.addXValue(amountToAdd);
    }

    /**
     * Sets lowest Y value of any part of the rock to minimumY.
     * @param {number} minimumY 
     */
    setMinimumYValue(minimumY) {
        // Get current lowest Y value and use this to see how much to add
        const lowestY = Math.min(...this.coords.map(coord => coord.y));
        const amountToAdd = minimumY - lowestY;
        this.addYValue(amountToAdd);
    }

    reset(minimumY, minimumX) {
        if (minimumX === undefined) {
            minimumX = 2;
        }

        this.setMinimumYValue(minimumY);
        this.setMinimumXValue(minimumX);
        
        this.canUndoLastMove = false;
    }

    addXValue(value) {
        this.coords.forEach(coord => coord.x += value);
    }

    addYValue(value) {
        this.coords.forEach(coord => coord.y += value);
    }

    moveHorizontally(moveString) {
        // Process the input move string
        if (moveString === "<") {
            this.xChange = -1;
        } else if (moveString === ">") {
            this.xChange = 1;
        } else {
            throw `Horizontal move string ${moveString} not recognised!`;
        }

        // Move the rockz!
        this.addXValue(this.xChange);

        // Check that we aren't colliding with a wall
        const rockIsTouchingWall = this.coords
                .map(coords => coords.x < 0 || coords.x > 6)
                .some(x => x === true);

        if (rockIsTouchingWall) {
            this.addXValue(-this.xChange);
            return true;
        }

        // Otherwise, continue as normal
        this.canUndoLastMove = true;
        this.lastMoveWasHorizontal = true;

        return false;
    }

    moveDown() {
        this.addYValue(-1);

        // Check that we aren't colliding with the floor
        const rockIsTouchingFloor = this.coords
                .map(coords => coords.y < 0)
                .some(x => x === true);

        if (rockIsTouchingFloor) {
            this.addYValue(1);
            return true;
        }
        
        // Otherwise, continue as normal
        this.canUndoLastMove = true;
        this.lastMoveWasHorizontal = false;
        return false;
    }

    undoLastMove() {
        if (!this.canUndoLastMove) {
            throw "Unable to undo last move. There may in fact not have been a move at all!";
        }

        if (this.lastMoveWasHorizontal) {
            this.addXValue(-this.xChange);
        } else {
            this.addYValue(1);
        }

        this.canUndoLastMove = false;
    }

}