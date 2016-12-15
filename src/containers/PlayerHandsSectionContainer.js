import { connect } from 'react-redux'
import { getPlayerHands } from '../selectors'
import PlayerHandsSection from '../components/PlayerHandsSection'

const mapStateToProps = (state) => ({
	hands: getPlayerHands(state),
	wager: state.wager
})

export default connect(mapStateToProps)(PlayerHandsSection)