import { connect } from 'react-redux'
import { getDealerHand, getPlayerHand, getScore, getVisibleScore } from '../selectors'
import Hand from '../components/Hand'

const mapStateToProps = (state, ownProps) => {
	let cards = ownProps.dealer ? state.dealer.hand.cards : state.player.hands[ownProps.index].cards
	return {
		cards,
		isDealerHand: ownProps.dealer,
		score: ownProps.dealer ? getVisibleScore(state) : getScore(cards),
		shouldAnimate: ownProps.dealer && state.dealer.hand.allCardsVisible
	}
}

export default connect(mapStateToProps)(Hand)