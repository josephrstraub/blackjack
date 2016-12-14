import React from 'react'
import { connect } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()
import { getPlayerHands } from '../selectors'
import '../grid.css'
import { Col } from 'react-bootstrap'
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
  			<ul style={{display: "flex", justifyContent: "center", margin: 0, padding: 0, listStyleType: "none"}}>
				<li style={{position: "relative", width: "25%"}}><HandContainer dealer={true} /></li>
			</ul>
			<ul style={{display: "flex", justifyContent: playerHands.length > 1 ? "space-around" : "center", margin: 0, padding: 0, listStyleType: "none"}}>
				{ playerHands.map(hand => <li style={{position: "relative", width: "25%"}}><HandContainer dealer={false} id={hand.id} /></li>) }
			</ul>	
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
