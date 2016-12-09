import React from 'react'
import { Col } from 'react-bootstrap'
import PlayingCard from './PlayingCard'


const Hand = ({ hand }) => (
	<Col xs={6} xsOffset={3}>
		<div style={{position: "relative"}}>
			{hand.map((card, index) => <PlayingCard key={index} index={index} value={card.value} suit={card.suit} />)}
		</div>
	</Col>
)
 
export default Hand