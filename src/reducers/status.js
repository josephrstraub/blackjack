const status = (state = "playing", action) => {
	switch(action.type) {
		case 'WIN':
			return "won"
		case 'LOSE':
			return "lost"
		default:
			return state
	}
}

export default status