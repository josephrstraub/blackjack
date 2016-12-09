import React from 'react'
import Snackbar from 'material-ui/Snackbar'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

const RightMenu = () => (
  <IconMenu
    iconButtonElement={
      <IconButton><MoreVertIcon /></IconButton>
    }
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
  >
    <MenuItem primaryText="Themes" />
    <MenuItem primaryText="Start Over" />
  </IconMenu>
)

const Header = () => (
	<AppBar
      id="header"
    	title="Title"
    	iconElementLeft={<IconButton><NavigationClose /></IconButton>}
    	iconElementRight={<RightMenu />} />        
)

export default Header