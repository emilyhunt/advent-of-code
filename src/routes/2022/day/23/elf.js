import { coordinateToString, stringToCoordinate } from "./elfshelf";

export class Elf  {
    constructor(id, x, y) {
        this.id = id;
        this.x = x;
        this.y = y;
        this.canMove = false;
        this.currentLocation = coordinateToString(x, y);
        this.newLocation = "";
    }

    moveToNewLocation() {
        [this.x, this.y] = stringToCoordinate(this.newLocation);
        this.currentLocation = this.newLocation;
    }
}