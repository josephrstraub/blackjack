import React from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton'

const choices = ["Split", "Double", "Hit", "Stand"]

const PlayerChoices = ({ nextCard, dealCard }) => (
	<div>
		{choices.map((choice, index) => (
			<FloatingActionButton key={index} onClick={dealCard.bind(null, nextCard)}>{choice}</FloatingActionButton>
		))}
	</div>
)

export default PlayerChoices