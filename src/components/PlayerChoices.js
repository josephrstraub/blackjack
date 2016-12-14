import React from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton'

const styles = {
	margin: "10px 5px"
}

const PlayerChoices = ({ canDoubleDown, canHit, canStand, canDeal, dealNewHand, dealCard, doubleDown, stand }) => (
	<div style={{textAlign: "center"}}>
		<FloatingActionButton disabled={!canDoubleDown} style={styles} onClick={doubleDown}>Double</FloatingActionButton>
		<FloatingActionButton disabled={!canStand} style={styles} onClick={stand}>Stand</FloatingActionButton>
		<FloatingActionButton disabled={!canHit} style={styles} onClick={dealCard}>Hit</FloatingActionButton>
		<FloatingActionButton disabled={!canDeal} style={styles} onClick={dealNewHand}>Deal</FloatingActionButton>
	</div>
)

export default PlayerChoices