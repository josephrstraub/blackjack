import { connect } from 'react-redux'
import { changeWagerSize } from '../actions'
import _ from 'lodash'
import WagerSlider from '../components/WagerSlider'

const mapStateToProps = (state, ownProps) => ({
	defaultValue: Math.min(state.bankroll, 100),
	isDisabled: _.some(state.hands, 'isActive'),
	maxBet: state.bankroll < 500 ? state.bankroll || 50 : 500,
	wager: state.wager
})

const mapDispatchToProps = (dispatch) => ({
	handleChange: (event, value) => dispatch(changeWagerSize(value))
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(WagerSlider)