import { connect } from 'react-redux'
import PlayerHandsSection from '../components/PlayerHandsSection'

const mapStateToProps = (state) => ({
	hands: state.player.hands,
	wager: state.player.baseWager
})

export default connect(mapStateToProps)(PlayerHandsSection)