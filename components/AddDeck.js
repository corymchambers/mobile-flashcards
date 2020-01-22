import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'


class AddDeck extends Component {
  render() {
    return (
      <View>
        <Text>New Deck</Text>
        <Button
          title="Go to Deck List"
          onPress={() => this.props.navigation.navigate('Decks')}
        />
      </View>
    )
  }
}

export default AddDeck