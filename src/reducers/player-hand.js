const playerHand = (state = [], action) => {
	switch(action.type) {
		case 'CARD_DEAL_PLAYER':
			return [
				...state,
				action.card
			]
		default:
			return state
	}
}

export default playerHand