<script context="module">
    import * as _info from "./_info.json";
    export const myMetadata = _info;
</script>

<script>
    import { currentDefaultData, currentExampleData } from '$lib/stores';
    import Runner from "$lib/Runner.svelte";
    
    /****************************** ADD CODE HERE!!!! *****************************/
    // Preprocessor applied to all data. E.g.: you may want an array without 
    function preprocessData (data) {
        // Split into separate rucksacks (lines) and cut strings in half, so we get an array of length-2 arrays
        data = data.split("\n");
        return data;
    };

    function getPriority(character) {
        const asciiCode = character.charCodeAt(0);

        if (asciiCode >= 97 && asciiCode <= 122) {
            return asciiCode - 96;
        } else if (asciiCode >= 65 && asciiCode <= 90) {
            return asciiCode - 65 + 27;
        } else {
            throw `Character ${character} outside of valid range`;
        }
    }

    function getItemPriorities(charactersArray) {
        // We convert the character to its ASCII code
        // see https://stackoverflow.com/questions/94037/convert-character-to-ascii-code-in-javascript
        let prioritySum = 0;
        
        for (const char of charactersArray) {
            prioritySum += getPriority(char);
        }

        return prioritySum;
    }

    function getIdenticalCharacter(string1, string2) {
        
        for (let i = 0; i < string1.length; i++) {
            if (string2.includes(string1[i])) {
                return string1[i];
            }
        }

        throw `No matching character was found for strings ${string1} ${string2}`
    }

    function part1 (data) {
        // Split strings into halves
        data = data.map(x => [x.slice(0, x.length / 2), x.slice(x.length / 2)]);

        // Loop over all rucksacks and get the duplicated strings
        let duplicatedItems = data.map(subarray => getIdenticalCharacter(subarray[0], subarray[1]));

        // Return total item priorities
        return getItemPriorities(duplicatedItems);
    };

    function getCommonCharacter (string1, string2, string3) {
        // Check all characters in string1 against string2 and string3, returning first one that's
        // in all three of them
        for (let i = 0; i < string1.length; i++) {
            if (string2.includes(string1[i]) && string3.includes(string1[i])) {
                return string1[i];
            }
        }

        throw `No matching character was found for strings ${string1} ${string2} ${string3}`;
    }

    function part2 (data) {
        // Cycle over every group of three Elves/lines, getting the only character unique between all three
        let groupBadges = [];

        for (let i = 0; i < data.length; i += 3) {
            groupBadges.push(getCommonCharacter(data[i], data[i + 1], data[i + 2]));
        }

        // Return total item priorities
        return getItemPriorities(groupBadges);
    };

    /******************************                   *****************************/

    // Fetch data
    import data from "./data.txt?raw";
    import exampleData from "./exampleData.txt?raw";
    currentDefaultData.set(preprocessData(data));
    currentExampleData.set(preprocessData(exampleData));

</script>

<Runner part1={part1} part2={part2} preprocessor={preprocessData} metadata={myMetadata}/>
