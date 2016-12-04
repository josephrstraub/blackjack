import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import PlayingCard from './PlayingCard'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()
 
const App = () => (
  <MuiThemeProvider>
    <PlayingCard value="4" suit="hearts"/>
  </MuiThemeProvider>
)
 
export default App
