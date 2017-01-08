import React, { Component } from 'react'
import { getActiveHandIndex } from '../selectors'
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
import WagerSliderContainer from '../containers/WagerSliderContainer'
 
class App extends Component {
	componentWillReceiveProps(nextProps) {
		if (this.props.activeHandIndex !== nextProps.activeHandIndex && nextProps.activeHandIndex !== -1 && nextProps.playerHands.length > 1) {
			this.animate(
				nextProps.activeHandIndex,
				document.querySelector(".hand.active").offsetLeft + 40
			)
		}
	}
	animate(index, currentPosition) {
		setTimeout(() => {
			let glass = document.querySelector(".glass")
			glass.style.height = `${document.querySelector("#player-hands .hand").scrollHeight * 1.2}px`
			glass.style.width = `${document.querySelector("#player-hands .hand").scrollWidth * .75}px`
			let nextPosition = document.querySelectorAll("#player-hands .hand")[index].offsetLeft + 40
			glass.animate([
				{left: `${currentPosition}px`},
				{left: `${nextPosition}px`},
			],
			{duration: 500, fill: "forwards"})
		}, 500)
	}
	render() {
		return (
		  <MuiThemeProvider>
		  	<div id="container">
		  		<HeaderContainer />
		  		<div id="main">
		  			<ul style={{display: "flex", justifyContent: "center", margin: 0, padding: 0, listStyleType: "none"}}>
						<li className="hand"><HandContainer dealer={true} /></li>
					</ul>	
				</div>
				<section id="secondary">
					<div style={{position: "relative"}}>
						<div className={`glass ${this.props.playerHands.length < 2 ? "glass-hidden" : ""}`}></div>
						<ul id="player-hands" style={{display: "flex", justifyContent: this.props.playerHands.length > 1 ? "space-around" : "center", margin: 0, padding: 0, listStyleType: "none"}}>
							{ this.props.playerHands.map((hand, index) => (
								<li key={index} className={`hand ${index === this.props.activeHandIndex ? "active" : ""}`}><HandContainer dealer={false} index={index} /></li>
							)) }
						</ul>
					</div>   
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
	}
}

const mapStateToProps = (state) => ({
	activeHandIndex: getActiveHandIndex(state),
	playerHands: state.player.hands
})
 
export default connect(mapStateToProps)(App)
