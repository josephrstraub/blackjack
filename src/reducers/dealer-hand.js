const dealerHand = (state = [], action) => {
	switch(action.type) {
		case 'CARD_DEAL_DEALER':
			return [
				...state,
				action.card
			]
		default:
			return state
	}
}

export default dealerHand