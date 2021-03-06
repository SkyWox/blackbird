# MockingBird

(I came up with this pun after naming everything, sorry)

## Table of Contents

* [What is it](#what-is-it)
* [What has been added](#what-has-been-added)
* [What needs to be added](#what-needs-to-be-added)
* [How I made this](#how-i-made-this)

## What is it

This is a recreation of Blackbird's iOS app calendar screen in React Native.
It is adapted from the [react-native-calendars](https://github.com/wix/react-native-calendars) library with modifications and new components.

**[Try it on Appetize](https://appetize.io/app/njv1hdhvutwb97ftcpp0dcymtw?device=nexus5&scale=75&orientation=portrait&osVersion=7.1)**

![Expo QR Code](./QR_Code.png)  
Scan to load in your Expo App

![Resulting App](./Result.gif)

## What has been added

* New subcomponent `Price` under `Day` to hold pricing data  
  -- Data is loaded in at the top component level via the `priceData` JSON
* Supression of past days and weeks via a new prop, `hidePreviousDays`
* Contextual styling on days depending on flight availability
* Navigation using `react-native-navigation`
* Reformatting to match Blackbird's style  
  -- Day of the week rendered as a single letter  
  -- Date header with a horizontal span

## What needs to be added

* Sticky headers for scrolling  
  -- `react-native-calendars` renders the entire calendar with header as a FlatList item, so the header needs to be rendered separately to support this
* Modal for booking flights
* Resolve spacing issue for weeks with less than 7 rendered days  
  --This is not an issue with the supression I implemented, it is with days oustide the current month. May be due to changing the physical size of the days in the calendar.
* Custom fonts  
  --Gilroy is loaded, but not used in `style.js`
* Selecting date ranges  
  --Merge the fill attributes from the `Day/Period` component into `Day/Basic`
* Clean code, remove unused dependencies

## How I made this

Prior to making this app I had no experience with React Native. This app was made in a day, including setting up an Android development environment on my computer. A rough breakdown of the hours spent:

**Hours 0-2**: Setting up the Android development environment and scoping project  
**Hours 2-4**: Learning the `react-native-calendar` library and making cosmetic changes to match the Blackbird app  
**Hours 4-6**: Implementing functional features like rendering data from JSON and supression of past dates  
**Hours 4-8**: Creating documentation, building APKs, uplading to Appetize, etc.
