import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()
import Hand from './Hand'
import PlayerChoices from './PlayerChoices'
 
const App = () => (
  <MuiThemeProvider>
  	<div>
	    <Hand />
	    <PlayerChoices />
	</div>
  </MuiThemeProvider>
)
 
export default App
