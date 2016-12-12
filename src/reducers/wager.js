const initialState = {
	size: 100,
	isDouble: false
}

const wager = (state = initialState, action) => {
	switch(action.type) {
		case 'DOUBLE_DOWN':
			return {
				size: state.size * 2,
				isDouble: true
			}		
		case 'RESET_DOUBLE':
			return {
				size: state.size / 2,
				isDouble: false
			}
		case 'NEW_GAME_MAKE':
			return initialState
		case 'WAGER_SIZE_CHANGE':
			return {
				...state,
				size: action.size
			}
		default:
			return state
	}
}

export default wager