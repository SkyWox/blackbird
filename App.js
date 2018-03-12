import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { StackNavigator } from 'react-navigation'
import { CalendarScreen } from './src/components/CalendarScreen.js'

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen!!</Text>
      </View>
    )
  }
}

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
