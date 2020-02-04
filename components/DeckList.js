import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { AppLoading } from 'expo'

import { getDecks } from '../utils/api'
import { receiveDecks } from '../actions'

class DeckList extends Component {
  state = {
    ready: false
  }
  componentDidMount () {
    const { dispatch } = this.props

    getDecks()
      .then((decks) => dispatch(receiveDecks(decks)))
      .then(() => this.setState(() => ({
        ready: true
      })))
  }

  render() {
    const { decks, ready } = this.props

    console.log('render')

    if (ready === false) {
      return <AppLoading />
    }

    return (
      <View>
        <Text>Deck List</Text>
        <View>
          {Object.values(decks).map((deck) => {
            return (
              <View key={deck.title}>
                <TouchableOpacity onPress={() => {this.props.navigation.navigate('Deck', {deckId: deck.title})}}>
                  <Text>{deck.title}</Text>
                  <Text>{deck.questions.length} cards</Text>
                </TouchableOpacity>
              </View>
            )
        })}
        </View>
      </View>
    )
  }
}

function mapStateToProps (decks) {

  return {
    decks
  }
}

export default connect(mapStateToProps)(DeckList)