import React, {Component} from 'react'
import FontIcon from 'material-ui/FontIcon'
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation'
import Paper from 'material-ui/Paper'
import IconLocationOn from 'material-ui/svg-icons/communication/location-on'

const recentsIcon = <FontIcon className="material-icons">restore</FontIcon>
const favoritesIcon = <FontIcon className="material-icons">favorite</FontIcon>
const nearbyIcon = <IconLocationOn />

const Footer = () => (
	<Paper zDepth={1} style={{width: "100%"}}>
		<BottomNavigation selectedIndex={0} style={{marginTop: "-56px"}}>
			<BottomNavigationItem
				label="$500"
				icon={<i className="fa fa-usd" aria-hidden="true"></i>} />
			<BottomNavigationItem
				label="Hint"
				icon={nearbyIcon} />
		</BottomNavigation>
	</Paper>
)

export default Footer