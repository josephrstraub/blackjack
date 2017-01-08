import { combineReducers } from "redux"
import dealer from './dealer'
import deck from './deck'
import game from './game'
import player from './player'
import ui from './ui'

export default combineReducers({
	dealer,
	deck,
	game,
	player,
	ui
})

