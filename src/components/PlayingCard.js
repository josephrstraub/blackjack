import React from 'react'
import Paper from 'material-ui/Paper'

const style = {
	width: "40%",
	margin: "5%",
	textAlign: 'center',
	display: 'inline-block'
}

const PlayingCard = ({value, suit}) => (
	<Paper style={style} zDepth={1}>
		<img
			src={process.env.PUBLIC_URL + `/img/cards/${value}_of_${suit}.svg`}
			alt={`${value} of ${suit}`}
			style={{ display: "block", width: "100%" }}/>
	</Paper>
)
 
export default PlayingCard