const initialState = {
	permissions: {
		canAct: false
	}
}

const player = (state = initialState, action) => {
	switch (action.type) {
		case 'NEW_HAND':
			return {
				permissions: {
					canAct: true
				}
			}		
		case 'TERMINAL_DEAL':
			return initialState
		default:
			return state
	}
}

export default player