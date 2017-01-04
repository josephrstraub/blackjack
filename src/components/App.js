import React from 'react'
import { connect } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()
import '../grid.css'
import Snackbar from 'material-ui/Snackbar'
import HeaderContainer from '../containers/HeaderContainer'
import FooterContainer from '../containers/FooterContainer'
import HandContainer from '../containers/HandContainer'
import GameOverDialogContainer from '../containers/GameOverDialogContainer'
import PlayerChoicesContainer from '../containers/PlayerChoicesContainer'
import PokerChipsSection from './PokerChipsSection'
import WagerSliderContainer from '../containers/WagerSliderContainer'
 
const App = ({ playerHands }) => (
  <MuiThemeProvider>
  	<div id="container">
  		<HeaderContainer />
  		<div id="main">
  			<ul style={{display: "flex", justifyContent: "center", margin: 0, padding: 0, listStyleType: "none"}}>
				<li className="hand"><HandContainer dealer={true} /></li>
			</ul>	
		</div>
		<section id="secondary">
			<ul id="player-hands" style={{display: "flex", justifyContent: playerHands.length > 1 ? "space-around" : "center", margin: 0, padding: 0, listStyleType: "none"}}>
				{ playerHands.map((hand, index) => (
					<li key={index} className="hand"><HandContainer dealer={false} index={index} /></li>
				)) }
			</ul>   
		    <WagerSliderContainer />	    
		    <PlayerChoicesContainer />
		    <FooterContainer />
		</section>
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
	    <GameOverDialogContainer />
	</div>
  </MuiThemeProvider>
)

const mapStateToProps = (state) => ({
	playerHands: state.player.hands
})
 
export default connect(mapStateToProps)(App)
