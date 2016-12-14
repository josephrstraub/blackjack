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

const WagerSlider = ({ defaultValue, isDisabled, maxBet, wager, handleChange }) => (
	<div style={{position: "relative", width: "80%", margin: "auto"}}>
		<Slider
			min={0}
			max={maxBet}
			step={50}
			defaultValue={defaultValue}
			value={wager}
			disabled={isDisabled}
			onChange={handleChange}
			style={{width: `${maxBet/5}%`}}
			sliderStyle={{marginBottom: "24px"}} />		
		<div style={pseudoStyles}></div>
	</div>
)

export default WagerSlider