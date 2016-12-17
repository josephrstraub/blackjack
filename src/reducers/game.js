const initialState = {
	isDormant: true
}

const game = (state = initialState, action) => {
	switch (action.type) {
		case 'NEW_HAND':
			return { isDormant: false }
		case 'HAND_ENDED':
			return { isDormant: true }
		default: 
			return state
	}
}

export default game