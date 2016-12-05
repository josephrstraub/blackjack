import { getPlayerPoints, getDealerPoints, getNextCard } from '../selectors'

export const dealCardToPlayer = () => (dispatch, getState) => {
	let nextCard = getNextCard(getState())
	dispatch({ type: 'CARD_DEAL_PLAYER', card: nextCard })
	let playerScore = getPlayerPoints(getState())
	if ( playerScore > 21 ) {
		dispatch({ type: 'LOSE' })
	}
}

export const dealCardToDealer = () => (dispatch, getState) => {
	let nextCard = getNextCard(getState())
	dispatch({ type: 'CARD_DEAL_DEALER', card: nextCard })
	let dealerScore = getDealerPoints(getState())
	if ( dealerScore > 21 ) {
		dispatch({ type: 'WIN' })
	}
}

export const deal = () => (dispatch, getState) => {
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