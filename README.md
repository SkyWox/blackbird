# Mock up of the Blackbird iOS app

## Table of Contents

* [What is it](#what-is-it)
* [What has been added](#what-has-been-added)
* [What needs to be added](#what-needs-to-be-added)

## What is it

This is a recreation of Blackbird's iOS app in React Native.
It is adapted from the [react-native-calendars](https://github.com/wix/react-native-calendars) library with modifications and new components.

## What has been added

* New subcomponent `Price` under `Day` to hold pricing data
  -- Data is loaded in at the top component level via the `priceData` JSON
* Supression of past days and weeks via a new prop, `hidePreviousDays`
* Contextual styling on days depending on flight availability

- Reformatting to match Blackbird's style  
  -- Day of the week rendered as a single letter  
  -- Date header with a horizontal span

## What needs to be added

* Sticky headers for scrolling  
  -- `react-native-calendars` renders the entire calendar with header as a FlatList item, so the header needs to be rendered separately to support this
* Modal for booking flights
* Navigation

- Custom fonts
- Selecting date ranges
