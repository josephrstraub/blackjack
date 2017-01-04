import { connect } from 'react-redux'
import { changeWagerSize } from '../actions'
import _ from 'lodash'
import WagerSlider from '../components/WagerSlider'

const mapStateToProps = (state) => ({
	defaultValue: Math.min(state.player.bankroll || 50, 100),
	isDisabled: !state.game.roundComplete,
	maxBet: state.player.bankroll < 500 ? state.player.bankroll || 50 : 500,
	wager: state.player.bankroll > state.player.baseWager ? state.player.baseWager : state.player.bankroll
})

const mapDispatchToProps = (dispatch) => ({
	handleChange: (event, value) => dispatch(changeWagerSize(value))
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(WagerSlider)