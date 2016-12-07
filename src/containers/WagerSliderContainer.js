import { connect } from 'react-redux'
import { changeWagerSize } from '../actions'
import WagerSlider from '../components/WagerSlider'

const mapStateToProps = (state) => ({
	currentWager: state.currentWager,
	gameStatus: state.status
})

const mapDispatchToProps = (dispatch) => ({
	changeWagerSize: (event, value) => dispatch(changeWagerSize(value))
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(WagerSlider)