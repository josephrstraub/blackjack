import React from 'react'
import animate from 'hoc-react-animate'
import Chip from 'material-ui/Chip'

const Tooltip = ({ className, wager }) => (
	<Chip className={`tooltip ${className}`}>{wager}</Chip>
)

export default animate(
  Tooltip,
  {
    watchedProps: ['wager'],
    timeout: 2000,
    className: "bloat"
  }
)