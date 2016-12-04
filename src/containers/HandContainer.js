import { connect } from 'react-redux'
import Hand from '../components/Hand'

const mapStateToProps = (state) => ({
	hand: state.playerHand
})

export default connect(mapStateToProps)(Hand)