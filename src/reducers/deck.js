const values = ["ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "jack", "queen", "king"]
const suits = ["clubs", "diamonds", "hearts", "spades"]
const newDeck = () => {
	let deck = []
	suits.forEach(suit => {
		values.forEach(value => {
			deck.push({value, suit})
		})
	})
	return deck
}

const deck = (state = newDeck(), action) => {
	switch(action.type) {
		case 'CARD_REMOVE':
			return state.slice(1)
		default:
			return state
	}
}

export default deck