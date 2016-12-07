import { connect } from 'react-redux'
import { deal, dealCardToPlayer , terminalDeal} from '../actions'
import PlayerChoices from '../components/PlayerChoices'

const mapStateToProps = (state) => ({
	gameStatus: state.status
})

const mapDispatchToProps = (dispatch) => ({
	dealNewHand: () => dispatch(deal()),
	dealCard: () => dispatch(dealCardToPlayer()),
	stand: () => dispatch(terminalDeal())
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(PlayerChoices)