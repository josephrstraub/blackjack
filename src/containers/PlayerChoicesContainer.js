import { connect } from 'react-redux'
import { deal, dealCardToPlayer, doubleDown, terminalDeal} from '../actions'
import PlayerChoices from '../components/PlayerChoices'

const mapStateToProps = (state) => ({
	canDoubleDown: state.bankroll >= state.wager.size * 2 && !state.wager.isDouble,
	gameStatus: state.status
})

const mapDispatchToProps = (dispatch) => ({
	dealNewHand: () => dispatch(deal()),
	dealCard: () => dispatch(dealCardToPlayer()),
	doubleDown: () => dispatch(doubleDown()),
	stand: () => dispatch(terminalDeal())
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(PlayerChoices)