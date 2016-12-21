import { getHandScore, getDealerHand, getPlayerHand, getNextCard, playerRoundIsOver } from '../selectors'
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
export const split = (index) => ({ type: 'SPLIT', index })
export const toggleAutoDeal = () => ({ type: 'AUTO_DEAL_TOGGLE' })

export const dealCard = (index, card) => ({ type: 'DEAL_CARD', index, card })