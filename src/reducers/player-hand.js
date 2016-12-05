const playerHand = (state = [], action) => {
	switch(action.type) {
		case 'CARD_DEAL_PLAYER':
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

export default playerHand