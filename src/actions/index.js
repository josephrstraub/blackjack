import { getHandStatus, getScore } from '../selectors'
import _ from 'lodash'

export const makeNewGame = () => ({ type: 'NEW_GAME' })
export const changeWagerSize = (size) => ({ type: 'CHANGE_WAGER_SIZE', size: size || 50 })
const changePlayerBankroll = (amount) => ({ type: 'CHANGE_PLAYER_BANKROLL', amount })
export const toggleAutoDeal = () => ({ type: 'AUTO_DEAL_TOGGLE' })
export const reset = () => ({ type: 'RESET' })
export const split = (index, cards) => (dispatch) => {
	dispatch({ type: 'SPLIT', index })
	dispatch(dealCardToPlayer(index + 1, cards[0]))
		.then(() => dispatch(dealCardToPlayer(index, cards[1])))
}


const dealCardToDealer = (card, delay = 500) => (dispatch, getState) => {
	return dispatch({ type: 'DEAL_CARD_TO_DEALER', card, meta: {delay} }).then(() => {
		if (getState().dealer.hand.cards.length === 2) {
			dispatch(cardWasDealt(0))
		}
		Promise.resolve()
	})
}

export const dealCardToPlayer = (index, card, disableAfter = false) => (dispatch) => {
	return dispatch({ type: 'DEAL_CARD_TO_PLAYER', index, card: {name: "8", value: 8, suit: "diamonds"}, meta: {delay: 500} }).then(() => {
		dispatch(cardWasDealt(index, disableAfter))	
		Promise.resolve()	
	})
}

const terminalDeal = () => (dispatch, getState) => {
	dispatch({ type: 'REVEAL_HIDDEN_CARD' })
	let p = new Promise((resolve, reject) => {
		function dealIfNeeded() {
			let { cards: dealerCards } = getState().dealer.hand
			let dealerScore = getScore(dealerCards)
			if (dealerScore < 17) {
				let nextCard = getState().deck[0]
				dispatch(dealCardToDealer(nextCard, dealerCards.length === 2 ? 1500 : 500)).then(() => {
					dealIfNeeded() 
				})
			} else {
				resolve()
			}
		}
		dealIfNeeded()
	})
	return p
}

const endRoundIfApplicable = () => (dispatch, getState) => {
	let { hands } = getState().player
	if ( hands.every(hand => hand.isComplete) ) {
		setTimeout(
			() => dispatch(terminalDeal()).then(() => dispatch(handleEndOfRound())),
			500
		)
	}
}

export const stand = (index) => (dispatch) => {
	dispatch({ type: 'STAND', index })
	dispatch(endRoundIfApplicable())
}

export const cardWasDealt = (index, disableAfter = false) => (dispatch, getState) => {
	let { hands, baseWager } = getState().player
	let hand = hands[index]
	let { cards: dealerCards } = getState().dealer.hand
	switch (getHandStatus(hand.cards, disableAfter)) {
		case 'BUST':
			dispatch({ type: 'BUST', index, amount: hand.wager.isDouble ? baseWager * 2 : baseWager })
			dispatch(endRoundIfApplicable())
			break
		case 'BLACKJACK':
			if (dealerCards.length === 2 && getHandStatus(dealerCards) !== 'BLACKJACK') {
				dispatch({ type: 'BLACKJACK', index, amount: hand.wager.isDouble ? baseWager * 3 : baseWager * 1.5 })
				dispatch(endRoundIfApplicable())
			}
			break
		case 'FORCED_STAND':
			dispatch(stand(index))
			break
		default:
			if (dealerCards.length === 2 && getHandStatus(dealerCards) === 'BLACKJACK') {
				dispatch(stand(0))
			}
	}
}

export const makeInitialDeal = () => (dispatch, getState) => {
	dispatch(reset())
	let { deck } = getState()
	dispatch(dealCardToPlayer(0, deck[0]))
		.then(() => dispatch(dealCardToDealer(deck[1])))
		.then(() => dispatch(dealCardToPlayer(0, deck[2])))
		.then(() => dispatch(dealCardToDealer(deck[3])))
}

const handleEndOfRound = () => (dispatch, getState) => {
	let { baseWager, hands: playerHands } = getState().player
	let dealerScore = getScore(getState().dealer.hand.cards)
	let netWinnings = 0
	playerHands.filter(hand => !hand.wager.paymentIsSettled).forEach(hand => {
		let handScore = getScore(hand.cards)
		if (handScore > dealerScore) {
			netWinnings += hand.wager.isDouble ? baseWager * 2 : baseWager
		} else if (handScore < dealerScore && dealerScore < 22) {
			netWinnings -= hand.wager.isDouble ? baseWager * 2 : baseWager
		} else if (dealerScore > 21) {
			netWinnings += hand.wager.isDouble ? baseWager * 2 : baseWager
		}
	})
	dispatch(changePlayerBankroll(netWinnings))
	let { bankroll, baseWager: wager } = getState().player
	if (bankroll < wager) {
		dispatch(changeWagerSize(bankroll))
		dispatch(toggleAutoDeal())
		dispatch({ type: 'END_ROUND' }) 
	} else {
		dispatch({ type: 'END_ROUND' })
		if (getState().game.autoDeal) {
			setTimeout(() => dispatch(makeInitialDeal()), 1500)
		}
	}
}

export const doubleDown = (index, card) => (dispatch) => {
	dispatch({ type: 'DOUBLE_DOWN', index })
	dispatch(dealCardToPlayer(index, card, true))
}

