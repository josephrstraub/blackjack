import { createSelector } from 'reselect'
import _ from 'lodash'

const values = ["ace", 2, 3, 4, 5, 6, 7, 8, 9, 10, "jack", "queen", "king"]
const suits = ["clubs", "diamonds", "hearts", "spades"]
const makeDeck = () => {
	let deck = []
	suits.forEach(suit => {
		values.forEach(value => {
			deck.push({value, suit})
		})
	})
	return deck
}

const deck = makeDeck()
const getPlayerHand = (state) => state.playerHand
const getDealerHand = (state) => state.dealerHand

export const getNextCard = createSelector(
	[getPlayerHand, getDealerHand],
	(playerHand, dealerHand) => {
		let remainingCards = _.differenceWith(
			deck,
			[...playerHand, ...dealerHand],
			_.isEqual
		)
		return remainingCards[0]
	}
)