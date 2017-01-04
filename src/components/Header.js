import React from 'react'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

const RightMenu = ({ makeNewGame }) => (
  <IconMenu
    iconButtonElement={
      <IconButton><MoreVertIcon /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
    onItemTouchTap={makeNewGame}
  >
    <MenuItem primaryText="Themes" />
    <MenuItem primaryText="Start Over" />
  </IconMenu>
)

const Header = (props) => (
	<AppBar
      id="header"
    	title="BlackJack"
    	iconElementLeft={<IconButton><NavigationClose /></IconButton>}
    	iconElementRight={<RightMenu {...props} />} />        
)

export default Header