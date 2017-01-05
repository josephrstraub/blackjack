import { getScore } from './index'

const cards1 = [
	{ name: "6", value: 6, suit: "hearts" },
	{ name: "ace", value: 11, suit: "diamonds" },
	{ name: "6", value: 6, suit: "spades" }
]
const cards2 = [
	{ name: "4", value: 4, suit: "hearts" },
	{ name: "ace", value: 11, suit: "spades" },
	{ name: "ace", value: 11, suit: "hearts" },
	{ name: "king", value: 10, suit: "spades" }
]

describe('selectors', () => {
	it('should return 13', () => {
		expect(getScore(cards1)).toEqual(13)
	})
	it('should return 17', () => {
		expect(getScore(cards1.slice(0, 2))).toEqual(17)
	})	
	it('should return 16', () => {
		expect(getScore(cards2)).toEqual(16)
	})
})