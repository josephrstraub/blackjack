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
const getHands = (state) => state.hands
export const getPlayerHands = (state) => state.hands.filter(hand => !hand.isDealer)
export const getPlayerHand = (state, props) => {
	let hand = _.find(state.hands, { id: props.id })
	if (hand) {
		return hand.cards
	} else {
		return []
	}
}
export const playerRoundIsOver = (state) => state.hands.length === 2 || !(_.some(state.hands, 'isActive'))
export const getDealerHand = (state) => _.find(state.hands, 'isDealer').cards

export const getActiveHand = createSelector(
	[getHands],
	(hands) => _.find(hands, 'isActive')
)

const getActiveHandCards = createSelector(
	[getActiveHand],
	(hand) => hand ? hand.cards : []
)

export const getNextCard = createSelector(
	[getPlayerHands, getDealerHand],
	(playerHands, dealerHand) => {
		let playerCards = playerHands.reduce((cards, cur) => [...cards, ...cur.cards], [])
		let remainingCards = _.differenceWith(
			deck,
			[...playerCards, ...dealerHand],
			_.isEqual
		)
		return _.sample(remainingCards)
	}
)

const getCardValue = (card) => {
	if (card.name === "ace") {
		return 11
	}
	return card.value
}

export const getActiveHandScore = createSelector(
	[getActiveHandCards],
	(hand) => {
		let numberOfAces = hand.filter(card => card.name === "ace").length
		let totalPoints = hand.reduce((total, cur) => total + getCardValue(cur), 0)
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

export const getHandScore = (cards) => {
	let numberOfAces = cards.filter(card => card.name === "ace").length
	let totalPoints = cards.reduce((total, cur) => total + getCardValue(cur), 0)
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

export const getDealerScore = createSelector(
	[getDealerHand],
	(dealerHand) => {
		let numberOfAces = dealerHand.filter(card => card.name === "ace").length
		let totalPoints = dealerHand.reduce((total, cur) => total + getCardValue(cur), 0)
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

