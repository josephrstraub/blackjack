import hands from './hands'

const state = [
  { id: 1, isDealer: false, cards: [{isVisible: true, name: "8", suit: "clubs", value: [8]}, {isVisible: true, name: "8", suit: "hearts", value: [8]}] },
  { isDealer: true, cards: [{isVisible: false, name: "jack", suit: "clubs", value: [10]}, {isVisible: true, name: "3", suit: "diamonds", value: [3]}] }
]

describe('hands reducer', () => {
  it('should return the initial state', () => {
    expect(
      hands(undefined, {})
    ).toEqual([
      {id: 1, isDealer: false, cards: []},
      {isDealer: true, cards: []}
    ])
  })

  it('should handle SPLIT', () => {
    expect(
      hands(state, {
        type: 'SPLIT',
        id: 1
      })
    ).toEqual([
        { id: 1, isDealer: false, cards: [{isVisible: true, name: "8", suit: "clubs", value: [8]}] },
        { id: 2, isDealer: false, cards: [{isVisible: true, name: "8", suit: "hearts", value: [8]}] },
        { isDealer: true, cards: [{isVisible: false, name: "jack", suit: "clubs", value: [10]}, {isVisible: true, name: "3", suit: "diamonds", value: [3]}] }
      ])
  })

  it('should reveal hidden card', () => {
    expect(
      hands(state, {
        type: 'HIDDEN_CARD_REVEAL'
      })
    ).toEqual([
      { id: 1, isDealer: false, cards: [{isVisible: true, name: "8", suit: "clubs", value: [8]}, {isVisible: true, name: "8", suit: "hearts", value: [8]}] },
      { isDealer: true, cards: [{isVisible: true, name: "jack", suit: "clubs", value: [10]}, {isVisible: true, name: "3", suit: "diamonds", value: [3]}] }
    ])
  })

})