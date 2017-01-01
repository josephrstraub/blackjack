import { combineReducers } from "redux"
import autoDeal from './auto-deal'
import dealer from './dealer'
import deck from './deck'
import game from './game'
import player from './player'

export default combineReducers({
	dealer,
	deck,
	game,
	player
})

