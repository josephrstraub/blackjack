import React from 'react'
import PlayingCard from './PlayingCard'


const Hand = ({ hand }) => (
	<div style={{position: "relative"}}>
		{hand.map((card, index) => <PlayingCard key={index} index={index} value={card.value} suit={card.suit} />)}
	</div>
)
 
export default Hand