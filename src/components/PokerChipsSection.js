import React from 'react'
import { connect } from 'react-redux'
import PokerChips from './PokerChips'
import Tooltip from './Tooltip'

const PokerChipsSection = ({ wager }) => (
	<section id="chips" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
		<PokerChips />
		<Tooltip wager={wager}/>
	</section> 
)

const mapStateToProps = (state) => ({
	wager: state.player.baseWager
})

export default connect (mapStateToProps)(PokerChipsSection)