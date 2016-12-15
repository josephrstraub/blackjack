import React, {Component} from 'react'
import Chip from 'material-ui/Chip'
import FontIcon from 'material-ui/FontIcon'
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation'
import Paper from 'material-ui/Paper'
import IconLocationOn from 'material-ui/svg-icons/communication/location-on'
import PlayerChoicesContainer from '../containers/PlayerChoicesContainer'
import PokerChips from './PokerChips'
import Toggle from 'material-ui/Toggle'
import WagerSliderContainer from '../containers/WagerSliderContainer'

const spanStyles = {display: "flex", flexDirection: "column", justifyContent: "space-around", textAlign: "center"}
const h3Styles = {
	fontSize: ".7em",
	margin: 0
}

const Footer = ({ bankroll, wager, toggleAutoDeal }) => (
	<div id="footer">
		<section id="chips" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
			<PokerChips />
			<Chip className="tooltip">{wager}</Chip>
		</section>    
	    <WagerSliderContainer />	    
	    <PlayerChoicesContainer />
		<Paper zDepth={1} style={{display: "flex", justifyContent: "space-around", width: "100%", height: "57px"}}>
			<span style={spanStyles}><Toggle style={{width: "10%"}} onToggle={toggleAutoDeal} /><h3 style={h3Styles}>auto-deal</h3></span>
			<span style={spanStyles}><i className="fa fa-usd" aria-hidden="true"></i><h3 style={h3Styles}>{bankroll}</h3></span>
			<span style={spanStyles}><IconLocationOn /><h3 style={h3Styles}>help</h3></span>
		</Paper>
	</div>
)

export default Footer