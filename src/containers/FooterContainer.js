import { connect } from 'react-redux'
import { toggleAutoDeal } from '../actions'
import Footer from '../components/Footer'

const mapStateToProps = (state) => ({
	bankroll: state.bankroll,
	wager: state.wager
})

const mapDispatchToProps = (dispatch) => ({
	toggleAutoDeal: () => dispatch(toggleAutoDeal())
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Footer)