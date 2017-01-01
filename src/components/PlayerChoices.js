import React from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton'

const styles = {
	margin: "10px 5px"
}

const PlayerChoices = ({ activeHandIndex, deck, enabledActions, deal, doubleDown, hit, split, stand }) => (
	<div style={{display: "flex", justifyContent: "center"}}>
		<FloatingActionButton disabled={!enabledActions.includes('split')} style={styles} onClick={split.bind(null, activeHandIndex)}>Split</FloatingActionButton>
		<FloatingActionButton disabled={!enabledActions.includes('double')} style={styles} onClick={doubleDown.bind(null, activeHandIndex, deck[0])}>Double</FloatingActionButton>
		<FloatingActionButton disabled={!enabledActions.includes('stand')} style={styles} onClick={stand.bind(null, activeHandIndex)}>Stand</FloatingActionButton>
		<FloatingActionButton disabled={!enabledActions.includes('hit')} style={styles} onClick={hit.bind(null, activeHandIndex, deck[0])}>Hit</FloatingActionButton>
		<FloatingActionButton
			disabled={!enabledActions.includes('deal')}
			className={"attention-btn"}
			secondary
			style={styles}
			onClick={deal.bind(null, activeHandIndex, deck.slice(0, 4))}
		>
			Deal
		</FloatingActionButton>
	</div>
)

export default PlayerChoices