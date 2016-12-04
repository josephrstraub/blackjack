import React from 'react'
import PlayingCard from './PlayingCard'

const cards = [
	{value: 10, suit: "clubs"},
	{value: "ace", suit: "diamonds"},
]

const Hand = ({value, suit}) => (
	<div>
		{cards.map(card => <PlayingCard value={card.value} suit={card.suit} />)}
	</div>
)
 
export default Hand