const hand = (state = { cards: [], allCardsVisible: false }, action) => {
	switch (action.type) {
		case 'DEAL_CARD_TO_DEALER': return { ...state, cards: [ ...state.cards, action.card ] }
		case 'REVEAL_HIDDEN_CARD': return { ...state, allCardsVisible: true }
		case 'RESET': return { cards: [], allCardsVisible: false }
		default: return state
	}
}

const dealer = (state = {}, action) => ({
	hand: hand(state.hand, action)
})

export default dealer