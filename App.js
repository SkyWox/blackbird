import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { StackNavigator } from 'react-navigation'
import { CalendarScreen } from './src/components/CalendarScreen.js'

export default StackNavigator(
  {
    Calendar: {
      screen: CalendarScreen
    }
  },
  {
    initialRouteName: 'Calendar',
    navigationOptions: {
      headerStyle: {
        backgroundColor: 'red'
      },
      headerTitleStyle: {
        color: 'white'
      }
    }
  }
)
