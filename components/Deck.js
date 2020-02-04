import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { connect } from 'react-redux'

import { deleteDeck } from '../utils/api'
import { removeDeck } from '../actions'

class Deck extends Component {
  deleteDeck = () => {
    const { deck } = this.props
    // deleteDeck(deck)
    // this.props.dispatch(removeDeck(deck.title))
  }

  render() {
    const { deck } = this.props
    console.log('render', deck.title)
    return (
      <View>
        <Text>{deck.title}</Text>
        <Text>{deck.questions.length} cards</Text>
        <Button title='Add Card' onPress={() => {this.props.navigation.navigate('AddQuestion', {deckId: deck.title})}} />
        <Button title='Start Quiz' onPress={() => {this.props.navigation.navigate('Quiz', {deckId: deck.title})}} />
        <Button title='Delete Deck' onPress={this.deleteDeck} />
      </View>
    )
  }
}

function mapStateToProps (decks, props) {
  const deckId = props.navigation.state.params.deckId
  const deck = decks[deckId]
  return {
    deck
  }
}

export default connect(mapStateToProps)(Deck)