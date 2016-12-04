export const newHand = () => ({
	type: 'NEW_HAND'
})

export const dealCardToPlayer = (card) => ({
	type: 'CARD_DEAL_PLAYER',
	card
})

export const dealCardToDealer = (card) => ({
	type: 'CARD_DEAL_DEALER',
	card
})