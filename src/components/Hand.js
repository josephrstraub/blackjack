import React from 'react'
import { Col } from 'react-bootstrap'
import PlayingCard from './PlayingCard'


const Hand = ({ cards, isDealerHand, shouldAnimate }) => (	
	<div>
		{cards.map((card, index) => (
			<PlayingCard
				key={index}
				index={index}
				isHoleCard={index === 0 && isDealerHand}
				animation={shouldAnimate && index === 0 ? "flip" : shouldAnimate && index === 1 ? "slide" : ""}
				suit={card.suit}
				name={card.name} />
		))}
	</div>
)
 
export default Hand