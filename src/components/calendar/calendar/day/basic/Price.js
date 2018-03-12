import React, { Component } from 'react'
import { Text } from 'react-native'
import styleConstructor from './style'

export class Price extends Component {
  render() {
    if (this.props.price == 0) {
      return <Text style={this.props.style}>-</Text>
    }
    return <Text style={this.props.style}>${this.props.price}</Text>
  }
}
