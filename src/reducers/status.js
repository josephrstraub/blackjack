const status = (state = "dormant", action) => {
	switch(action.type) {
		case 'PLAYING':
			return "playing"
		case 'WIN':
			return "won"
		case 'IDLE':
			return "idle"
		case 'LOSE':
			return "lost"
		case 'PUSH':
			return "push"
		case 'CLEAR':
			return "dormant"
		default:
			return state
	}
}

export default status