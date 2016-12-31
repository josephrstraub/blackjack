import { getHandStatus, getScore } from '../selectors'
import _ from 'lodash'

export const makeNewGame = () => ({ type: 'NEW_GAME' })
export const changeWagerSize = (size) => ({ type: 'CHANGE_WAGER_SIZE', size: size || 50 })
const changePlayerBankroll = (amount) => ({ type: 'CHANGE_PLAYER_BANKROLL', amount })
export const dealCardToDealer = (card) => ({ type: 'DEAL_CARD_TO_DEALER', card })
export const dealCardToPlayer = (index, card) => ({ type: 'DEAL_CARD_TO_PLAYER', index, card })
export const split = (index) => ({ type: 'SPLIT', index })
export const toggleAutoDeal = () => ({ type: 'AUTO_DEAL_TOGGLE' })

const handleEndOfRound = () => (dispatch, getState) => {
	let { baseWager, hands: playerHands } = getState().player
	let dealerScore = getScore(getState().dealer.hand.cards)
	let netWinnings = 0
	playerHands.filter(hand => !hand.wager.paymentIsSettled).forEach(hand => {
		let handScore = getScore(hand.cards)
		if (handScore > dealerScore) {
			netWinnings += hand.wager.isDouble ? baseWager * 2 : baseWager
		} else if (handScore < dealerScore) {
			netWinnings -= hand.wager.isDouble ? baseWager * 2 : baseWager
		}
	})
	dispatch(changePlayerBankroll(netWinnings))
}

const endRoundIfApplicable = () => (dispatch, getState) => {
	let { hands } = getState().player
	if ( hands.every(hand => hand.isComplete) ) {
		alert("We are done!")
		dispatch(terminalDeal())
		dispatch(handleEndOfRound())
	}
}

export const cardWasDealt = (index) => (dispatch, getState) => {
	let { hands, baseWager } = getState().player
	let hand = hands[index]
	switch (getHandStatus(hand.cards)) {
		case 'BUST':
			dispatch({ type: 'BUST', index, amount: hand.wager.isDouble ? baseWager * 2 : baseWager })
			break
		case 'BLACKJACK':
			dispatch({ type: 'BLACKJACK', index, amount: hand.wager.isDouble ? baseWager * 3 : baseWager * 1.5 })
			break
		case 'STAND':
			dispatch(stand(index))
			break
		default:
	}
	dispatch(endRoundIfApplicable())
}

export const doubleDown = (index, card) => (dispatch) => {
	dispatch({ type: 'DOUBLE_DOWN', index, card })
	dispatch(cardWasDealt(index))
}

export const hit = (index, card) => (dispatch) => {
	dispatch(dealCardToPlayer(index, card))
	dispatch(cardWasDealt(index))
}

export const stand = (index) => (dispatch) => {
	dispatch({ type: 'STAND', index })
	dispatch(endRoundIfApplicable())
}

const terminalDeal = () => (dispatch) => {
	dispatch({ type: 'REVEAL_HIDDEN_CARD' })
}

