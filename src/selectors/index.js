import { createSelector } from 'reselect'
import _ from 'lodash'

const getBankroll = ({ player }) => player.bankroll
const getBaseWager = ({ player }) => player.baseWager
const getDealerHand = ({ dealer }) => dealer.hand
const getPlayerHands = ({ player }) => player.hands
export const getScore = (cards) => cards.slice(0).sort((a, b) => a.name[0] < b.name[0] ? -1 : 1)
	.reduce((s, cur) => s + cur.value > 21 && cur.name === "ace" ? s + 1 : s + cur.value, 0)


export const getVisibleScore = createSelector([getDealerHand], (hand) => {
	let cards = hand.allCardsVisible ? hand.cards : hand.cards.slice(1) || []
	return getScore(cards)
})

const getRoundStatus = ({ game }) => game.roundComplete

export const getActiveHand = createSelector([getPlayerHands], (hands) => hands.slice(0).sort((a, b) => a.createdAt >= b.createdAt ? -1 : 1)
	.find(hand => !hand.isComplete))

export const getActiveHandIndex = createSelector([getPlayerHands], (hands) => _.findLastIndex(hands, { isComplete: false }))

const getTotalAmountWagered = createSelector([getPlayerHands, getBaseWager], (hands, wager) => hands.reduce((sum, cur) => {
	return sum + cur.wager.isDouble ? wager * 2 : wager
}, 0))

export const getEnabledActions = createSelector(
	[getActiveHand, getBankroll, getBaseWager, getRoundStatus, getTotalAmountWagered],
	(hand, bankroll, baseWager, roundComplete, amountWagered) => {
		if (!hand && !roundComplete) { return [] }
		if (roundComplete) { return ['deal'] }
		let permissions = []
		if (hand.cards.length > 0) { permissions = [ ...permissions, 'hit', 'stand' ] }
		if (hand.cards.length === 2 && bankroll >= amountWagered + baseWager) { permissions.push('double') }
		if (hand.cards.length === 2 && bankroll >= amountWagered + baseWager && hand.cards[0].value === hand.cards[1].value) { permissions.push('split') }
		return permissions
	}
)

export const getHandStatus = (cards, shouldDisable) => {
	let score = getScore(cards)
	if (score === 21 && cards.length === 2) {
		return 'BLACKJACK'
	} else if (score > 21) {
		return 'BUST'
	} else if (score === 21 || shouldDisable) {
		return 'FORCED_STAND'
	} else { return 'PLAYING' }
}