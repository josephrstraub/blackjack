import { combineReducers } from "redux"
import playerHand from './player-hand'
import dealerHand from './dealer-hand'
import status from './status'
import wager from './wager'
import bankroll from './bankroll'

export default combineReducers({
	playerHand,
	dealerHand,
	status,
	wager,
	bankroll
})

