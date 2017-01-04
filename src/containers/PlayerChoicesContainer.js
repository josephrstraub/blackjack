import { connect } from 'react-redux'
import { dealCardToPlayer, doubleDown, makeInitialDeal, split, stand } from '../actions'
import { getActiveHandIndex, getEnabledActions } from '../selectors'
import _ from 'lodash'
import PlayerChoices from '../components/PlayerChoices'

const mapStateToProps = (state) => ({
	activeHandIndex: getActiveHandIndex(state),
	enabledActions: getEnabledActions(state),
	deck: state.deck
})

const mapDispatchToProps = (dispatch) => ({
	deal: (index, cards) => dispatch(makeInitialDeal()),
	doubleDown: (index, card) => dispatch(doubleDown(index, card)),
	hit: (index, card) => dispatch(dealCardToPlayer(index, card)),
	split: (index) => dispatch(split(index)),
	stand: (index) => dispatch(stand(index))
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(PlayerChoices)