import React from 'react'
import { Col } from 'react-bootstrap'
import PlayingCard from './PlayingCard'


const Hand = ({ hand, isDealerHand, shouldAnimate }) => (
	<Col xs={6} xsOffset={3}>
		<div style={{position: "relative"}}>
			{hand.map((card, index) => (
				<PlayingCard
					key={index}
					index={index}
					isHoleCard={index === 0 && isDealerHand}
					animation={shouldAnimate && index === 0 ? "flip" : shouldAnimate && index === 1 ? "slide" : ""}
					suit={card.suit}
					name={card.name} />
			))}
		</div>
	</Col>
)
 
export default Hand