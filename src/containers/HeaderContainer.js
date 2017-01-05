import { connect } from 'react-redux'
import { makeNewGame} from '../actions'
import Header from '../components/Header'

const mapDispatchToProps = (dispatch) => ({
	makeNewGame: () => dispatch(makeNewGame())
})

export default connect(
	null,
	mapDispatchToProps
)(Header)