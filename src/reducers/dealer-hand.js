const dealerHand = (state = [], action) => {
	switch(action.type) {
		case 'NEW_GAME_MAKE':
			return []
		case 'CARD_DEAL_DEALER':
			return [
				...state,
				action.card
			]
		case 'CLEAR':
			return []
		default:
			return state
	}
}

export default dealerHand