# Mock up of the Blackbird iOS app

## Table of Contents

* [What is it](#what-is-it)
* [What has been added](#available-scripts)
* [What needs to be added](#available-scripts)

## What is it

This is a recreation of Blackbird's iOS app in React Native.
It is adapted from the [react-native-calendars](https://github.com/wix/react-native-calendars) library with modifications and new components.

## What has been added

* New subcomponent `Price` under `Day` to hold pricing data
* Supression of past days and weeks via a new prop, `hidePreviousDays`
* Contextual styling on days depending on flight availability

## What needs to be added

* Keeping the month header static with scrolling
* Modal for booking flights
* Navigation
