import React, { Component } from 'react'
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'

import { deleteDeck } from '../utils/api'
import { removeDeck } from '../actions'
import { seaweed, aqua, darkWhite, blue, white } from '../utils/colors'

class Deck extends Component {
  deleteDeck = () => {
    const { deck } = this.props
    deleteDeck(deck).then(() => {
      this.props.dispatch(removeDeck(deck.title))
    })
  }

  render() {
    const { deck } = this.props
    if (typeof deck === 'undefined') {
      return this.props.navigation.navigate('DeckList')
    }

    return (
      <View style={styles.background}>
        <View style={styles.deckTextContainer}>
          <Text style={styles.deckName}>{deck.title}</Text>
          <Text style={styles.deckCount}>{deck.questions.length} cards</Text>
        </View>
        <TouchableOpacity
          onPress={() => {this.props.navigation.navigate('AddQuestion', {deckId: deck.title})}}
          style={styles.addCard}
        >
          <Text style={styles.text}>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {this.props.navigation.navigate('Quiz', {deckId: deck.title})}}
          style={styles.startQuiz}
        >
          <Text style={styles.text}>Start Quiz</Text>
        </TouchableOpacity>
        <Button title='Delete Deck' onPress={this.deleteDeck} />
      </View>
    )
  }
}

Deck.navigationOptions = navData => {
  const nav = navData.navigation
  const deckId = nav.getParam('deckId')
  return {
    headerTitle: deckId,
    headerRight: () => (
      <Button
        onPress={() => {nav.navigate('AddQuestion', {deckId: deckId})}}
        title='Add Card'
      />
    )
  }
}

function mapStateToProps (decks, props) {
  const deckId = props.navigation.state.params.deckId
  const deck = decks[deckId]
  if (typeof deck === 'undefined') {
    return props.navigation.navigate('DeckList')
  }
  return {
    deck
  }
}

export default connect(mapStateToProps)(Deck)

const styles = StyleSheet.create({
  background: {
    backgroundColor: darkWhite,
    flex: 1
  },
  deckTextContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 300
  },
  deckName: {
    fontSize: 30
  },
  deckCount: {
    fontSize: 12
  },
  addCard: {
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
  startQuiz: {
    alignItems: 'center',
    alignSelf: 'center',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'gray',
    width: 150,
    paddingVertical: 10,
    borderRadius: 5,
    backgroundColor: seaweed
  },
  text: {
    color: darkWhite
  }
})
