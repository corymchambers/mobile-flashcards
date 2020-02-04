import { AsyncStorage } from 'react-native'

const FLASHCARDS_STORAGE_KEY = 'MobileFlashcards'

export function getDecks () {
  return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
    .then(formatResults)
}

export function getDeck () {
  return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
}

export function setDeckTitle (title) {
  return AsyncStorage.mergeItem(FLASHCARDS_STORAGE_KEY, JSON.stringify({
    [title]: {
      questions: [],
      title: title
    }
  }))
}

export function addCardToDeck (title, question, answer) {
  return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
    .then((results) => {
      const decks = JSON.parse(results)
      const currQuestions = decks[title].questions
      const newQuestions = currQuestions.concat({ question: question, answer: answer})
      AsyncStorage.mergeItem(FLASHCARDS_STORAGE_KEY, JSON.stringify({
        [title]: {
          questions: newQuestions,
          title: title
        }
      }))
    })
}

export function deleteDeck (title) {
  return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
    .then((results) => {
      const decks = JSON.parse(results)
      const newDecks = Object.values(decks).filter(deck => deck.title !== title)
      AsyncStorage.mergeItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(newDecks))
    })
}

function formatResults (results) {
  return results === null
  ? setDummyData()
  : JSON.parse(results)
}

function setDummyData() {
  const dummyData = {
    'Deck1': {
      title: 'Deck1',
      questions: [
        {
          question: 'What is blue?',
          answer: 'A color'
        },
        {
          question: 'What is 7?',
          answer:'A number'
        }
      ]
    }
  }

  AsyncStorage.setItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(dummyData))

  return dummyData
}