import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { connect } from 'react-redux'

class Deck extends Component {
  deleteDeck = () => {
    console.log('delete deck')
  }

  render() {
    const { deck } = this.props
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