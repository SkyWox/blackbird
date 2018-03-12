import React, { Component } from 'react'
import { Text } from 'react-native'
import styleConstructor from './style'

export class Price extends Component {
  constructor(props) {
    super(props)
    this.style = styleConstructor(props.theme)
  }

  render() {
    const textStyle = [this.style.price]
    if (this.props.price == 0) {
      return <Text>-</Text>
    }
    return <Text>${this.props.price}</Text>
  }
}
