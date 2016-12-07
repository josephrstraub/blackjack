import React from 'react'
import Slider from 'material-ui/Slider'

const WagerSlider = ({ currentWager, gameStatus, changeWagerSize }) => (
  <Slider
  	min={100}
  	max={500}
  	step={25}
  	defaultValue={100}
  	value={currentWager}
  	disabled={gameStatus === "playing"}
  	onChange={changeWagerSize} />
)

export default WagerSlider