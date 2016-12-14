import { connect } from 'react-redux'
import { initialDeal, dealCard, doubleDown, stand} from '../actions'
import _ from 'lodash'
import PlayerChoices from '../components/PlayerChoices'

const mapStateToProps = (state) => {
	let activeHand = _.find(state.hands, 'isActive') 
	return {
		canDoubleDown: _.some(state.hands, 'isActive') && state.wager * 2 <= state.bankroll && !activeHand.isDouble,
		canHit: _.some(state.hands, 'isActive'),
		canStand: _.some(state.hands, 'isActive'),
		canSplit: _.some(state.hands, 'isActive') && activeHand.cards.length === 2 && activeHand.cards[0].name === activeHand.cards[1].name,
		canDeal: !(_.some(state.hands, 'isActive'))
	}
}

const mapDispatchToProps = (dispatch) => ({
	dealNewHand: () => dispatch(initialDeal()),
	dealCard: () => dispatch(dealCard()),
	doubleDown: () => dispatch(doubleDown()),
	stand: () => dispatch(stand())
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(PlayerChoices)