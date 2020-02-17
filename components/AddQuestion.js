import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'

import { addQuestion } from '../actions'
import { addCardToDeck } from '../utils/api'
import { seaweed, aqua, darkWhite, blue, white } from '../utils/colors'

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
    <View style={styles.background}>
      <View style={styles.textInputContainer}>
        <TextInput
          placeholder='Question'
          value={question}
          onChangeText={(text) => onChangeQuestion(text)}
          placeholder='Question'
          style={styles.textInput}
        />
        <TextInput
          placeholder='Answer'
          value={answer}
          onChangeText={(text) => onChangeAnswer(text)}
          placeholder='Answer'
          style={styles.textInput}
        />
      </View>
      <TouchableOpacity
        onPress={submit}
        disabled={!question || !answer}
        style={styles.submitBtn}
      >
        <Text style={styles.text}>Submit</Text>
      </TouchableOpacity>
  </View>
  )
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: darkWhite,
    flex: 1
  },
  textInputContainer: {
    marginHorizontal: 20,
    height: 300,
    alignContent: 'center',
    justifyContent: 'center'
  },
  textInput: {
    borderWidth: StyleSheet.hairlineWidth,
    backgroundColor: white,
    height: 40,
    borderRadius: 5,
    marginVertical: 10
  },
  submitBtn: {
    alignItems: 'center',
    alignSelf: 'center',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'gray',
    width: 150,
    paddingVertical: 10,
    borderRadius: 5,
    backgroundColor: blue,
    marginBottom: 20
  },
  text: {
    color: darkWhite
  }
})
