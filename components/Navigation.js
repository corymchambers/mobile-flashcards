import React from 'react'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import { createStackNavigator } from 'react-navigation-stack';
import { Ionicons } from '@expo/vector-icons'
import DeckList from './DeckList'
import AddDeck from './AddDeck'
import Quiz from './Quiz'
import AddQuestion from './AddQuestion'
import Deck from './Deck'
import { seaweed, aqua, darkWhite, blue, white } from '../utils/colors'

const Tabs = createBottomTabNavigator({
  DecksTab: {
    screen: createStackNavigator({
      screen: DeckList
    }),
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-bookmarks' size={30} color={tintColor} />
    }
  },
  AddDeckTab: {
    screen: createStackNavigator({
      screen: AddDeck
    }),
    navigationOptions: {
      tabBarLabel: 'Add Deck',
      tabBarIcon: ({ tintColor }) => <Ionicons name='ios-bookmarks' size={30} color={tintColor} />
    }
  }
},{
  navigationOptions: {
    headerShown: false
  },
  tabBarOptions: {
    activeTintColor: darkWhite,
    inactiveTintColor: blue,
    style: {
      height: 56,
      backgroundColor: white,
      shadowColor: 'rgba(0, 0, 0, 0.24)',
      shadowOffset: {
        width: 0,
        height: 3
      },
      shadowRadius: 6,
      shadowOpacity: 1
    }
  }
});

const MainNavigator = createStackNavigator({
  Main: {
    screen: Tabs,
    navigationOptions: {
    headerTitle: ''

    }
  },
  Quiz: {
    screen: Quiz
  },
  AddQuestion: {
    screen: AddQuestion
  },
  AddDeck: {
    screen: AddDeck
  },
  Deck: {
    screen: Deck
  },
  DeckList: {
    screen: DeckList,
  }
})

export default createAppContainer(MainNavigator)
