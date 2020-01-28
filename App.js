import React, { Component } from 'react'
import { View, StatusBar } from 'react-native'
import Constants from 'expo-constants'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducer from './reducers'
import Navigation from './components/Navigation'

function CustomStatusBar ({ backgroundColor, ...props }) {
  return (
    <View style={{backgroundColor, height: Constants.statusBarHeight }} >
      <StatusBar translucent backgroundColor={backgroundColor} {...props} />
    </View>
  )
}

export default class App extends Component {
  render () {
    return (
      <Provider store={createStore(reducer)}>
        <View style={{flex: 1}}>
          <CustomStatusBar backgroundColor={'purple'} barStyle='Light-content' />
          <Navigation />
        </View>
      </Provider>
    )
  }
}
