<script context="module">
    import * as _info from "./_info.json";
    export const myMetadata = _info;
</script>

<script>
    /****************************** Add all custom code below *****************************/
    
    /**
     * Preprocessor applied to all possible inputs. 
     * Should be a quick function that does useful setup steps compatible with parts 1 and 2.
     * 
     * @param {string} data - raw input from the file
     */
    function preprocessData (data) {
        // Remove any line breaks that have somehow gotten in
        data = data.split("\n").join("");

        return data;
    };

    /**
     * Initialises a set from a string of values, adding each character individually.
     * @param string - the string of values to make a set of characters from
     */
    function createSetFromString(string) {
        const set = new Set();

        for (let i = 0; i < string.length; i++){
            set.add(string[i]);
        }

        return set;
    }

    /**
     * Finds a buffer in a datastream by identifying four unique characters.
     * @param {string} data - the datastream string
     * @param {number} characterCount - size of buffer to search for
     */
    function findBuffer(data, characterCount) {
        // Cycle over the datastream in chunks, making sets and seeing if any sets have the size of characterCount
        let set;
        let i = characterCount + 1;  // Start at first possible value where string large enough

        while (i < data.length) {
            set = createSetFromString(data.slice(i - characterCount, i));

            // Decide how much we need to jump along the string by the size of the set.
            // E.g. if we need 20 unique characters but have only 8 in the current set, then the first possible location
            // where we could find enough characters is 20-8=12 values away; hence, we inc i by 12.
            if (set.size === characterCount) {
                return i;
            } else {
                i += characterCount - set.size;
            }
        }
    }

    /**
     * Takes preprocessed data as an argument and returns answer for part 1.
     * @param {any} data - generic preprocessed data, expecting the format as returned by preprocessData
     */
    function part1 (data) {
        return findBuffer(data, 4);
    };

    /**
     * Takes preprocessed data as an argument and returns answer for part 2.
     * @param {any} data - generic preprocessed data, expecting the format as returned by preprocessData
     */
    function part2 (data) {
        return findBuffer(data, 14);
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

    //console.log($currentExampleData);
    // console.log($currentDefaultData);
</script>

<!-- Component that provides UI to interact with functions defined above. -->
<Runner part1={part1} part2={part2} preprocessor={preprocessData} metadata={myMetadata}/>
