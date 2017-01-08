const ui = (state = { helpDialogIsOpen: false }, action) => {
	switch(action.type) {
		case 'HELP_DIALOG_TOGGLE': return { ...state, helpDialogIsOpen: !state.helpDialogIsOpen }
		default: return state
	}
}

export default ui