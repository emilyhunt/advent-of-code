import { handValue } from './pointsHand';
import { cardValues } from './pointsCard';

function completeValueAsInteger(hand, joker) {
	return Number(handValue(hand, joker) + cardValues(hand, joker));
}

export class Hand {
	constructor(handString, joker) {
		const split = handString.split(' ');
		this.rank = -1;
		this.bid = Number(split[1]);
		this.value = completeValueAsInteger(split[0], joker);
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
