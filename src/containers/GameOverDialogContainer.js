import { connect } from 'react-redux'
import { makeNewGame } from '../actions'
import GameOverDialog from '../components/GameOverDialog'

const mapStateToProps = (state) => ({
	outOfMoney: state.player.bankroll === 0
})

const mapDispatchToProps = (dispatch) => ({
	makeNewGame: () => dispatch(makeNewGame())
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(GameOverDialog)