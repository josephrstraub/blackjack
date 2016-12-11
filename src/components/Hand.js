import React from 'react'
import { Col } from 'react-bootstrap'
import PlayingCard from './PlayingCard'


const Hand = ({ firstCardIsVisible, hand, isDealerHand }) => (
	<Col xs={6} xsOffset={3}>
		<div style={{position: "relative"}}>
			{hand.map((card, index) => (
				<PlayingCard
					key={index}
					index={index}
					isHoleCard={index === 0 && isDealerHand}
					shouldAnimate={firstCardIsVisible && isDealerHand}
					suit={card.suit}
					value={card.value} />
			))}
		</div>
	</Col>
)
 
export default Hand