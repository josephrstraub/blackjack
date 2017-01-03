import React from 'react'
import { connect } from 'react-redux'
import PokerChips from './PokerChips'
import Tooltip from './Tooltip'

const PokerChipsSection = ({ number, wager }) => (
	<section id="chips" style={{display: "flex", alignItems: "center", position: "absolute", bottom: 0}}>
		<PokerChips />
		<Tooltip wager={wager}/>
	</section> 
)

const mapStateToProps = (state, ownProps) => ({
	number: ownProps.number,
	wager: state.player.baseWager
})

export default connect (mapStateToProps)(PokerChipsSection)