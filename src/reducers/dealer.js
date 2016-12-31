const hand = (state = { cards: [] }, action) => {
	switch (action.type) {
		case 'DEAL_CARD_TO_DEALER': return { ...state, cards: [ ...state.cards, action.card ] }
		case 'DEALER_BLACKJACK':
		case 'DEALER_BUST': return { ...state, isComplete: true }
		default: return state
	}
}

const dealer = (state = {}, action) => ({
	hand: hand(state.hand, action)
})

export default dealer