import React from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import Toggle from 'material-ui/Toggle'
import { Col } from 'react-bootstrap'

const styles = {
	margin: "10px 5px"
}

const PlayerChoices = ({ canDoubleDown, canHit, canSplit, canStand, canDeal, dealNewHand, dealCard, doubleDown, split, stand, toggleAutoDeal }) => (
	<div style={{display: "flex", justifyContent: "center"}}>
		<FloatingActionButton disabled={!canSplit} style={styles} onClick={split}>Split</FloatingActionButton>
		<FloatingActionButton disabled={!canDoubleDown} style={styles} onClick={doubleDown}>Double</FloatingActionButton>
		<FloatingActionButton disabled={!canStand} style={styles} onClick={stand}>Stand</FloatingActionButton>
		<FloatingActionButton disabled={!canHit} style={styles} onClick={dealCard}>Hit</FloatingActionButton>
		<FloatingActionButton
			className={canDeal ? "attention-btn" : ""}
			secondary
			disabled={!canDeal}
			style={styles}
			onClick={dealNewHand}
		>
			Deal
		</FloatingActionButton>
	</div>
)

export default PlayerChoices