import React from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton'

const choices = ["Split", "Double", "Hit", "Stand"]

const PlayerChoices = () => (
	<div>
		{choices.map(choice => <FloatingActionButton>{choice}</FloatingActionButton>)}
	</div>
)

export default PlayerChoices