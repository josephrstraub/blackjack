import React from 'react'
import Slider from 'material-ui/Slider'

const pseudoStyles = {
	position: "absolute",
    top: "8px",
    left: "0px",
    width: "100%",
    height: "2px",
    backgroundColor: "#E0E0E0",
    zIndex: "-1"
}

const WagerSlider = ({ defaultValue, gameStatus, maxBet, wager, handleChange }) => (
	<div style={{position: "relative"}}>
		<Slider
			min={0}
			max={maxBet}
			step={50}
			defaultValue={defaultValue}
			value={wager}
			disabled={gameStatus === "playing"}
			onChange={handleChange}
			style={{width: `${maxBet/5}%`}} />		
		<div style={pseudoStyles}></div>
	</div>
)

export default WagerSlider