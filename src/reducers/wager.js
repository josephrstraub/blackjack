const wager = (state = 100, action) => {
	switch(action.type) {
		case 'NEW_GAME_MAKE':
			return 100
		case 'WAGER_SIZE_CHANGE':
			return action.size
		default:
			return state
	}
}

export default wager