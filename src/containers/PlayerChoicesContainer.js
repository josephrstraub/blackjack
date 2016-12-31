import { connect } from 'react-redux'
import { cardWasDealt, dealCardToDealer, dealCardToPlayer, doubleDown, hit, split, stand } from '../actions'
import { getEnabledActions } from '../selectors'
import _ from 'lodash'
import PlayerChoices from '../components/PlayerChoices'

const mapStateToProps = (state) => ({
	activeHandIndex: _.findLastIndex(state.player.hands, { isComplete: false }),
	enabledActions: getEnabledActions(state),
	deck: state.deck
})

const mapDispatchToProps = (dispatch) => ({
	deal: (index, cards) => {
		dispatch(dealCardToPlayer(index, cards[0]))
		dispatch(dealCardToDealer(cards[1]))
		dispatch(dealCardToPlayer(index, cards[2]))
		dispatch(dealCardToDealer(cards[3]))
	},
	doubleDown: (index, card) => dispatch(doubleDown(index, card)),
	hit: (index, card) => dispatch(dealCardToPlayer(index, card)),
	split: (index) => dispatch(split(index)),
	stand: (index) => dispatch(stand(index))
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(PlayerChoices)