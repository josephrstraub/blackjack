const dealerHand = (state = [], action) => {
	switch(action.type) {
		case 'CARD_DEAL_DEALER':
			return [
				...state,
				action.card
			]
		case 'NEW_HAND':
			return []
		default:
			return state
	}
}

export default dealerHand