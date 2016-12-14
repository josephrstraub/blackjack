import { combineReducers } from "redux"
import hands from './hands'
import wager from './wager'
import bankroll from './bankroll'

export default combineReducers({
	hands,
	wager,
	bankroll
})

