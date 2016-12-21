import { connect } from 'react-redux'
import { getDealerHand, getPlayerHand } from '../selectors'
import Hand from '../components/Hand'

const mapStateToProps = (state, ownProps) => ({
	cards: ownProps.dealer ? [] : state.player.hands[ownProps.index].cards,
	isDealerHand: ownProps.dealer,
	// shouldAnimate: ownProps.dealer && getDealerHand(state)[0] && getDealerHand(state)[0].isVisible
})

export default connect(mapStateToProps)(Hand)