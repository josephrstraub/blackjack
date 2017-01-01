const initialState = {
	roundComplete: true
}

const game = (state = initialState, action) => {
	switch (action.type) {
		case 'END_ROUND': return { ...state, roundComplete: true }
		case 'RESET': return { ...state, roundComplete: false }
		default: return state
	}
}

export default game