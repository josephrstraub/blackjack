import React from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton'

const choices = ["Split", "Double", "Hit", "Stand"]

const PlayerChoices = ({ gameStatus, dealNewHand, dealCard, stand }) => (
	<div style={{textAlign: "center"}}>
		<FloatingActionButton disabled={gameStatus !== "playing"} onClick={stand}>Stand</FloatingActionButton>
		<FloatingActionButton disabled={gameStatus !== "playing"} onClick={dealCard}>Hit</FloatingActionButton>
		<FloatingActionButton disabled={gameStatus === "playing"} onClick={dealNewHand}>Deal</FloatingActionButton>
	</div>
)

export default PlayerChoices