import React, {Component} from 'react'
import Chip from 'material-ui/Chip'
import FontIcon from 'material-ui/FontIcon'
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation'
import Paper from 'material-ui/Paper'
import IconLocationOn from 'material-ui/svg-icons/communication/location-on'
import PlayerChoicesContainer from '../containers/PlayerChoicesContainer'
import PokerChips from './PokerChips'
import WagerSliderContainer from '../containers/WagerSliderContainer'

const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>
const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>
const nearbyIcon = <IconLocationOn />

const Footer = ({ bankroll, wager }) => (
	<div id="footer">
		<section id="chips" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
			<PokerChips />
			<Chip className="tooltip">{wager}</Chip>
		</section>    
	    <WagerSliderContainer />	    
	    <PlayerChoicesContainer />
		<Paper zDepth={1} style={{width: "100%"}}>
			<BottomNavigation selectedIndex={0}>
				<BottomNavigationItem
					label={`$${bankroll}`}
					icon={<i className="fa fa-usd" aria-hidden="true"></i>} />
				<BottomNavigationItem
					label="Hint"
					icon={nearbyIcon} />
			</BottomNavigation>
		</Paper>
	</div>
)

export default Footer