const VALUE_MAP = {
	2: '02',
	3: '03',
	4: '04',
	5: '05',
	6: '06',
	7: '07',
	8: '08',
	9: '09',
	T: '10',
	J: '11',
	Q: '12',
	K: '13',
	A: '14'
};

const JOKER_VAUE_MAP = JSON.parse(JSON.stringify(VALUE_MAP));
JOKER_VAUE_MAP['J'] = '01';

function cardValue(card, joker) {
	if (joker === true) {
		return JOKER_VAUE_MAP[card];
	}
	return VALUE_MAP[card];
}

function cardValuesString(cards, joker) {
	return cards
		.split('')
		.map((card) => cardValue(card, joker))
		.join('');
}

function countCardsInHand(hand) {
	const handSplit = hand.split('');

	const cardCounts = [];
	for (const card in VALUE_MAP) {
		cardCounts.push(handSplit.filter((c) => c === card).length);
	}

	return cardCounts;
}

function countPairs(cardCounts) {
	return cardCounts.filter((count) => count === 2).length;
}

const HAND_VALUE_MAP = {
	five_of_a_kind: 6,
	four_of_a_kind: 5,
	full_house: 4,
	three_of_a_kind: 3,
	two_pairs: 2,
	one_pair: 1,
	high_card: 0
};

function handValue(hand, joker) {
	const cardCounts = countCardsInHand(hand);
	const maxNumberOfCards = Math.max(...cardCounts);

	let jokerCount = 0;
	if (joker === true) {
		jokerCount = cardCounts[9];
	}

	// Hard-coded cases
	// Full house
	if (maxNumberOfCards === 5) {
		return HAND_VALUE_MAP['five_of_a_kind'];
	}

	// Four of a kind
	if (maxNumberOfCards === 4) {
		if (jokerCount) {
			// 1 or 4 jokers
			return HAND_VALUE_MAP['five_of_a_kind'];
		}
		return HAND_VALUE_MAP['four_of_a_kind'];
	}

	// Full house OR three of a kind
	if (maxNumberOfCards === 3) {
		// Full house
		if (countPairs(cardCounts) === 1) {
			if (jokerCount) {
				// 2 or 3 jokers
				return HAND_VALUE_MAP['five_of_a_kind'];
			}
			return HAND_VALUE_MAP['full_house'];
		}

		// Three of a kind
		if (jokerCount) {
			// 1 or 3 jokers
			return HAND_VALUE_MAP['four_of_a_kind'];
		}
		return HAND_VALUE_MAP['three_of_a_kind'];
	}

	// Two pairs OR one pair
	if (maxNumberOfCards === 2) {
		// Two pairs
		if (countPairs(cardCounts) === 2) {
			if (jokerCount === 2) {
				return HAND_VALUE_MAP['four_of_a_kind'];
			}
			if (jokerCount === 1) {
				return HAND_VALUE_MAP['full_house'];
			}
			return HAND_VALUE_MAP['two_pairs'];
		}

		// One pair
		if (jokerCount === 1 || jokerCount === 2) {
			return HAND_VALUE_MAP['three_of_a_kind'];
		}
		return HAND_VALUE_MAP['one_pair'];
	}

	// Nothing special ("high card")
	if (maxNumberOfCards === 1) {
		if (jokerCount === 1) {
			return HAND_VALUE_MAP['one_pair'];
		}
		return HAND_VALUE_MAP['high_card'];
	}
	throw "It seems something went wrong, and your hand didn't contain cards.";
}

// function handValueString(hand) {
//     return handValue(hand).toString()
// }

export class Hand {
	constructor(handString, joker) {
		const split = handString.split(' ');
		this.cards = split[0];
		this.rank = -1;
        this.bid = Number(split[1]);

		// Pre-calculate value
		const hand = new String(handValue(this.cards, joker));
		const card = cardValuesString(this.cards, joker);
		this.value = Number(hand + card);
	}

	difference(hand) {
		return this.value - hand.value;
	}

    setRank(rank) {
        this.rank = rank;
    }

    score() {
        return this.rank * this.bid;
    }
}
