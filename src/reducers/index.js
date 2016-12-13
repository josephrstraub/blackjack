import { combineReducers } from "redux"
import hands from './hands'
import wagers from './wagers'
import bankroll from './bankroll'

export default combineReducers({
	hands,
	wagers,
	bankroll
})

