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
const getDealerHand = (state) => state.dealerHand.contents

export const getNextCard = createSelector(
	[getPlayerHand, getDealerHand],
	(playerHand, dealerHand) => {
		let remainingCards = _.differenceWith(
			deck,
			[...playerHand, ...dealerHand],
			_.isEqual
		)
		return _.sample(remainingCards)
	}
)

const getCardValue = (value) => {
	if (value === "ace") {
		return 11
	}
	if (typeof value === 'string') {
		return 10
	}
	return value
}

export const getPlayerPoints = createSelector(
	[getPlayerHand],
	(playerHand) => {
		let numberOfAces = playerHand.filter(card => card.value === "ace").length
		let totalPoints = playerHand.reduce((total, cur) => total + getCardValue(cur.value), 0)
		if (totalPoints > 21) {
			while (numberOfAces > 0) {
				totalPoints = totalPoints - 10
				if (totalPoints < 22) {
					return totalPoints
				}
				numberOfAces --
			}
			return totalPoints
		}
		return totalPoints
	}
)

export const getDealerPoints = createSelector(
	[getDealerHand],
	(dealerHand) => {
		let numberOfAces = dealerHand.filter(card => card.value === "ace").length
		let totalPoints = dealerHand.reduce((total, cur) => total + getCardValue(cur.value), 0)
		if (totalPoints > 21) {
			while (numberOfAces > 0) {
				totalPoints = totalPoints - 10
				if (totalPoints < 22) {
					return totalPoints
				}
				numberOfAces --
			}
			return totalPoints
		}
		return totalPoints
	}
)

export const getWinner = createSelector(
	[getPlayerPoints, getDealerPoints],
	(playerPoints, dealerPoints) => {
		if (dealerPoints > playerPoints && dealerPoints < 22) {
			return "LOSE"
		} else if (dealerPoints === playerPoints) {
			return "PUSH"
		}
		else {
			return "WIN"
		}
	}
)

