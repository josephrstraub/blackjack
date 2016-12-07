const wager = (state = 100, action) => {
	switch(action.type) {
		case 'WAGER_SIZE_CHANGE':
			return action.size
		default:
			return state
	}
}