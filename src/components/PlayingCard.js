import React from 'react'
import Paper from 'material-ui/Paper'
import '../styles/playing-card.css'

const getStyle = (index) => ({
	margin: "5%",
	display: "inline-block",
	position: index === 0 ? "static" : "absolute",
	left: index === 0 ? 0 : `${index * 20}px`
})

const getClassName = (index, shouldAnimate) => {
	if (index === 0 && shouldAnimate) { return "flip" }
	if (index === 1 && shouldAnimate) { return "slide" }
}


const PlayingCard = ({index, isHoleCard, suit, shouldAnimate, value}) => {
	return (
			<div
				className={`flipper ${getClassName(index, shouldAnimate)} ${isHoleCard ? "hole-card" : ""}`}
				style={getStyle(index)}>
				<Paper className="playing-card front" zDepth={1}>
					<img
						src={`${process.env.PUBLIC_URL}/img/cards/${value}_of_${suit}.svg`}
						alt={`${value} of ${suit}`}
						style={{ display: "block", width: "100%" }}/>
				</Paper>		
				<Paper className="playing-card back" zDepth={1}>
					<img
						src={`${process.env.PUBLIC_URL}/img/cards/cardback.png`}
						alt="back of card"
						style={{ display: "block", width: "100%" }}/>
				</Paper>
			</div>
	)
}
 
export default PlayingCard