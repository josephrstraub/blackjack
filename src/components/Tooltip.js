import React from 'react'
import animate from 'hoc-react-animate'
import Chip from 'material-ui/Chip'

const Tooltip = ({ className, customStyles, number, wager }) => (
	<Chip
		backgroundColor="rgba(50, 205, 50, .1)"
		className={`tooltip ${className}`}
		labelColor={"#32CD32"}
		style={{border: "1px solid rgba(50, 205, 50, .7)", height: "29px", alignItems: "center", ...customStyles}}
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