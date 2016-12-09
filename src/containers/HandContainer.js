import { connect } from 'react-redux'
import Hand from '../components/Hand'

const mapStateToProps = (state, ownProps) => ({
	hand: ownProps.dealer ? state.dealerHand.contents : state.playerHand,
	hideCard: ownProps.dealer ? !state.dealerHand.isFullyVisible : false
})

export default connect(mapStateToProps)(Hand)