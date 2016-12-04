import { connect } from 'react-redux'
import { dealCard, removeCard } from '../actions'
import PlayerChoices from '../components/PlayerChoices'

const mapStateToProps = (state) => ({
	nextCard: state.deck[0]
})

const mapDispatchToProps = (dispatch) => ({
	dealCard: (card) => {
		dispatch(dealCard(card))
		dispatch(removeCard())
	}
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(PlayerChoices)