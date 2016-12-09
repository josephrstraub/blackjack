import React from 'react'
import { Col } from 'react-bootstrap'
import PlayingCard from './PlayingCard'


const Hand = ({ hand, hideCard }) => (
	<Col xs={6} xsOffset={3}>
		<div style={{position: "relative"}}>
			{hand.map((card, index) => (
				<PlayingCard
					key={index}
					hideCard={hideCard && index === 0}
					index={index}
					suit={card.suit}
					value={card.value} />
			))}
		</div>
	</Col>
)
 
export default Hand