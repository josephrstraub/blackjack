import React from 'react'
import Paper from 'material-ui/Paper'

const getStyle = (index) => ({
	width: "40%",
	margin: "5%",
	textAlign: "center",
	display: "inline-block",
	position: index === 0 ? "static" : "absolute",
	left: index === 0 ? 0 : `${index * 20}px`
})


const PlayingCard = ({index, value, suit}) => (
	<Paper style={getStyle(index)} zDepth={1}>
		<img
			src={process.env.PUBLIC_URL + `/img/cards/${value}_of_${suit}.svg`}
			alt={`${value} of ${suit}`}
			style={{ display: "block", width: "100%" }}/>
	</Paper>
)
 
export default PlayingCard