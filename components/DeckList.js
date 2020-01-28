import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
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
    const { decks } = this.props
    const { ready } = this.props

    if (ready === false) {
      return <AppLoading />
    }

    return (
      <View>
        <Text>Deck List</Text>
        {decks}
      </View>
    )
  }
}

export default connect()(DeckList)