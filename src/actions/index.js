import { getHandScore, getDealerHand, getNextCard, playerRoundIsOver } from '../selectors'
import _ from 'lodash'

export const makeNewGame = () => ({ type: 'NEW_GAME' })
export const changeWagerSize = (size) => ({ type: 'WAGER_SIZE_CHANGE', size: size || 50 })
const changePlayerBankroll = (amount) => (dispatch, getState) => { 
	let increment = amount / Math.abs(amount) * 25
	let i = 0
	let bankrollInterval = setInterval(
		() => {
			dispatch({ type: 'PLAYER_BANKROLL_CHANGE', amount: increment })
			i += increment
			if (i === amount) {
				clearInterval(bankrollInterval)
			}
		},
		.5
	)
}
export const split = () => ({ type: 'SPLIT' })
export const toggleAutoDeal = () => ({ type: 'AUTO_DEAL_TOGGLE' })

export const doubleDown = () => (dispatch, getState) => {
	dispatch({ type: 'DOUBLE_DOWN' })
	dispatch(dealCard(true, true))
	if ( playerRoundIsOver(getState()) ) {
		dispatch(terminalDeal())
	}
}

const handleEndOfRound = () => (dispatch, getState) => {
	let { hands, wager } = getState()
	let dealerHand = _.find(hands, 'isDealer')
	let dealerScore = getHandScore(dealerHand.cards)
	let winnings = 0
	hands.filter(hand => !hand.isDealer).forEach(hand => {
		let wagerSize = hand.isDouble ? wager * 2 : wager
		let playerScore = getHandScore(hand.cards)
		if (playerScore > dealerScore) {
			if (playerScore > 21) {
				winnings -= wagerSize
			} else if (playerScore === 21 && hand.cards.length === 2) {
				winnings += wagerSize * 1.5
			} else {
				winnings += wagerSize
			}
		} else if (dealerScore > playerScore) {
			if (dealerScore < 22) {
				winnings -= wagerSize
			} else if (playerScore < 22) {
				winnings += wagerSize
			}
		} else if (dealerScore === 21 && playerScore === 21) {
			if (hand.cards.length === 2 && dealerHand.cards.length !== 2) {
				winnings += wagerSize * 1.5
			} else if (hand.cards.length !== 2 && dealerHand.cards.length === 2) {
				winnings -= wagerSize
			}
		} else {
			if (playerScore > 21) {
				winnings -= wagerSize
			}
		}
	})
	let { bankroll } = getState()
	//because changePlayerBankroll is async
	bankroll += winnings
	dispatch(changePlayerBankroll(winnings))
	dispatch({ type: 'HAND_ENDED' })
	let { autoDeal } = getState()
	if (autoDeal) {
		if (wager <= bankroll) {
			setTimeout(
				() => dispatch(initialDeal()),
				2000
			)
		} else {
			dispatch({ type: 'AUTO_DEAL_TOGGLE' })
		}
	} else {
		if (wager > bankroll) {
			dispatch({ type: 'WAGER_SIZE_CHANGE', size: bankroll })
		}
	}
}

const checkForBust = () => (dispatch, getState) => {
	let playerHand = _.find(getState().hands, { isActive: true }).cards
	let playerScore = getHandScore(playerHand)
	if ( playerScore > 21 ) {
		if ( playerRoundIsOver(getState()) ) {
			dispatch(terminalDeal())
		}
	}
}

export const stand = () => (dispatch, getState) => {
	if ( playerRoundIsOver(getState()) ) {
		dispatch(terminalDeal())
	}
}

export const dealCard = (toPlayer = true, disableAfter = false) => (dispatch, getState) => {
	let nextCard = getNextCard(getState())
	dispatch({ type: 'CARD_DEAL', card: nextCard, toPlayer })
	if (toPlayer && !disableAfter) { dispatch(checkForBust()) }
	if (disableAfter) { dispatch({ type: 'HAND_DISABLE' }) }
}

const dealCardToDealerIfLegal = () => (dispatch, getState) => {
	let dealerHand = getDealerHand(getState())
	if ( getHandScore(dealerHand) < 17 ) {
		setTimeout(
			() => {
				dispatch(dealCard(false))
				dispatch(dealCardToDealerIfLegal())
			},
			1000
		)
	} else {
		dispatch(handleEndOfRound())
	}
}

export const terminalDeal = () => (dispatch, getState) => {
	dispatch({ type: 'TERMINAL_DEAL' })
	dispatch({ type: 'HAND_DISABLE' })
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
	setTimeout(() => dispatch(dealCard(false)), 250)
	setTimeout(() => dispatch(dealCard()), 500)
	setTimeout(() => dispatch(dealCard(false)), 750)
	let playerHand = _.find(getState().hands, { id: 1 }).cards
	let dealerHand = _.find(getState().hands, { isDealer: true }).cards
	let playerScore = getHandScore(playerHand)
	let dealerScore = getHandScore(dealerHand)
	if (playerScore === 21 || dealerScore === 21) {
		dispatch(terminalDeal())
	}
}