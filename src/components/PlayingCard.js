import React from 'react'
import Paper from 'material-ui/Paper'

const getStyle = (index) => ({
	margin: "5%",
	textAlign: "center",
	display: "inline-block",
	position: index === 0 ? "static" : "absolute",
	left: index === 0 ? 0 : `${index * 20}px`
})


const PlayingCard = ({hideCard, index, suit, value}) => {
	let imageFile = hideCard ? "cardback.png" : `${value}_of_${suit}.svg`
	return (
		<Paper className="playing-card" style={getStyle(index)} zDepth={1}>
			<img
				src={`${process.env.PUBLIC_URL}/img/cards/${imageFile}`}
				alt={`${value} of ${suit}`}
				style={{ display: "block", width: "100%" }}/>
		</Paper>
	)
}
 
export default PlayingCard