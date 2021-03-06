import React from 'react'
import PlayingCard from './PlayingCard'
import PokerChipsSection from './PokerChipsSection'
import Tooltip from './Tooltip'


const Hand = ({ cards, hand, isDealerHand, score, shouldAnimate, wager }) => (	
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
		{ cards.length ? <Tooltip number={score} customStyles={{position: "absolute", top: "20px", left: "-40px"}} /> :null }
		{ !isDealerHand ? <PokerChipsSection wager={hand.wager.isDouble ? wager * 2 : wager}/> : null }
	</div>
)
 
export default Hand