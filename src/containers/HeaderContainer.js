import { connect } from 'react-redux'
import { deal, dealCardToPlayer , terminalDeal} from '../actions'
import Header from '../components/Header'

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(Header)