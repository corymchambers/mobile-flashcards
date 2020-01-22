import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

class DeckList extends Component {
  render() {
    return (
      <View>
        <Text>Deck List</Text>
        <Button
          title="Go to Quiz"
          onPress={() => this.props.navigation.navigate('Quiz')}
        />
        <Button
          title="Go to Add Deck"
          onPress={() => this.props.navigation.navigate('AddDeck')}
        />
        <Button
          title="Go to Add Question"
          onPress={() => this.props.navigation.navigate('AddQuestion')}
        />
        <Button
          title="Go to Deck"
          onPress={() => this.props.navigation.navigate('Deck')}
        />
        <Button
          title="Go to Deck List"
          onPress={() => this.props.navigation.navigate('DeckList')}
        />
      </View>
    )
  }
}

export default DeckList