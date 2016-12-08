import React from 'react'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'

const GameOverDialog = ({ outOfMoney, makeNewGame }) => {
	const actions = (
		<FlatButton
			label="New Game"
			primary={true}
			onTouchTap={makeNewGame} />
	)
	return (
		<Dialog
			title="You ran out of money"
			actions={actions}
			modal={true}
			open={outOfMoney}
		>
			But it's okay. We'll bankroll you.
		</Dialog>
	)
}

export default GameOverDialog