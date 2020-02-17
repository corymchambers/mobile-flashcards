import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { AppLoading } from 'expo'

import { getDecks } from '../utils/api'
import { receiveDecks } from '../actions'
import { seaweed, aqua, darkWhite, blue, white } from '../utils/colors'

class DeckList extends Component {
  state = {
    ready: false
  }
  componentDidMount () {
    const { dispatch } = this.props

    getDecks()
        .then((decks) => {
            dispatch(receiveDecks(decks))
        })
        .then(() => this.setState(
            () => ({
                ready: true
            })
        ))
  }

  render() {
    const { decks, ready } = this.props

    if (ready === false) {
      return <AppLoading />
    }

    return (
      <View style={styles.container}>
        {Object.values(decks).map((deck) => {
          return (
            <View style={styles.deck} key={deck.title}>
              <TouchableOpacity onPress={() => {this.props.navigation.navigate('Deck', {deckId: deck.title})}}>
                <Text style={styles.deckName}>{deck.title}</Text>
                <Text style={styles.deckCount}>{deck.questions.length} cards</Text>
              </TouchableOpacity>
            </View>
          )
        })}
      </View>
    )
  }
}

DeckList.navigationOptions = {
  headerTitle: ''
}

function mapStateToProps (decks) {
  return {
    decks
  }
}

export default connect(mapStateToProps)(DeckList)

const styles = StyleSheet.create({
  container: {
    backgroundColor: darkWhite,
    flex: 1
  },
  deckName: {
    alignSelf: 'center',
    fontSize: 30
  },
  deckCount: {
    alignSelf: 'center',
    fontSize: 12
  },
  deck: {
    marginVertical: 20
  }
})
