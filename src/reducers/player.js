const wager = (state = { isDouble: false, paymentIsSettled: false }, action) => {
	return state
}

const hand = (state = { createdAt: Date.now(), cards: [], isComplete: false, wager: wager(undefined, {}) }, action) => {
	switch (action.type) {
		case 'DEAL_CARD':
			return { ...state, cards: [...state.cards, action.card] }
		case 'SPLIT':
			return { ...state, cards: [ action.card || state.cards[0] ] }
		default: return state
	}
}

const hands = (state = [ hand(undefined, {}) ], action) => {
	switch (action.type) {
		case 'DEAL_CARD':
			return [
				...state.slice(0, action.index),
				hand(state[action.index], action),
				...state.slice(action.index + 1)
			]
		case 'SPLIT':
			return [
				...state.slice(0, action.index),
				hand(state[action.index], action),
				hand(undefined, { ...action, card: state[action.index].cards[1] }),
				...state.slice(action.index + 1)
			]
		default: return state
	}
}

const player = (state = {}, action) => ({
	bankroll: state.bankroll || 500,
	baseWager: state.baseWager || 100,
	hands: hands(state.hands, action)
})

export default player