import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Calendar, CalendarList } from './src/components/calendar'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text> hi </Text>
        <Text>Shake your phone to open the developer menu....</Text>
        <CalendarList
          current={Date()}
          pastScrollRange={0}
          futureScrollRange={2}
          monthFormat={'MMMM'}
          hideExtraDays={true}
          theme={{
            monthTextColor: 'red'
          }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
