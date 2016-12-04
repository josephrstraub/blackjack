const playerHand = (state = [], action) => {
	switch(action.type) {
		case 'CARD_DEAL_PLAYER':
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

export default playerHand