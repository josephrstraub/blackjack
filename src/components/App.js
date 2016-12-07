import React from 'react'
import { connect } from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()
import '../grid.css'
import { Grid, Row, Col } from 'react-bootstrap'
import Snackbar from 'material-ui/Snackbar'
import HeaderContainer from '../containers/HeaderContainer'
import FooterContainer from '../containers/FooterContainer'
import HandContainer from '../containers/HandContainer'
import PlayerChoicesContainer from '../containers/PlayerChoicesContainer'
import PokerChips from './PokerChips'
import WagerSliderContainer from '../containers/WagerSliderContainer'
 
const App = ({ status }) => (
  <MuiThemeProvider>
  	<Grid fluid style={{padding: 0}}>
  		<Row>
	    	<Col xs={12}>
	    		<HeaderContainer />
	    	</Col>
	    </Row>  		
	    <Row>
	    	<Col xs={6} xsOffset={3}>
	    		<HandContainer dealer={true} />
	    	</Col>
	    </Row>
	    <Row>
	    	<Col xs={6} xsOffset={3}>
	    		<HandContainer dealer={false} />
	    	</Col>
	    </Row>
	    <Row>
	    	<Col xs={4} xsOffset={4} lg={2} lgOffset={5}>
	    		<PokerChips />
	    	</Col>
	    </Row>	    
	    <Row>
	    	<Col xs={10} xsOffset={1} lg={4} lgOffset={4}>
	    		<WagerSliderContainer />
	    	</Col>
	    </Row>	    
	    <Row>
	    	<Col xs={12} lg={4} lgOffset={4}>
	    		<PlayerChoicesContainer />
	    	</Col>
	    </Row>	    
	    <Row>
	    	<Col xs={12} style={{position: "fixed", bottom: "28px", left: 0, padding: 0}}>
	    		<FooterContainer />
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
