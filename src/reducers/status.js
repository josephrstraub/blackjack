const status = (state = "playing", action) => {
	switch(action.type) {
		case 'WIN':
			return "won"
		case 'LOSE':
			return "lost"
		case 'PUSH':
			return "push"
		case 'CLEAR':
			return "playing"
		default:
			return state
	}
}

export default status