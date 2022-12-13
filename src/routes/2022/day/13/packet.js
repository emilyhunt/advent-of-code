/* Functions for processing packets */


export function parsePacketString(packetString) {
    return JSON.parse(packetString.trim());
}


function isArray(value) {
    return Array.isArray(value);
}


function compareNumbers(left, right) {
    if (left > right) {
        return 1;
    }
    if (left < right) {
        return -1;
    }
    return 0;
}


function compareLengths(leftArray, rightArray) {
    if (leftArray.length < rightArray.length) {
        return -1;
    }
    if (leftArray.length > rightArray.length) {
        return 1;
    }
    return 0;
}


/**
 * Sorting function compatible with array.Sort(). 
 * If leftPacket > rightPacket, returns 1.
 * If leftPacket === rightPacket, returns 0.
 * If leftPacket < rightPacket, returns -1.
 * @param {any} leftPacket 
 * @param {any} rightPacket 
 * @returns 
 */
export function comparePackets(leftPacket, rightPacket) {
    const leftIsArray = isArray(leftPacket);
    const rightIsArray = isArray(rightPacket);

    // Handle number comparison
    if (!leftIsArray && !rightIsArray) {
        return compareNumbers(leftPacket, rightPacket);
    }

    // Handle mixed types
    if (leftIsArray && !rightIsArray) {
        rightPacket = [rightPacket];
    } else if (rightIsArray && !leftIsArray) {
        leftPacket = [leftPacket];
    }

    // Cycle over all values, comparing!
    const minimumLength = Math.min(leftPacket.length, rightPacket.length);
    for (let i = 0; i < minimumLength; i++) {
        const comparison = comparePackets(leftPacket[i], rightPacket[i]);
        if (comparison !== 0) {
            return comparison;
        }
    }

    // If no decisive comparison so far, then let's compare length
    return compareLengths(leftPacket, rightPacket);
}


export function checkPackets(packets) {

    // Loop over all packets, processing them!
    const packetsInRightOrder = [];

    for (let i = 0; i < packets.length; i++) {
        const leftPacket = parsePacketString(packets[i][0]);
        const rightPacket = parsePacketString(packets[i][1]);

        // If the packets are in the right order, 
        if (comparePackets(leftPacket, rightPacket) < 0) {
            packetsInRightOrder.push(i + 1);
        }
    }

    return packetsInRightOrder;
}