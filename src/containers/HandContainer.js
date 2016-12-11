import { connect } from 'react-redux'
import Hand from '../components/Hand'

const mapStateToProps = (state, ownProps) => ({
	hand: ownProps.dealer ? state.dealerHand.contents : state.playerHand,
	firstCardIsVisible: state.dealerHand.isFullyVisible,
	isDealerHand: ownProps.dealer
})

export default connect(mapStateToProps)(Hand)