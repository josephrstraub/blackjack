import { combineReducers } from "redux"
import autoDeal from './auto-deal'
import bankroll from './bankroll'
import hands from './hands'
import wager from './wager'

export default combineReducers({
	autoDeal,
	bankroll,
	hands,
	wager
})

