const autoDeal = (state = false, action) => {
	switch(action.type) {
		case 'AUTO_DEAL_TOGGLE':
			return !state
		default:
			return state
	}
}

export default autoDeal