import { getPlayerPoints, getDealerPoints, getNextCard , getWinner } from '../selectors'

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

const revealHiddenCard = () => ({
	type: 'HIDDEN_CARD_REVEAL'
})

const handleEndOfHand = (outcome) => (dispatch, getState) => {
	dispatch({ type: outcome })
	let { wager } = getState()
	if (outcome === 'WIN') {
		dispatch(changePlayerBankroll(wager))
	} else if (outcome === 'LOSE') {
		dispatch(changePlayerBankroll(wager * -1))
		let { bankroll } = getState()
		if (bankroll < wager) {
			dispatch(changeWagerSize(bankroll || 50))
		}
	}
}

export const dealCardToPlayer = () => (dispatch, getState) => {
	if (getState().status === 'playing' || getState().status === 'dormant') {
		let nextCard = getNextCard(getState())
		dispatch({ type: 'CARD_DEAL_PLAYER', card: nextCard })
		let playerScore = getPlayerPoints(getState())
		if ( playerScore > 21 ) {
			dispatch(handleEndOfHand('LOSE'))
		}
	}
}

export const dealCardToDealer = () => (dispatch, getState) => {
	let nextCard = getNextCard(getState())
	dispatch({ type: 'CARD_DEAL_DEALER', card: nextCard })
}

export const terminalDeal = () => (dispatch, getState) => {
	dispatch(revealHiddenCard())
	let dealerScore = getDealerPoints(getState())
	while (dealerScore < 17) {
		dispatch(dealCardToDealer())
		dealerScore = getDealerPoints(getState())
	}
	let winner = getWinner(getState())
	dispatch(handleEndOfHand(winner))
}

export const deal = () => (dispatch, getState) => {
	dispatch({ type: 'CLEAR' })
	dispatch(dealCardToPlayer())
	dispatch({ type: 'PLAYING' })
	dispatch(dealCardToDealer())
	dispatch(dealCardToPlayer())
	dispatch(dealCardToDealer())
	let playerScore = getPlayerPoints(getState())
	let dealerScore = getDealerPoints(getState())
	if (playerScore === 21 && dealerScore !== 21) {
		dispatch(revealHiddenCard())
		dispatch(handleEndOfHand('WIN'))
	} else if (playerScore === 21 && dealerScore === 21) {
		dispatch(revealHiddenCard())
		dispatch(handleEndOfHand('PUSH'))
	} else if (dealerScore === 21) {
		dispatch(revealHiddenCard())
		dispatch(handleEndOfHand('LOSE'))
	}
}