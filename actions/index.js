export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const ADD_QUESTION = 'ADD_QUESTION'
export const REMOVE_DECK = 'REMOVE_DECK'

export function receiveDecks (decks) {
  return {
    type: RECEIVE_DECKS,
    decks
  }
}

export function addDeck (title) {
  return {
    type: ADD_DECK,
    title
  }
}

export function addQuestion (title, question, answer) {
  return {
    type: ADD_QUESTION,
    title,
    question,
    answer
  }
}

// export function removeDeck (title) {
//   return {
//     type: REMOVE_DECK,
//     title
//   }
// }