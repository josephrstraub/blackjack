import { combineReducers } from "redux"
import deck from './deck'
import playerHand from './player-hand'

export default combineReducers({
	playerHand,
	deck
})

