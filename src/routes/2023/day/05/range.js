export class Range {
	constructor(id, start, end, destination) {
		this.id = id;
		this.start = start;
		this.end = end;
		this.destination = destination;
	}

	apply(value) {
		return value - this.start + this.destination;
	}

	applyRange(low, high) {
		return [this.apply(low), this.apply(high)];
	}

	contains(value) {
		return value >= this.start && value < this.end;
	}

	is(range) {
		return this.id === range.id;
	}
}

export const passThroughRange = new Range(-1, 0, 0, 0);
