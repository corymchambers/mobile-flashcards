import React, { Component } from 'react'
import { View } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import DeckList from './components/DeckList'
import NewDeck from './components/NewDeck'

const Tabs = createBottomTabNavigator({
  Decks: DeckList,
  AddDeck: NewDeck,
});
const TabsContainer = createAppContainer(Tabs)

export default class App extends Component {
  render () {
    return (
      <View style={{flex: 1}}>
        <TabsContainer />
      </View>
    )
  }
}
