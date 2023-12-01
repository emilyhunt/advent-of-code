export class Map3D {
    constructor(preprocessedData) {

        // Get the base map as a 2D array of numbers, representing every thing
        const mapping = {};
        mapping["."] = 0;
        mapping["#"] = 1;
        mapping[" "] = 2;
    
        this.net = preprocessedData.map
            .split("\n")
            .map(line => line.split("")
                .map(value => mapping[value])
            );

        // Calculate the side length of the faces, should be the sqrt of the size of the map
        const totalCubePoints = this.net
            .map(line => line.reduce(
                (partialSum, value) => value !== 0 ? partialSum + 1 : partialSum, 0))
            .reduce((partialSum, value) => partialSum + value, 0);
        this.sideLength = Math.sqrt(totalCubePoints / 6);

        // Throw an error if the side length isn't an integer (would mean something has gone wrong)
        if (this.sideLength % 1 !== 0) {
            throw "Calculated cube side length is not a whole number! Is there an issue with the map?";
        }

        // Various other things we won't need for now
        this.map = undefined;
        this.faces = {};
    }

    /**
     * Calculates the origin of every face
     */
    assignFaces() {

    }

    build() {
        // Start in the top left
        const faceOriginY = 0;
        const faceOriginX = Math.min(
            this.net[faceOriginY].indexOf(0), this.net[faceOriginY].indexOf(1)
        );

        let faceX = faceOriginX;
        let faceY = faceOriginY;
    }
}