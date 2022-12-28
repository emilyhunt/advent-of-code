
export class Coords2DDirection {
    constructor(x, y, direction, xMax, yMax) {
        this.x = x;
        this.y = y;
        this.direction = direction;
        this.xMax = xMax;
        this.yMax = yMax;

        this.directionMapping = {};
        this.directionMapping[0] = (x, y) => [x, y - 1];  // Up
        this.directionMapping[1] = (x, y) => [x + 1, y];  // Right
        this.directionMapping[2] = (x, y) => [x, y + 1];  // Down
        this.directionMapping[3] = (x, y) => [x - 1, y];  // Left
    }

    turnRight() {
        this.direction = (this.direction + 1) % 4;
    }

    turnLeft() {
        this.direction = (this.direction + 3) % 4;  // Add so it's never negative
    }

    move() {
        [this.x, this.y] = this.directionMapping[this.direction](this.x, this.y);
        this.checkCoords();
    }

    moveBackwards() {
        [this.x, this.y] = this.directionMapping[(this.direction + 2) % 4](this.x, this.y);
        this.checkCoords();
    }

    checkCoords() {
        if (this.y > this.yMax) {
            this.y = 0;
        } 
        else if (this.y < 0) {
            this.y = this.yMax;
        }
        if (this.x > this.xMax) {
            this.x = 0;
        } 
        else if (this.x < 0) {
            this.x = this.xMax;
        }
    }

    scorePosition() {
        return 1000 * (this.y + 1) + 4 * (this.x + 1) + (this.direction + 3) % 4;
    }
}