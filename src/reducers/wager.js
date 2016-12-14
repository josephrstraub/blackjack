import _ from 'lodash'

const wager = (state = 100, action) => {
	switch(action.type) {
		case 'NEW_GAME':
			return 100
		case 'WAGER_SIZE_CHANGE':
			return action.size
		default:
			return state
	}
}

export default wager