import _ from 'lodash'

const names = ["ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "jack", "queen", "king"]
const suits = ["clubs", "diamonds", "hearts", "spades"]
const makeDeck = () => {
	let deck = []
	suits.forEach(suit => {
		names.forEach(name => {
			let value
			if (name === "ace") {
				value = 11
			} else if (typeof name === 'string') {
				value = 10
			} else {
				value = name
			}
			deck.push({value, suit, name})
		})
	})
	return _.shuffle(deck)
}

const deck = (state = makeDeck(), action) => {
	switch (action.type) {
		case 'DEAL_CARD_TO_PLAYER':
		case 'DOUBLE_DOWN': return state.slice(1)
		case 'RESET': makeDeck()
		default: return state
	}
}

export default deck