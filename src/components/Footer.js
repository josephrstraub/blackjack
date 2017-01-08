import React from 'react'
import Paper from 'material-ui/Paper'
import IconLocationOn from 'material-ui/svg-icons/communication/location-on'
import Toggle from 'material-ui/Toggle'

const spanStyles = {display: "flex", flexDirection: "column", justifyContent: "space-around", textAlign: "center"}
const h3Styles = {
	fontSize: ".7em",
	margin: 0
}

const Footer = ({ autoDeal, bankroll, wager, toggleAutoDeal, toggleHelpDialog }) => (
	<Paper id="footer" zDepth={1} style={{display: "flex", justifyContent: "space-around", width: "100%", height: "57px"}}>
		<span style={spanStyles}><Toggle toggled={autoDeal} style={{width: "10%"}} onToggle={toggleAutoDeal} /><h3 style={h3Styles}>auto-deal</h3></span>
		<span style={spanStyles}><i className="fa fa-usd" aria-hidden="true"></i><h3 style={h3Styles}>{bankroll}</h3></span>
		<span style={spanStyles}><i className="fa fa-question" aria-hidden="true" onClick={toggleHelpDialog}></i><h3 style={h3Styles}>help</h3></span>
	</Paper>
)

export default Footer