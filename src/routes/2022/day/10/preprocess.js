/**
     * Preprocessor applied to all possible inputs. 
     * Should be a quick function that does useful setup steps compatible with parts 1 and 2.
     * 
     * @param {string} data - raw input from the file
     */
 export function preprocessData (data) {
    // Simple one today. Just need to split it into lines!
    return data.trim().split("\n");
};