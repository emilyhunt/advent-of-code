import { CARD } from './pointsCard';

/**
 * Creates an array of counts of how many cards there are of each type.
 */
function countCardsInHand(hand) {
	const handSplit = hand.split('');

	const cardCounts = [];
	for (const card in CARD) {
		cardCounts.push(handSplit.filter((c) => c === card).length);
	}

	return cardCounts;
}

/**
 * Counts the number of pairs in a hand.
 */
function countPairs(cardCounts) {
	return cardCounts.filter((count) => count === 2).length;
}

/**
 * Calculates statistics about a hand.
 */
function handStatistics(hand, joker) {
	const cardCounts = countCardsInHand(hand);
	const maxCardCount = Math.max(...cardCounts);
	const pairs = countPairs(cardCounts);

	let jokerCount = 0;
	if (joker === true) {
		jokerCount = cardCounts[9];
	}
	return { maxCardCount: maxCardCount, pairs: pairs, jokerCount: jokerCount };
}

/**
 * Integer representations of the value of a hand.
 */
const HAND = {
	FiveOfAKind: 6,
	FourOfAKind: 5,
	FullHouse: 4,
	ThreeOfAKind: 3,
	TwoPairs: 2,
	OnePair: 1,
	HighCard: 0
};

function pointsFiveOfAKind(jokerCount) {
	return HAND['FiveOfAKind'];
}

function pointsFourOfAKind(jokerCount) {
	// We can have 1 or 4 jokers; both of which allow us to change to five of a kind.
	if (jokerCount) {
		return HAND['FiveOfAKind'];
	}
	return HAND['FourOfAKind'];
}

function pointsFullHouse(jokerCount) {
	// We can have 2 or 3 jokers; both of which change us to be a five of a kind.
	if (jokerCount) {
		return HAND['FiveOfAKind'];
	}
	return HAND['FullHouse'];
}

function pointsThreeOfAKind(jokerCount) {
	// We can have 1 or 3 jokers; both of which change us to be a four of a kind.
	if (jokerCount) {
		return HAND['FourOfAKind'];
	}
	return HAND['ThreeOfAKind'];
}

function pointsTwoPairs(jokerCount) {
	// We can have 1 or 2 jokers, giving us a four of a kind or a full house.
	if (jokerCount === 2) {
		return HAND['FourOfAKind']; // Change a pair into the other pair
	}
	if (jokerCount === 1) {
		return HAND['FullHouse']; // Change the lone joker into one of the pairs
	}
	return HAND['TwoPairs'];
}

function pointsOnePair(jokerCount) {
	// We can have 1 or 2 jokers; both of which change us to be a three of a kind.
	if (jokerCount) {
		return HAND['ThreeOfAKind'];
	}
	return HAND['OnePair'];
}

function pointsHighCard(jokerCount) {
	// We can have 1 joker; which allows us to make a pair.
	if (jokerCount) {
		return HAND['OnePair'];
	}
	return HAND['HighCard'];
}

/**
 * Calculates the point value of a hand based on three statistics about it.
 */
function points(maxCardCount, pairs, jokerCount) {
    // Every case is hard-coded, including the interaction with jokers. I couldn't think
    // of a nicer way to do it that would also be quick... maybe there is one, though!
	if (maxCardCount === 5) {
		return pointsFiveOfAKind(jokerCount);
	}
	if (maxCardCount === 4) {
		return pointsFourOfAKind(jokerCount);
	}
	if (maxCardCount === 3) {
		if (pairs === 1) {
			return pointsFullHouse(jokerCount);
		}
		return pointsThreeOfAKind(jokerCount);
	}
	if (maxCardCount === 2) {
		if (pairs === 2) {
			return pointsTwoPairs(jokerCount);
		}
		return pointsOnePair(jokerCount);
	}
	if (maxCardCount === 1) {
		return pointsHighCard(jokerCount);
	}
	throw "It seems something went wrong, and your hand didn't contain cards.";
}

/**
 * Calculates the value of a hand as a stringified integer.
 */
export function handValue(hand, joker) {
	const { maxCardCount, pairs, jokerCount } = handStatistics(hand, joker);
	return new String(points(maxCardCount, pairs, jokerCount));
}
