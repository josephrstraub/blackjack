import React from 'react'
import { connect } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()
import '../grid.css'
import { Grid, Row, Col } from 'react-bootstrap'
import Snackbar from 'material-ui/Snackbar'
import HandContainer from '../containers/HandContainer'
import PlayerChoicesContainer from '../containers/PlayerChoicesContainer'
 
const App = ({ status }) => (
  <MuiThemeProvider>
  	<Grid>
  		<Row>
	    	<Col xs={6} xsOffset={3}>
	    		<HandContainer dealer={true}/>
	    	</Col>
	    </Row>
	    <Row>
	    	<Col xs={6} xsOffset={3}>
	    		<HandContainer dealer={false}/>
	    	</Col>
	    </Row>
	    <Row>
	    	<Col xs={12} lg={4} lgOffset={4}>
	    		<PlayerChoicesContainer />
	    	</Col>
	    </Row>
	   	<Snackbar
			open={status === "lost"}
			message={"Dealer wins. Sorry."}
			autoHideDuration={2000} />
		<Snackbar
			open={status === "won"}
			message={"You win!"}
			autoHideDuration={2000} />
		<Snackbar
			open={status === "push"}
			message={"You pushed this hand."}
			autoHideDuration={2000} />
	</Grid>
  </MuiThemeProvider>
)

const mapStateToProps = (state) => ({
	status: state.status
})
 
export default connect(mapStateToProps)(App)
