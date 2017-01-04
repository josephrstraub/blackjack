import React from 'react'
import animate from 'hoc-react-animate'
import Chip from 'material-ui/Chip'

const Tooltip = ({ className, customStyles, number, wager }) => (
	<Chip
		backgroundColor={wager ? "rgba(50, 205, 50, .1)" : number > 21 ? "rgba(200, 0, 0, .1)" : "rgba(0, 188, 212, .1)"}
		className={`tooltip ${className}`}
		labelColor={wager ? "#32CD32" : number > 21 ? "red" : "#00BCD4"}
		style={{border: wager ? "1px solid rgba(50, 205, 50, .7)" : number > 21 ? "1px solid red" : "1px solid rgba(0, 188, 212, .7)", height: "29px", alignItems: "center", ...customStyles}}
	>
		{wager || number}
	</Chip>
)

export default animate(
  Tooltip,
  {
    watchedProps: ['wager'],
    timeout: 2000,
    className: "bloat"
  }
)