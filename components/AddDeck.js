import React, { Component } from 'react'
import { View, Text, Button, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

import { setDeckTitle } from '../utils/api.js'
import { addDeck } from '../actions'
import { seaweed, aqua, darkWhite, blue, white } from '../utils/colors'

class AddDeck extends Component {
  state = {
    title: ''
  }
  submitHandler = () => {
    const title = this.state.title
    this.setState({title: ''})
    this.props.dispatch(addDeck(title))

    setDeckTitle(title)
    this.props.navigation.navigate('Deck', {deckId: title})
  }
  textChange = (e) => {
    this.setState({title: e})
  }
  render() {
    return (
      <View style={styles.background}>
        <View style={styles.deckTextContainer}>
          <Text style={styles.deckName}>Title of New Deck?</Text>
        </View>
        <View style={styles.textInputContainer}>
          <TextInput
            placeholder='Title'
            value={this.state.title}
            onChangeText={this.textChange}
            style={styles.textInput}
          />
        </View>
        <TouchableOpacity
          onPress={this.submitHandler}
          style={styles.submitBtn}
          disabled={this.state.title == ''}
        >
          <Text style={styles.text}>Create Deck</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

AddDeck.navigationOptions = {
  headerTitle: 'Add Deck'
}

export default connect()(AddDeck)

const styles = StyleSheet.create({
  background: {
    backgroundColor: darkWhite,
    flex: 1
  },
  deckTextContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 200
  },
  deckName: {
    fontSize: 30
  },
  textInput: {
    borderWidth: StyleSheet.hairlineWidth,
    backgroundColor: white,
    height: 40,
    borderRadius: 5,
    marginVertical: 10
  },
  textInputContainer: {
    marginHorizontal: 20,
    alignContent: 'center',
    justifyContent: 'center'
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
    marginTop: 20
  },
  text: {
    color: darkWhite
  }
})