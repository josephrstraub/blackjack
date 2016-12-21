import player from './player'

const state = {
	bankroll: 500,
	baseWager: 100,
	hands: [{ 
		createdAt: Date.now(),
		cards: [{name: "8", suit: "clubs", value: 8}, {name: "8", suit: "hearts", value: 8}],
		isComplete: false,
		wager: { isDouble: false, paymentIsSettled: false } 
	}]
}

describe('player reducer', () => {
	it('should return initial state', () => {
		expect(
			player(undefined, {})
		).toEqual({
			bankroll: 500,
			baseWager: 100,
			hands: [{ 
				createdAt: expect.any(Number),
				cards: [],
				isComplete: false,
				wager: { isDouble: false, paymentIsSettled: false } 
			}]
		})
	})	
	it('should split properly', () => {
		expect(
			player(state, {type: 'SPLIT', index: 0})
		).toEqual({
			bankroll: 500,
			baseWager: 100,
			hands: [{ 
				createdAt: expect.any(Number),
				cards: [{name: "8", suit: "clubs", value: 8}],
				isComplete: false,
				wager: { isDouble: false, paymentIsSettled: false } 
			},
			{ 
				createdAt: expect.any(Number),
				cards: [{name: "8", suit: "heaarts", value: 8}],
				isComplete: false,
				wager: { isDouble: false, paymentIsSettled: false } 
			}]
		})
	})
})