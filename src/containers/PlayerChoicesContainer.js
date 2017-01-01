import { connect } from 'react-redux'
import { dealCardToDealer, dealCardToPlayer, doubleDown, reset, split, stand } from '../actions'
import { getActiveHandIndex, getEnabledActions } from '../selectors'
import _ from 'lodash'
import PlayerChoices from '../components/PlayerChoices'

const mapStateToProps = (state) => ({
	activeHandIndex: getActiveHandIndex(state),
	enabledActions: getEnabledActions(state),
	deck: state.deck
})

const mapDispatchToProps = (dispatch) => ({
	deal: (index, cards) => {
		dispatch(reset())
		dispatch(dealCardToPlayer(0, cards[0]))
		dispatch(dealCardToDealer(cards[1]))
		dispatch(dealCardToPlayer(0, cards[2]))
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