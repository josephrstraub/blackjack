import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import PlayingCard from './PlayingCard'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()
 
const App = () => (
  <MuiThemeProvider>
    <PlayingCard />
  </MuiThemeProvider>
)
 
export default App
