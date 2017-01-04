import { connect } from 'react-redux'
import { makeNewGame} from '../actions'
import Header from '../components/Header'

const mapDispatchToProps = (dispatch) => ({
	makeNewGame: (event, child) => {
		if (event.target.innerText === "Start Over") {
			dispatch(makeNewGame())
		}
	}
})

export default connect(
	null,
	mapDispatchToProps
)(Header)