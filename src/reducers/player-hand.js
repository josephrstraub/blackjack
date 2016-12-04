const playerHand = (state = [], action) => {
	switch(action.type) {
		case 'CARD_DEAL':
			return [
				...state,
				action.card
			]
		default:
			return state
	}
}

export default playerHand