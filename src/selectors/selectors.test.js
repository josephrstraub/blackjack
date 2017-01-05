import { getScore } from './index'

const cards = [
	{ name: "6", value: 6, suit: "hearts" },
	{ name: "ace", value: 11, suit: "diamonds" },
	{ name: "6", value: 6, suit: "spades" }
]

describe('selectors', () => {
	it('should return 13', () => {
		expect(getScore(cards)).toEqual(13)
	})
	it('should return 17', () => {
		expect(getScore(cards.slice(0, 2))).toEqual(17)
	})
})