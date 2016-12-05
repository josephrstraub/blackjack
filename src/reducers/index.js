import { combineReducers } from "redux"
import playerHand from './player-hand'
import dealerHand from './dealer-hand'
import status from './status'

export default combineReducers({
	playerHand,
	dealerHand,
	status
})

