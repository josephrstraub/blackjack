
const wager = (state = { isDouble: false, paymentIsSettled: false }, action) => {
	switch (action.type) {
		case 'BLACKJACK':
		case 'BUST': return { ...state, paymentIsSettled: true }
		case 'DOUBLE_DOWN': return { ...state, isDouble: true }
		default: return state
	}
}

const hand = (state = { createdAt: Date.now(), cards: [], isComplete: false, wager: wager(undefined, {}) }, action) => {
	switch (action.type) {
		case 'DEAL_CARD_TO_PLAYER': return { ...state, cards: [ ...state.cards, action.card ] }
		case 'BLACKJACK':
		case 'BUST': return { ...state, isComplete: true, wager: wager(state.wager, action) }
		case 'DOUBLE_DOWN': return { ...state, wager: wager(state.wager, action) }
		case 'SPLIT': return { ...state, cards: [ action.card || state.cards[0] ] }
		case 'STAND': return { ...state, isComplete: true }
		case 'END_ROUND': return { ...state, wager: wager(undefined, {}) }
		default: return state
	}
}

const hands = (state = [ hand(undefined, {}) ], action) => {
	switch (action.type) {
		case 'DEAL_CARD_TO_PLAYER':
		case 'BLACKJACK':
		case 'BUST':
		case 'DOUBLE_DOWN':
		case 'STAND':
			return [ ...state.slice(0, action.index), hand(state[action.index], action), ...state.slice(action.index + 1) ]
		case 'SPLIT':
			return [
				...state.slice(0, action.index),
				hand(state[action.index], action),
				hand(undefined, { ...action, card: state[action.index].cards[1] }),
				...state.slice(action.index + 1)
			]
		case 'RESET': 
		case 'NEW_GAME': return [ hand(undefined, {}) ]
		case 'END_ROUND': return state.map(h => hand(h, action))
		default: return state
	}
}

const bankroll = (state = 500, action) => {
	switch (action.type) {
		case 'BLACKJACK': return state + action.amount
		case 'BUST': return state - action.amount
		case 'CHANGE_PLAYER_BANKROLL': return state + action.amount
		case 'NEW_GAME': return 500
		default: return state
	}
}

const baseWager = (state = 100, action) => {
	switch (action.type) {
		case 'CHANGE_WAGER_SIZE': return action.size
		case 'NEW_GAME': return 100
		default: return state
	}
}

const player = (state = {}, action) => ({
	bankroll: bankroll(state.bankroll, action),
	baseWager: baseWager(state.baseWager, action),
	hands: hands(state.hands, action)
})

export default player