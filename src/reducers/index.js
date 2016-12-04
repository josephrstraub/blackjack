import { combineReducers } from "redux"
import playerHand from './player-hand'
import dealerHand from './dealer-hand'

export default combineReducers({
	playerHand,
	dealerHand
})

