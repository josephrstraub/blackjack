import { getPlayerPoints, getDealerPoints, getNextCard , getWinner } from '../selectors'

export const dealCardToPlayer = () => (dispatch, getState) => {
	let nextCard = getNextCard(getState())
	dispatch({ type: 'CARD_DEAL_PLAYER', card: nextCard })
	let playerScore = getPlayerPoints(getState())
	if ( playerScore > 21 ) {
		dispatch({ type: 'LOSE' })
	}
}

export const terminalDeal = () => (dispatch, getState) => {
	let dealerScore = getDealerPoints(getState())
	while (dealerScore < 17) {
		dispatch(dealCardToDealer())
		dealerScore = getDealerPoints(getState())
	}
	let winner = getWinner(getState())
	dispatch({ type: winner })
}

export const dealCardToDealer = () => (dispatch, getState) => {
	let nextCard = getNextCard(getState())
	dispatch({ type: 'CARD_DEAL_DEALER', card: nextCard })
}

export const deal = () => (dispatch, getState) => {
	dispatch({ type: 'CLEAR' })
	dispatch(dealCardToPlayer())
	dispatch(dealCardToDealer())
	dispatch(dealCardToPlayer())
	dispatch(dealCardToDealer())
	let playerScore = getPlayerPoints(getState())
	let dealerScore = getDealerPoints(getState())
	if (playerScore === 21 && dealerScore !== 21) {
		dispatch({ type: 'WIN' })
	} else if (playerScore === 21 && dealerScore === 21) {
		dispatch({ type: 'PUSH' })
	}
}