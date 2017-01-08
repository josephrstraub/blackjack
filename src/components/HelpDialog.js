import React from 'react'
import { connect } from 'react-redux'
import { toggleHelpDialog } from '../actions'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'

const HelpDialog = ({ helpDialogIsVisible, proTip, toggleHelpDialog }) => {
	const actions = (
		<FlatButton
			label="Okay"
			primary={true}
			onTouchTap={toggleHelpDialog} />
	)
	return (
		<Dialog
			title="Pro Tip"
			actions={actions}
			modal={true}
			open={helpDialogIsVisible}
		>
			{proTip}
		</Dialog>
	)
}

const proTips = [
	"You're gonna want a better score than the dealer.",
	"Winning is more fun than losing.",
	"BlackJack is good...unless the dealer got it.",
	"Hit. Or maybe don't. I'm not sure."
]

const mapStateToProps = (state) => ({
	helpDialogIsVisible: state.ui.helpDialogIsOpen,
	proTip: proTips[Math.floor(Math.random()*proTips.length)]
})

const mapDispatchToProps = (dispatch) => ({
	toggleHelpDialog: () => dispatch(toggleHelpDialog())
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(HelpDialog)