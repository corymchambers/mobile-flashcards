import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { View, Text, Button } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

import { addQuestion } from '../actions'
import { addCardToDeck } from '../utils/api'

export default function AddQuestion (props) {
  const [question, onChangeQuestion] = React.useState('');
  const [answer, onChangeAnswer] = React.useState('');
  const deckId = props.navigation.state.params.deckId
  const dispatch = useDispatch()
  const submit = () => {
    dispatch(addQuestion(deckId, question, answer))
    addCardToDeck(deckId, question, answer)
    props.navigation.navigate('Deck', {deckId: deckId})
  }

  return (
    <View>
      <Text>New Question</Text>
      <TextInput
        placeholder='Question'
        value={question}
        onChangeText={(text) => onChangeQuestion(text)}
      />
      <TextInput
        placeholder='Answer'
        value={answer}
        onChangeText={(text) => onChangeAnswer(text)}
      />
      <Button
        title='Submit'
        onPress={submit}
        disabled={!question || !answer}
      />
    </View>
  )
}
