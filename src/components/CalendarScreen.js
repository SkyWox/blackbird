import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Calendar, CalendarList } from './calendar'

export class CalendarScreen extends React.Component {
  static navigationOptions = {
    title: 'Select a departure date'
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Hi there</Text>
        <CalendarList
          current={Date()}
          pastScrollRange={0}
          futureScrollRange={2}
          monthFormat={'MMMM'}
          hideExtraDays={true}
          hidePreviousDays={true}
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
