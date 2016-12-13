import _ from 'lodash'

const wager = (state = {}, action) => {
	switch(action.type) {
		case 'DOUBLE_DOWN':
			if (state.id === action.id) {
				return {
					...state,
					size: state.size * 2,
					isDouble: true
				}
			}	
			return state	
		case 'NEW_HAND':
			return {
				id: 1,
				size: state.isDouble ? state.size / 2 : state.size,
				isDouble: false,

			}
		case 'WAGER_SIZE_CHANGE':
			if (state.id === action.id) {
				return {
					...state,
					size: action.size
				}
			}
			return state
		default:
			return state
	}
}

const initialState = [
	{
		id: 1,
		size: 100,
		isDouble: false,
	}
]

const wagers = (state = initialState, action) => {
	switch(action.type) {
		case 'DOUBLE_DOWN':
			return state.map(w => wager(w, action))	
		case 'NEW_HAND':
			return wager(_.find(state, {id: 1}), action)
		case 'NEW_GAME':
			return initialState
		case 'SPLIT':
			let size = _.find(state, { id: action.id }).size
			return [
				...state,
				{ id: action.id + 1, size, isDouble: false }
			]
		case 'WAGER_SIZE_CHANGE':
			return state.map(w => wager(w, action))
		default:
			return state
	}
}

export default wagers