const initialState = {
	contents: [],
	isFullyVisible: false
}

const dealerHand = (state = initialState, action) => {
	switch(action.type) {
		case 'NEW_GAME_MAKE':
			return initialState
		case 'CARD_DEAL_DEALER':
			return {
				...state,
				contents: [ ...state.contents, action.card ]
			}
		case 'CLEAR':
			return initialState
		case 'HIDDEN_CARD_REVEAL':
			return {
				...state,
				isFullyVisible: true
			}
		default:
			return state
	}
}

export default dealerHand