import React from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()
import '../grid.css'
import { Grid, Row, Col } from 'react-bootstrap'
import HandContainer from '../containers/HandContainer'
import PlayerChoicesContainer from '../containers/PlayerChoicesContainer'
 
const App = () => (
  <MuiThemeProvider>
  	<Grid>
  		<Row>
	    	<Col xs={6} xsOffset={3}>
	    		<HandContainer />
	    	</Col>
	    </Row>
	    <Row>
	    	<Col xs={4} xsOffset={4}>
	    		<PlayerChoicesContainer />
	    	</Col>
	    </Row>
	</Grid>
  </MuiThemeProvider>
)
 
export default App
