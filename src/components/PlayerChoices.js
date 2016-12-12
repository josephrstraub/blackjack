import React from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton'

const styles = {
	margin: "10px 5px"
}

const PlayerChoices = ({ canDoubleDown, gameStatus, dealNewHand, dealCard, doubleDown, stand }) => (
	<div style={{textAlign: "center"}}>
		<FloatingActionButton disabled={!canDoubleDown || gameStatus !== "playing"} style={styles} onClick={doubleDown}>Double</FloatingActionButton>
		<FloatingActionButton disabled={gameStatus !== "playing"} style={styles} onClick={stand}>Stand</FloatingActionButton>
		<FloatingActionButton disabled={gameStatus !== "playing"} style={styles} onClick={dealCard}>Hit</FloatingActionButton>
		<FloatingActionButton disabled={gameStatus === "playing"} style={styles} onClick={dealNewHand}>Deal</FloatingActionButton>
	</div>
)

export default PlayerChoices