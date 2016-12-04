import React from 'react'
import PlayingCard from './PlayingCard'


const Hand = ({ hand }) => (
	<div>
		{hand.map(card => <PlayingCard value={card.value} suit={card.suit} />)}
	</div>
)
 
export default Hand