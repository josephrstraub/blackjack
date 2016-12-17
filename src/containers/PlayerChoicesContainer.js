import { connect } from 'react-redux'
import { initialDeal, dealCard, doubleDown, split, stand, toggleAutoDeal} from '../actions'
import _ from 'lodash'
import PlayerChoices from '../components/PlayerChoices'

const mapStateToProps = (state) => {
	let activeHand = _.find(state.hands, 'isActive') 
	return {
		canDoubleDown: !state.isDormant && state.player.permissions.canAct && state.wager * 2 <= state.bankroll && !activeHand.isDouble,
		canHit: !state.isDormant && state.player.permissions.canAct,
		canStand: !state.isDormant && state.player.permissions.canAct,
		canSplit: !state.isDormant && state.player.permissions.canAct && activeHand.cards.length === 2 && activeHand.cards[0].name === activeHand.cards[1].name,
		canDeal: state.game.isDormant
	}
}

const mapDispatchToProps = (dispatch) => ({
	dealNewHand: () => dispatch(initialDeal()),
	dealCard: () => dispatch(dealCard()),
	doubleDown: () => dispatch(doubleDown()),
	split: () => dispatch(split()),
	stand: () => dispatch(stand()),
	toggleAutoDeal: () => dispatch(toggleAutoDeal())
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(PlayerChoices)