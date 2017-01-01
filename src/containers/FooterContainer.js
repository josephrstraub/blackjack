import { connect } from 'react-redux'
import { toggleAutoDeal } from '../actions'
import Footer from '../components/Footer'

const mapStateToProps = (state) => ({
	autoDeal: state.autoDeal,
	bankroll: state.player.bankroll,
	wager: state.player.baseWager
})

const mapDispatchToProps = (dispatch) => ({
	toggleAutoDeal: () => dispatch(toggleAutoDeal())
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Footer)