import React from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import Toggle from 'material-ui/Toggle'
import { Col } from 'react-bootstrap'

const styles = {
	margin: "10px 5px"
}

const PlayerChoices = ({ activeHandIndex, nextCard, dealCard, split }) => (
	<div style={{display: "flex", justifyContent: "center"}}>
		<FloatingActionButton style={styles} onClick={split.bind(null, activeHandIndex)}>Split</FloatingActionButton>
		<FloatingActionButton
			className={"attention-btn"}
			secondary
			disabled={false}
			style={styles}
			onClick={dealCard.bind(null, activeHandIndex, nextCard)}
		>
			Deal
		</FloatingActionButton>
	</div>
)

export default PlayerChoices