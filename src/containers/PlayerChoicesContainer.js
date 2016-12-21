import { connect } from 'react-redux'
import { dealCard, split } from '../actions'
import _ from 'lodash'
import PlayerChoices from '../components/PlayerChoices'

const mapStateToProps = (state) => ({
	activeHandIndex: _.findLastIndex(state.player.hands, { isComplete: false }),
	nextCard: { name: "6", value: 6, suit: "hearts" }
})

const mapDispatchToProps = (dispatch) => ({
	dealCard: (index, card) => dispatch(dealCard(index, card)),
	split: (index) => dispatch(split(index)),
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(PlayerChoices)