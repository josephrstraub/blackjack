import React from 'react'
import Slider from 'material-ui/Slider'

const WagerSlider = ({ bankroll, currentWager, gameStatus, changeWagerSize }) => (
  <Slider
  	min={100}
  	max={bankroll}
  	step={25}
  	defaultValue={100}
  	value={currentWager}
  	disabled={gameStatus === "playing"}
  	onChange={changeWagerSize} />
)

export default WagerSlider