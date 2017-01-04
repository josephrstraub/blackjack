const initialState = {
	roundComplete: true,
	autoDeal: false
}

const game = (state = initialState, action) => {
	switch (action.type) {
		case 'AUTO_DEAL_TOGGLE': return { ...state, autoDeal: !state.autoDeal }
		case 'END_ROUND': return { ...state, roundComplete: true }
		case 'RESET': return { ...state, roundComplete: false }
		default: return state
	}
}

export default game