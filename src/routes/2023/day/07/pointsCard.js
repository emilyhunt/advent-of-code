/**
 * Stringified integer representations of the value of a card.
 */
export const CARD = {
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

const CARD_JOKER = JSON.parse(JSON.stringify(CARD));
CARD_JOKER['J'] = '01';

/**
 * Calculates the value of one card. Has a flag for if joker rules are on or not.
 */
function cardValue(card, joker) {
	if (joker === true) {
		return CARD_JOKER[card];
	}
	return CARD[card];
}

/**
 * Calculates the value of all cards in a hand, as a length-ten stringified integer.
 */
export function cardValues(cards, joker) {
	return cards
		.split('')
		.map((card) => cardValue(card, joker))
		.join('');
}
