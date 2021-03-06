import { connect } from 'react-redux'
import { toggleAutoDeal, toggleHelpDialog } from '../actions'
import Footer from '../components/Footer'

const mapStateToProps = (state) => ({
	autoDeal: state.game.autoDeal,
	bankroll: state.player.bankroll,
	wager: state.player.baseWager
})

const mapDispatchToProps = (dispatch) => ({
	toggleAutoDeal: () => dispatch(toggleAutoDeal()),
	toggleHelpDialog: () => dispatch(toggleHelpDialog())
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Footer)