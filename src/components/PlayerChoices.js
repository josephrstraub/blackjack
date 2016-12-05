import React from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton'

const choices = ["Split", "Double", "Hit", "Stand"]

const PlayerChoices = ({ dealNewHand, dealCard, stand }) => (
	<div>
		<FloatingActionButton onClick={stand}>Stand</FloatingActionButton>
		<FloatingActionButton onClick={dealCard}>Hit</FloatingActionButton>
		<FloatingActionButton onClick={dealNewHand}>Deal</FloatingActionButton>
	</div>
)

export default PlayerChoices