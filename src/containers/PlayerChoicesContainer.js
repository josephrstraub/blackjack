import { connect } from 'react-redux'
import { initialDeal, dealCard, doubleDown, terminalDeal} from '../actions'
import { currentWagerIsDouble } from '../selectors'
import _ from 'lodash'
import PlayerChoices from '../components/PlayerChoices'

const mapStateToProps = (state) => {
	if ( !(_.some(state.hands, 'isActive')) ) {
		return { canDeal: true }
	}
	return {
		canDoubleDown: state.wager * 2 <= state.bankroll && !currentWagerIsDouble(state),
		canHit: _.some(state.hands, 'isActive'),
		canStand: _.some(state.hands, 'isActive'),
		canDeal: false
	}
}

const mapDispatchToProps = (dispatch) => ({
	dealNewHand: () => dispatch(initialDeal()),
	dealCard: () => dispatch(dealCard()),
	doubleDown: () => dispatch(doubleDown()),
	stand: () => dispatch(terminalDeal())
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(PlayerChoices)