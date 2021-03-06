import { RECEIVE_DECKS, ADD_DECK, ADD_QUESTION, REMOVE_DECK } from '../actions'

function decks (state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECKS:
      return {
        ...state,
        ...action.decks
      }
    case ADD_DECK:
      const newDeck = {
        [action.title]: {
          questions: [],
          title: action.title
        }
      }
      return {
        ...state,
        ...newDeck
      }
    case ADD_QUESTION:
      const newQuestion = {
        question: action.question,
        answer: action.answer
      }
      const title = action.title
      const mergedQuestions = state[title].questions.concat(newQuestion)

      const updatedDeck = {
        [title] : {
          questions: mergedQuestions,
          title: title
        }
      }
      return {
        ...state,
        ...updatedDeck
      }
    case REMOVE_DECK:
      const newState = state
      delete newState[action.title]
      return {
        ...state,
        ...newState
      }
    default:
      return state
  }
}

export default decks
