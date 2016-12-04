import { connect } from 'react-redux'
import { dealCardToPlayer } from '../actions'
import { getNextCard } from '../selectors/deck'
import PlayerChoices from '../components/PlayerChoices'

const mapStateToProps = (state) => ({
	nextCard: getNextCard(state)
})

const mapDispatchToProps = (dispatch) => ({
	dealCard: (card) => dispatch(dealCardToPlayer(card))
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(PlayerChoices)