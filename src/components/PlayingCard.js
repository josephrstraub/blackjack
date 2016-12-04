import React from 'react'
import Paper from 'material-ui/Paper'

const style = {
	height: 130,
	width: 100,
	margin: 20,
	textAlign: 'center',
	display: 'inline-block'
}

const PlayingCard = ({value, suit}) => (
	<Paper style={style} zDepth={1}>
		<img
			src={process.env.PUBLIC_URL + `/img/cards/${value}_of_${suit}.svg`}
			alt={`${value} of ${suit}`}
			style={{width: "100%"}}/>
	</Paper>
)
 
export default PlayingCard