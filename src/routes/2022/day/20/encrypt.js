/* Functions for encrypting and decrypting grove coordinates. */


export function getGroveCoordinates(array) {
    const length = array.length;
    const indexZero = array.indexOf(0);
    return [
        array[(indexZero + 1000) % length],
        array[(indexZero + 2000) % length],
        array[(indexZero + 3000) % length],
    ];
}


/**
 * https://stackoverflow.com/questions/7376598/in-javascript-how-do-i-check-if-an-array-has-duplicate-values
 * @param {*} array 
 * @returns 
 */
function hasDuplicates(array) {
    return (new Set(array)).size !== array.length; 
}


/**
 * https://stackoverflow.com/a/32122760/12709989
 * @param {*} array 
 * @returns 
 */
function getDuplicates(array) {
    return array.filter((e, i, a) => a.indexOf(e) !== i);
}


function markDuplicates(array) {
    const duplicates = getDuplicates(array);

    for (const duplicate of duplicates) {
        let index = array.indexOf(duplicate);
        let count = 0;

        while (index !== -1) {
            array[index] = `${duplicate}.${count}`;
            index = array.indexOf(duplicate);
            count += 1;
        }
    }

    return array;
}


function isString(value) {
    return typeof value === 'string' || value instanceof String;
}


function getValueFromString(value) {
    if (isString(value)) {
        return Number(value.split(".")[0]);
    }
    return value;
}


function unmarkDuplicates(array) {
    return array.map(x => getValueFromString(x));
}


function getIndices(valueToMove, decryptedArray) {
    // Get current and new indices
    const length = decryptedArray.length;
    const currentIndex = decryptedArray.indexOf(valueToMove);

    let newIndex = (currentIndex + getValueFromString(valueToMove)) % (length - 1);

    return [currentIndex, newIndex];

}


function mixArray(encryptedArray, decryptedArray) {
    for (const valueToMove of encryptedArray) {
        const [currentIndex, newIndex] = getIndices(valueToMove, decryptedArray);
        decryptedArray.splice(currentIndex, 1); // Deletes value
        decryptedArray.splice(newIndex, 0, valueToMove);
    }
}


export function decryptArray(originalArray, decryptionKey, timesToMix) {

    if (decryptionKey === undefined) {
        decryptionKey = 1;
    }
    if (timesToMix === undefined) {
        timesToMix = 1;
    }

    // Handle duplicates and array copying
    let encryptedArray = originalArray.map(x => x * decryptionKey);
    encryptedArray = markDuplicates(encryptedArray);
    let decryptedArray = [...encryptedArray];

    // Cycle over all values in the order they appear in in originalArray and move them in decryptedArray (our new copy)
    for (let i = 0; i < timesToMix; i++) {
        mixArray(encryptedArray, decryptedArray);
    }

    decryptedArray = unmarkDuplicates(decryptedArray);
    return decryptedArray;
}
