const playerHand = (state = [], action) => {
	switch(action.type) {
		case 'NEW_GAME_MAKE':
			return []
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