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
		case 'PLAYER_PERMISSIONS_DISABLE':
			return initialState
		default:
			return state
	}
}

export default player