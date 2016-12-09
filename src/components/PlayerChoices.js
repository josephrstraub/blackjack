import React from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton'

const styles = {
	margin: "10px 5px"
}

const choices = ["Split", "Double", "Hit", "Stand"]

const PlayerChoices = ({ gameStatus, dealNewHand, dealCard, stand }) => (
	<div style={{textAlign: "center"}}>
		<FloatingActionButton disabled={gameStatus !== "playing"} style={styles} onClick={stand}>Stand</FloatingActionButton>
		<FloatingActionButton disabled={gameStatus !== "playing"} style={styles} onClick={dealCard}>Hit</FloatingActionButton>
		<FloatingActionButton disabled={gameStatus === "playing"} style={styles} onClick={dealNewHand}>Deal</FloatingActionButton>
	</div>
)

export default PlayerChoices