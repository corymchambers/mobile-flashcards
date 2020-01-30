import React, { Component } from 'react'
import { View, Text, Button, TextInput } from 'react-native'
import { connect } from 'react-redux'

import { setDeckTitle } from '../utils/api.js'

import { addDeck } from '../actions'

class AddDeck extends Component {
  state = {
    title: ''
  }
  submitHandler = () => {
    const title = this.state.title
    this.props.dispatch(addDeck(title))

    setDeckTitle(title)
  }
  textChange = (e) => {
    this.setState({title: e})
  }
  render() {
    return (
      <View>
        <Text>Title of New Deck?</Text>
        <TextInput
          style={{backgroundColor: 'gray'}}
          onChangeText={this.textChange}
        />
        <Button
          title='Create Deck'
          onPress={this.submitHandler}
          disabled={this.state.title == ''}
        />
      </View>
    )
  }
}

export default connect()(AddDeck)