
const SNAFU_DECIMAL_MAPPING = {};
SNAFU_DECIMAL_MAPPING["2"] = 2;
SNAFU_DECIMAL_MAPPING["1"] = 1;
SNAFU_DECIMAL_MAPPING["0"] = 0;
SNAFU_DECIMAL_MAPPING["-"] = -1;
SNAFU_DECIMAL_MAPPING["="] = -2;

const DECIMAL_SNAFU_MAPPING = {};
DECIMAL_SNAFU_MAPPING[4] = "2";
DECIMAL_SNAFU_MAPPING[3] = "1";
DECIMAL_SNAFU_MAPPING[2] = "0";
DECIMAL_SNAFU_MAPPING[1] = "-";
DECIMAL_SNAFU_MAPPING[0] = "=";


/**
 * Convert a SNAFU number (the Elf representation of a balanced base 5 / quinary system) to a decimal (base 10) one.
 * @param {string} value a SNAFU number
 * @returns {number} the decimal (base 10) number representing value
 */
export function SNAFUToDecimal(value) {
    let decimalValue = 0;
    let currentMultiplier = 1;

    for (const character of value.split("").reverse()) {
        decimalValue += currentMultiplier * SNAFU_DECIMAL_MAPPING[character];
        currentMultiplier *= 5;
    }

    return decimalValue;
}


/**
 * Convert a decimal (base 10) number to SNAFU (the Elf representation of a balanced base 5 / quinary system).
 * @param {number} value a decimal (base 10) number
 * @returns {string} the SNAFU number representing value
 */
export function decimalToSNAFU(value) {
    // See e.g.: https://www.cuemath.com/numbers/decimal-to-binary/ for info on least sig bit conversion
    let quotient = value;
    let remainder;
    const remainders = [];

    while (quotient > 0) {
        remainder = (quotient + 2) % 5;
        quotient = Math.floor((quotient + 2) / 5);
        remainders.push(remainder);
    }

    return remainders.reverse().map(x => DECIMAL_SNAFU_MAPPING[x]).join("");
}