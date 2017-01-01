import { createSelector } from 'reselect'
import _ from 'lodash'

const getBankroll = ({ player }) => player.bankroll
const getBaseWager = ({ player }) => player.baseWager
const getPlayerHands = ({ player }) => player.hands
export const getScore = (cards) => cards.sort((a, b) => a.name[0] < b.name[0] ? 1 : -1)
	.reduce((s, cur) => s + cur.value > 21 && cur.name === "ace" ? s + 1 : s + cur.value, 0)
const getRoundStatus = ({ game }) => game.roundComplete

export const getActiveHand = createSelector([getPlayerHands], (hands) => hands.sort((a, b) => a.createdAt >= b.createdAt ? -1 : 1)
	.find(hand => !hand.isComplete))

export const getActiveHandIndex = createSelector([getPlayerHands], (hands) => hands.sort((a, b) => a.createdAt >= b.createdAt ? -1 : 1)
	.findIndex(hand => !hand.isComplete))

export const getEnabledActions = createSelector(
	[getActiveHand, getBankroll, getBaseWager, getRoundStatus],
	(hand, bankroll, baseWager, roundComplete) => {
		if (!hand && !roundComplete) { return [] }
		if (roundComplete) { return ['deal'] }
		let permissions = []
		if (hand.cards.length > 0) { permissions = [ ...permissions, 'hit', 'stand' ] }
		if (hand.cards.length === 2 && bankroll >= baseWager) { permissions.push('double') }
		if (hand.cards.length === 2 && bankroll >= baseWager && hand.cards[0].value === hand.cards[1].value) { permissions.push('split') }
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