import React, { Component } from 'react'
import { TouchableOpacity, Text, View } from 'react-native'
import PropTypes from 'prop-types'
import { Price } from './Price.js'

import styleConstructor from './style'

export class Day extends Component {
  static propTypes = {
    // TODO: disabled props should be removed
    state: PropTypes.oneOf(['disabled', 'today', '']),

    // Specify theme properties to override specific styles for calendar parts. Default = {}
    theme: PropTypes.object,
    marking: PropTypes.any,
    onPress: PropTypes.func,
    date: PropTypes.object
  }

  constructor(props) {
    super(props)
    this.style = styleConstructor(props.theme)
    this.onDayPress = this.onDayPress.bind(this)
  }

  onDayPress() {
    this.props.onPress(this.props.date)
  }

  shouldComponentUpdate(nextProps) {
    const changed = ['state', 'children', 'marking', 'onPress'].reduce(
      (prev, next) => {
        if (prev) {
          return prev
        } else if (nextProps[next] !== this.props[next]) {
          return next
        }
        return prev
      },
      false
    )
    if (changed === 'marking') {
      let markingChanged = false
      if (this.props.marking && nextProps.marking) {
        markingChanged = !(
          this.props.marking.marked === nextProps.marking.marked &&
          this.props.marking.selected === nextProps.marking.selected &&
          this.props.marking.dotColor === nextProps.marking.dotColor &&
          this.props.marking.disabled === nextProps.marking.disabled
        )
      } else {
        markingChanged = true
      }
      // console.log('marking changed', markingChanged);
      return markingChanged
    } else {
      // console.log('changed', changed);
      return !!changed
    }
  }

  render() {
    const containerStyle = [this.style.base]
    const textStyle = [this.style.text]
    const priceStyle = [this.style.price]
    const dotStyle = [this.style.dot]

    let marking = this.props.marking || {}
    if (marking && marking.constructor === Array && marking.length) {
      marking = {
        marking: true
      }
    }
    const isDisabled =
      typeof marking.disabled !== 'undefined'
        ? marking.disabled
        : this.props.state === 'disabled'
    let dot
    if (marking.marked) {
      dotStyle.push(this.style.visibleDot)
      if (marking.dotColor) {
        dotStyle.push({ backgroundColor: marking.dotColor })
      }
      dot = <View style={dotStyle} />
    }

    if (marking.selected) {
      containerStyle.push(this.style.selected)
      if (marking.selectedColor) {
        containerStyle.push({ backgroundColor: marking.selectedColor })
      }
      dotStyle.push(this.style.selectedDot)
      textStyle.push(this.style.selectedText)
    } else if (isDisabled) {
      textStyle.push(this.style.disabledText)
      priceStyle.push(this.style.disabledText)
    } else if (this.props.flightData.availability === 'none') {
      textStyle.push(this.style.unavailable)
      priceStyle.push(this.style.unavailable)
    } else if (this.props.flightData.availability === 'book') {
      textStyle.push(this.style.bookable)
    } else if (this.props.flightData.availability === 'waitlist') {
      textStyle.push(this.style.waitlist)
    }

    return (
      <TouchableOpacity
        style={containerStyle}
        onPress={this.onDayPress}
        activeOpacity={marking.activeOpacity}
        disabled={marking.disableTouchEvent}
      >
        <Text allowFontScaling={false} style={textStyle}>
          {String(this.props.children)}
        </Text>
        <Price style={priceStyle} price={this.props.flightData.price} />
        {dot}
      </TouchableOpacity>
    )
  }
}
