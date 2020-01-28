const RECEIVE_DECKS = 'RECEIVE_DECKS'
const ADD_DECK = 'ADD_DECK'

export function receiveDecks (decks) {
  return {
    type: RECEIVE_DECKS,
    decks
  }
}

export function addDeck (title) {

  // need to update to async storage
  
  return {
    type: ADD_DECK,
    title
  }
}