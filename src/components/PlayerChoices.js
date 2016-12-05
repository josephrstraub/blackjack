import React from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton'

const choices = ["Split", "Double", "Hit", "Stand"]

const PlayerChoices = ({ dealNewHand, dealCard }) => (
	<div>
		{choices.map((choice, index) => (
			<FloatingActionButton key={index} onClick={dealCard}>{choice}</FloatingActionButton>
		))}
		<FloatingActionButton onClick={dealNewHand}>Deal</FloatingActionButton>
	</div>
)

export default PlayerChoices