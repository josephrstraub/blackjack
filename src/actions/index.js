import { getPlayerPoints, getDealerPoints, getNextCard , getWinner } from '../selectors'

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

const handleEndOfHand = (outcome) => (dispatch, getState) => {
	dispatch({ type: outcome })
	let wagerSize = getState().wager
	console.log(wagerSize)
	if (outcome === 'WIN') {
		dispatch(changePlayerBankroll(wagerSize))
	} else if (outcome === 'LOSE') {
		dispatch(changePlayerBankroll(wagerSize * -1))
	}
}

const changePlayerBankroll = (amount) => ({
	type: 'PLAYER_BANKROLL_CHANGE',
	amount
})

export const terminalDeal = () => (dispatch, getState) => {
	let dealerScore = getDealerPoints(getState())
	while (dealerScore < 17) {
		dispatch(dealCardToDealer())
		dealerScore = getDealerPoints(getState())
	}
	let winner = getWinner(getState())
	dispatch(handleEndOfHand(winner))
}

export const dealCardToDealer = () => (dispatch, getState) => {
	let nextCard = getNextCard(getState())
	dispatch({ type: 'CARD_DEAL_DEALER', card: nextCard })
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
		dispatch(handleEndOfHand('WIN'))
	} else if (playerScore === 21 && dealerScore === 21) {
		dispatch(handleEndOfHand('PUSH'))
	}
}

export const changeWagerSize = (size) => (dispatch, getState) => {
	if (getState().status !== 'playing') {
		dispatch({ type: 'WAGER_SIZE_CHANGE', size })
	}
}