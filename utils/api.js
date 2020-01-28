import { AsyncStorage } from 'react-native'

const FLASHCARDS_STORAGE_KEY = 'MobileFlashcards'

export function getDecks () {
  return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
}

export function getDeck () {
  return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
  //then filter
}

export function setDeckTitle () {
  // return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
}

export function addCardToDeck () {
  // return AsyncStorage.getItem(FLASHCARDS_STORAGE_KEY)
}