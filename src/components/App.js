import React from 'react'
import { connect } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()
import { getPlayerHands } from '../selectors'
import '../grid.css'
import Snackbar from 'material-ui/Snackbar'
import HeaderContainer from '../containers/HeaderContainer'
import FooterContainer from '../containers/FooterContainer'
import HandContainer from '../containers/HandContainer'
import GameOverDialogContainer from '../containers/GameOverDialogContainer'
 
const App = ({ playerHands }) => (
  <MuiThemeProvider>
  	<div id="container">
  		<HeaderContainer />
  		<div id="main"> 		
			<HandContainer dealer={true} />
			{ playerHands.map(hand => <HandContainer dealer={false} id={hand.id} />) }	
		</div>
		<div id="snackbar-container">    
			<Snackbar
				open={status === "lost"}
				message={"Dealer wins. Sorry."}
				autoHideDuration={2000} />
			<Snackbar
				open={status === "won"}
				message={"You win!"}
				autoHideDuration={2000} />
			<Snackbar
				open={status === "push"}
				message={"You pushed this hand."}
				autoHideDuration={2000} />
		</div>
		<FooterContainer />
	    <GameOverDialogContainer />
	</div>
  </MuiThemeProvider>
)

const mapStateToProps = (state) => ({
	playerHands: getPlayerHands(state)
})
 
export default connect(mapStateToProps)(App)
