import React from 'react'
import Paper from 'material-ui/Paper'

const style = {
	width: "40%",
	margin: "5%",
	textAlign: 'center',
	display: 'inline-block'
}

const PlayingCard = ({index, value, suit}) => (
	<Paper style={{...style, position: "absolute", left: `${index * 20}px`}} zDepth={1}>
		<img
			src={process.env.PUBLIC_URL + `/img/cards/${value}_of_${suit}.svg`}
			alt={`${value} of ${suit}`}
			style={{ display: "block", width: "100%" }}/>
	</Paper>
)
 
export default PlayingCard