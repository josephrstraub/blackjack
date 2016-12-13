import _ from 'lodash'

const cards = (state = [], action) => {
	switch(action.type) {
		case 'HIDDEN_CARD_REVEAL':
			return [
				{ ...state[0], isVisible: true },
				...state.slice(1)
			]
		case 'SPLIT':
			return state.slice(0, 1)
		default:
			return state
	}
}

const hand = (state = {}, action) => {
	switch(action.type) {
		case 'CARD_DEAL':
			if ( state.id === action.id ) {
				return {
					...state,
					cards: [...state.cards, action.card]
				}
			}
			return state
		case 'ADD_HAND':
			return {
				id: action.id,
				isActive: true,
				isDealer: false,
				cards: [action.card]
			}
		case 'HIDDEN_CARD_REVEAL':
			if (state.isDealer) {
				return {
					...state, 
					cards: cards(state.cards, action) 
				}
			}
			return state
		case 'SPLIT':
			if ( state.id === action.id ) {
				return {
					...state,
					isActive: false,
					cards: cards(state.cards, action)
				}
			}
			return state
		default:
			return state
	}
}

const initialState = [
	{ id: 1, isActive: true, isDealer: false, cards: [] },
	{ isDealer: true, cards: [] }
]

const hands = (state = initialState, action) => {
	switch(action.type) {
		case 'NEW_HAND':
			return initialState
		case 'CARD_DEAL':
			return state.map(h => hand(h, action))		
		case 'HIDDEN_CARD_REVEAL':
			return state.map(h => hand(h, action))
		case 'SPLIT':
			let newCard = _.find(state, {id: action.id}).cards[1]
			return _.orderBy([
				...state.map(h => hand(h, action)),
				hand(undefined, { type: 'ADD_HAND', id: action.id + 1, card: newCard })
			], 'id', 'asc')
		default:
			return state
	}
}

export default hands