import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()
import HandContainer from '../containers/HandContainer'
import PlayerChoicesContainer from '../containers/PlayerChoicesContainer'
 
const App = () => (
  <MuiThemeProvider>
  	<div>
	    <HandContainer />
	    <PlayerChoicesContainer />
	</div>
  </MuiThemeProvider>
)
 
export default App
