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
  const current = this.getDecks()
  return AsyncStorage.setItem(FLASHCARDS_STORAGE_KEY, JSON.stringify(title))
}

export function addCardToDeck () {
  // return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
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