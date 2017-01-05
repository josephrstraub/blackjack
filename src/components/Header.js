import React, { Component } from 'react'
import AppBar from 'material-ui/AppBar'
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

const RightMenu = ({ menuIsOpen, handleClick, handleRequestChange }) => (
  <IconMenu
    iconButtonElement={ <IconButton><MoreVertIcon /></IconButton> }
    open={menuIsOpen}
    targetOrigin={{horizontal: 'right', vertical: 'top'}}
    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
    onItemTouchTap={handleClick}
    onRequestChange={handleRequestChange}
  >
    <MenuItem primaryText="Themes" />
    <MenuItem primaryText="Start Over" />
  </IconMenu>
)

class Header extends Component {
  constructor() {
    super()
    this.state = { navCloseIsVisible: false, menuIsOpen: false }
  }
  handleClick(event, child) {
    this.setState({menuIsOpen: !this.state.menuIsOpen})
    this.setState({navCloseIsVisible: !this.state.navCloseIsVisible})
    if (event.target.innerText === "Start Over") {
      this.props.makeNewGame()
    }
  }
  handleRequestChange(open, reason) {
    this.setState({menuIsOpen: !this.state.menuIsOpen})
    this.setState({navCloseIsVisible: !this.state.navCloseIsVisible})
  }  
	render() {
    return (
      <AppBar
        id="header"
      	title="BlackJack"
        showMenuIconButton={this.state.navCloseIsVisible}
      	iconElementLeft={ this.state.navCloseIsVisible ? <IconButton><NavigationClose /></IconButton> : null }
      	iconElementRight={ <RightMenu menuIsOpen={this.state.menuIsOpen} handleClick={this.handleClick.bind(this)} handleRequestChange={this.handleRequestChange.bind(this)} /> } />
    ) 
  }     
}


export default Header