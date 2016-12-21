import React from 'react'
import HandContainer from '../containers/HandContainer'
import PokerChips from './PokerChips'

const listStyles = (isMultiple) => ({
	display: "flex",
	justifyContent: isMultiple ? "space-around" : "center",
	margin: 0,
	padding: 0,
	listStyleType: "none",
	height: "245px"
})

const listItemStyles = {
	position: "relative",
	width: "25%"
}

const PlayerHandsSection = ({ hands, wager }) => (
	<ul style={listStyles(hands.length > 1)}>
		{ hands.map((hand, index) => (
			<li key={index} style={listItemStyles}>
				<HandContainer dealer={false} index={index} dog="yo" />
				<PokerChips />
			</li>
		))}
	</ul>
)

export default PlayerHandsSection