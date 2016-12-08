const bankroll = (state = 500, action) => {
	switch(action.type) {
		case 'NEW_GAME_MAKE':
			return 500
		case 'PLAYER_BANKROLL_CHANGE':
			return state + action.amount
		default:
			return state
	}
}

export default bankroll