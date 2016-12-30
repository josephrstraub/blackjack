import { combineReducers } from "redux"
import autoDeal from './auto-deal'
import bankroll from './bankroll'
import hands from './hands'
import game from './game'
import deck from './deck'
import player from './player'
import wager from './wager'

export default combineReducers({
	deck,
	player
})

