import { connect } from 'react-redux'
import Footer from '../components/Footer'

const mapStateToProps = (state) => ({
	bankroll: state.bankroll,
	wager: state.wager.size
})

const mapDispatchToProps = (dispatch) => ({})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Footer)