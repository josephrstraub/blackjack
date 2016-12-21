import { createSelector } from 'reselect'
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
	return deck
}

const deck = makeDeck()

// export const getNextCard = createSelector(
// 	[getPlayerHands, getDealerHand],
// 	(playerHands, dealerHand) => {
// 		let playerCards = playerHands.reduce((cards, cur) => [...cards, ...cur.cards], [])
// 		let remainingCards = _.differenceWith(
// 			deck,
// 			[...playerCards, ...dealerHand],
// 			_.isEqual
// 		)
// 		return _.sample(remainingCards)
// 	}
// )



