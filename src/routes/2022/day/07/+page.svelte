<script context="module">
    // The following should be edited for every puzzle, and includes
    // metadata on this page accessible across the whole site.
    export const myMetadata = {
        title: "No Space Left On Device",
        day: "07",  // Day, as string
        year: "2022",  // Year, as string
        description: "The communication device doesn't have enough space left to install a critical update, and the "
                     + "main character of the Advent of Code doesn't know the du command... which directory can we "
                     + "delete to free up space?",
        longRuntime: false,  // Warning for if the page takes a while to run (> 1 second)
        result1: "Sum of directories smaller than threshold",  // Text to display part 1 result with
        result2: "Size of best directory to delete",  // Text to display part 2 result with
        keywords: ["objects", "recursion", "map", "arrays"],  // General keywords about the code used
        visible: true,  // Whether or not to display in menus
    };
</script>

<script>
    /****************************** Add all custom code below *****************************/

    /**
     * Handles a change directory command and returns the new directory string
     * @param {String} line - current input line
     * @param {String} currentDirectory - current directory, as a string
     */
    function handleCD(line, currentDirectory) {
        const destination = line.slice(5);

        // Return to parent dir
        if (destination === "" || destination === "/") {
            return "/";
        
        // Go up a dir
        } else if (destination === "..") {
            const parentDirectory = currentDirectory.split("/").slice(0, -1).join("/");
            
            // Fix bug if we end up back where we started - "/" directory should be returned instead of blank ""
            if (parentDirectory === "") {
                return "/";
            } else {
                return parentDirectory;
            }
        
        // Go down a dir
        } else {

            if (currentDirectory[currentDirectory.length - 1] === "/") {
                return currentDirectory + destination;
            } else {
                return currentDirectory + "/" + destination;
            }
        }
    }

    /**
     * Traverses directories, returning an object containing the file structure, with each property being a directory
     * @param {Array} terminalHistory - array of lines of terminal input
    */
    function getFileStructure(terminalHistory) {
        let currentDirectory = "/"
        let fileStructure = new Object();
        let lsMode = false;
        let lsAlreadyRan = false;
        let splitFile;

        // Cycle over every line in the terminal, inputting it into the file structure
        for (const line of terminalHistory) {
            // Cases when it's cd
            if (line.slice(0, 5) === "$ cd ") {
                currentDirectory = handleCD(line, currentDirectory);
                lsMode = false;

                // Add a blank object if necessary
                if (!fileStructure.hasOwnProperty(currentDirectory)) {
                    fileStructure[currentDirectory] = new Object();
                    fileStructure[currentDirectory].children = [];
                    fileStructure[currentDirectory].files = [];
                    fileStructure[currentDirectory].sizes = [];
                }
            
            // Enter ls mode, meaning we expect files next
            } else if (line.slice(0, 4) === "$ ls") {
                lsMode = true;

                // Check to make sure we don't add any duplicate ls if there is one, this is an extra little safety
                if (fileStructure[currentDirectory].files.length !== 0) {
                    lsAlreadyRan = true;
                } else {
                    lsAlreadyRan = false;
                }
            
            // Handle file output
            } else if (line[0] !== "$" && lsMode) {
                if (!lsAlreadyRan) {
                    splitFile = line.split(" ");

                    // Error check if incorrect number of things split
                    if (splitFile.length != 2) {
                        throw `ls output ${line} not recognised`;
                    }

                    // Add a new directory
                    if (splitFile[0] === "dir") {
                        let directoryToAdd;

                        // Handle whether or not we need to add a / in between the child and the current dir
                        if (currentDirectory !== "/") {
                            directoryToAdd = currentDirectory + "/" + splitFile[1];
                        } else {
                            directoryToAdd = currentDirectory + splitFile[1];
                        }
                        
                        // This should actually be totally unnecessary - self-referential files are impossible, as the
                        // child directory that gets added will always be ***currentDirectory*** + itself, meaning it 
                        //can't ever self-reference
                        // // Check that we didn't just create a recursion
                        // if (fileStructure.hasOwnProperty(directoryToAdd)) {
                        //     if (fileStructure[directoryToAdd].children.hasOwnProperty(currentDirectory)) {
                        //         throw "input terminal history is invalid; self-referential file structure identified. "
                        //             + `${directoryToAdd} is in ${currentDirectory} and vice-versa.`
                        //     }
                        // }

                        // Add the directory!
                        fileStructure[currentDirectory].children.push(directoryToAdd);
                        
                    // Or otherwise, add a new file
                    } else {
                        fileStructure[currentDirectory].files.push(splitFile[1]);
                        fileStructure[currentDirectory].sizes.push(Number(splitFile[0]));
                    }
                }

            } else {
                throw `Unable to process input line ${line}`
            }

        }

        return fileStructure;
    }
    
    /**
     * Preprocessor applied to all possible inputs. 
     * Should be a quick function that does useful setup steps compatible with parts 1 and 2.
     * 
     * @param {string} data - raw input from the file
     */
    function preprocessData (data) {
        data = data.split("\n")
        return data;
    };

    /**
     * Loop over all directories and get the size of their constituent files, looping over the file size array.
     * @param fileStructure
     */
    function getFileSizes(fileStructure) {
        for (const directory in fileStructure) {
            // Sum all file sizes in the dir
            fileStructure[directory].fileSize = fileStructure[directory].sizes.reduce((a, b) => a + b, 0);
        }
        return fileStructure;
    }

    /**
     * Recursively get size of this directory and all child directories.
     * WARNING: if the fileStructure is invalid, then this function will recurse forever! Object should be checked!
     * @param fileStructure
     * @param directory
     */
    function getDirectorySize(fileStructure, directory) {
        if (fileStructure[directory].hasOwnProperty("directorySize")) {
            return fileStructure[directory].directorySize;
        } else {

            let childDirectorySizes = fileStructure[directory].children.map(
                dir => getDirectorySize(fileStructure, dir)
            );
            return fileStructure[directory].fileSize + childDirectorySizes.reduce((a, b) => a + b, 0);
        }
    }

    /**
     * Adds .directorySize parameter to fileStructure object, finding directory size of all folders recursively
     * @param fileStructure
     */
    function getDirectorySizes(fileStructure) {

        // Sum size of all files in the dir
        fileStructure = getFileSizes(fileStructure)

        // Sum size of all files in dir plus files in all children dir
        for (const directory in fileStructure) {
            // Sum all file sizes in the dir
            fileStructure[directory].directorySize = getDirectorySize(fileStructure, directory)
        }
        return fileStructure;
    }

    /**
     * Takes preprocessed data as an argument and returns answer for part 1.
     * 
     * @param {any} data - generic preprocessed data, expecting the format as returned by preprocessData
     */
    function part1 (data) {
        // Get a copy of the file structure
        let fileStructure = getFileStructure(data);

        // Ensure all directories have a file size
        fileStructure = getDirectorySizes(fileStructure);

        // Loop over all directories, summing those that are smaller than a threshold value
        let sum = 0;
        const threshold = 100000;

        for (const directory in fileStructure) {
            if (fileStructure[directory].directorySize <= threshold) {
                sum += fileStructure[directory].directorySize;
            }
        }

        return sum;
    };

    /**
     * Takes preprocessed data as an argument and returns answer for part 2.
     * 
     * @param {any} data - generic preprocessed data, expecting the format as returned by preprocessData
     */
    function part2 (data) {
        // Create a copy of the data (since I don't want to mess with the original data once we get going)
        let fileStructure = getFileStructure(data);

        // Ensure all directories have a file size
        fileStructure = getDirectorySizes(fileStructure);

        // Loop over all directories, finding the one with the size closest to what we need
        let bestDirectory = "none";
        let bestDirectorySize = fileStructure["/"].directorySize + 1;
        const spaceAvailable = 70000000 - fileStructure["/"].directorySize;
        const spaceToFree = 30000000 - spaceAvailable

        for (const directory in fileStructure) {
            const directorySize = fileStructure[directory].directorySize;
            if (directorySize >= spaceToFree && directorySize < bestDirectorySize) {
                bestDirectory = directory;
                bestDirectorySize = directorySize;
            }
        }

        // Check that we even found one
        if (bestDirectory === "none") {
            throw "Unable to find a directory to remove that's large enough to satisfy the criteria!"
        }
        return bestDirectorySize;
    };

    /****************************** - - - - - - - - - - - - - *****************************/

    // Required imports - don't modify!
    import { currentDefaultData, currentExampleData } from '$lib/stores';
    import Runner from "$lib/Runner.svelte";

    // Fetch data
    import data from "./data.txt?raw";
    import exampleData from "./exampleData.txt?raw";
    currentDefaultData.set(preprocessData(data));
    currentExampleData.set(preprocessData(exampleData));

    // console.log($currentExampleData);
    // console.log($currentDefaultData);
</script>

<!-- Component that provides UI to interact with functions defined above. -->
<Runner part1={part1} part2={part2} preprocessor={preprocessData} metadata={myMetadata}/>
