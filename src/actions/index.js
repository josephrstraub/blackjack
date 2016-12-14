import { getHandScore, getDealerHand, getNextCard, playerRoundIsOver } from '../selectors'
import _ from 'lodash'

export const makeNewGame = () => ({
	type: 'NEW_GAME_MAKE'
})

const changePlayerBankroll = (amount) => ({
	type: 'PLAYER_BANKROLL_CHANGE',
	amount
})

export const changeWagerSize = (size) => ({
	type: 'WAGER_SIZE_CHANGE',
	size: size || 50
})

export const doubleDown = () => (dispatch, getState) => {
	dispatch({ type: 'DOUBLE_DOWN' })
	dispatch(dealCard(true, true))
	if ( playerRoundIsOver(getState()) ) {
		dispatch(terminalDeal())
	}
}

const revealHiddenCard = () => ({
	type: 'HIDDEN_CARD_REVEAL'
})

const handleEndOfRound = () => (dispatch, getState) => {
	let { hands, wager } = getState()
	let dealerScore = getHandScore(_.find(hands, 'isDealer').cards)
	let winnings = 0
	hands.filter(hand => !hand.isDealer).forEach(hand => {
		let wagerSize = hand.isDouble ? wager * 2 : wager
		let playerScore = getHandScore(hand.cards)
		if (playerScore > 21) { 
			winnings -= wagerSize 
		} else if (playerScore < 22 && (dealerScore > 21 || dealerScore < playerScore)) { 
			winnings += wagerSize 
		} else {
			winnings -= wagerSize
		}
	})
	dispatch(changePlayerBankroll(winnings))
}

const checkForBust = () => (dispatch, getState) => {
	let playerHand = _.find(getState().hands, { isActive: true }).cards
	let playerScore = getHandScore(playerHand)
	if ( playerScore > 21 ) {
		dispatch({ type: 'HAND_ACTIONS_DISABLE' })
		if ( playerRoundIsOver(getState()) ) {
			dispatch(terminalDeal())
		}
	}
}

export const stand = () => (dispatch, getState) => {
	dispatch({ type: 'HAND_ACTIONS_DISABLE' })
	if ( playerRoundIsOver(getState()) ) {
		dispatch(terminalDeal())
	}
}

export const dealCard = (toPlayer = true, disableAfter = false) => (dispatch, getState) => {
	let nextCard = getNextCard(getState())
	dispatch({ type: 'CARD_DEAL', card: nextCard, toPlayer })
	if (toPlayer && !disableAfter) { dispatch(checkForBust()) }
	if (disableAfter) { dispatch({ type: 'HAND_ACTIONS_DISABLE' }) }
}

const dealCardToDealerIfLegal = () => (dispatch, getState) => {
	let dealerHand = getDealerHand(getState())
	if ( getHandScore(dealerHand) < 17 ) {
		setTimeout(
			() => {
				dispatch(dealCard(false))
				dispatch(dealCardToDealerIfLegal())
			},
			500
		)
	} else {
		dispatch(handleEndOfRound())
	}
}

export const terminalDeal = () => (dispatch, getState) => {
	dispatch(revealHiddenCard())
	setTimeout(
		() => {
			dispatch(dealCardToDealerIfLegal())
		},
		1000
	)
}

export const initialDeal = () => (dispatch, getState) => {
	dispatch({ type: 'NEW_HAND' })
	dispatch(dealCard())
	dispatch(dealCard(false))
	dispatch(dealCard())
	dispatch(dealCard(false))
	let playerHand = _.find(getState().hands, { isDealer: false }).cards
	console.log(playerHand)
	let dealerHand = _.find(getState().hands, { isDealer: true }).cards
	let playerScore = getHandScore(playerHand)
	let dealerScore = getHandScore(dealerHand)
	if (playerScore === 21 || dealerScore === 21) { dispatch(handleEndOfRound) }
}