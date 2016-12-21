import { connect } from 'react-redux'
import { changeWagerSize } from '../actions'
import _ from 'lodash'
import WagerSlider from '../components/WagerSlider'

const mapStateToProps = (state) => ({
	defaultValue: Math.min(state.player.bankroll, 100),
	isDisabled: false,
	maxBet: state.player.bankroll < 500 ? state.player.bankroll || 50 : 500,
	wager: state.player.baseWager
})

const mapDispatchToProps = (dispatch) => ({
	handleChange: (event, value) => dispatch(changeWagerSize(value))
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(WagerSlider)