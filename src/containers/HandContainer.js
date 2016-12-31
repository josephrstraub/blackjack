import { connect } from 'react-redux'
import { getDealerHand, getPlayerHand } from '../selectors'
import Hand from '../components/Hand'

const mapStateToProps = (state, ownProps) => ({
	cards: ownProps.dealer ? state.dealer.hand.cards : state.player.hands[ownProps.index].cards,
	isDealerHand: ownProps.dealer,
	shouldAnimate: ownProps.dealer && state.dealer.hand.allCardsVisible
})

export default connect(mapStateToProps)(Hand)