import { connect } from 'react-redux'
import Hand from '../components/Hand'

const mapStateToProps = (state, ownProps) => ({
	hand: ownProps.dealer ? state.dealerHand : state.playerHand
})

export default connect(mapStateToProps)(Hand)