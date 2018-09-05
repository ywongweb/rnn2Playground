import React from 'react'
import { Navigation } from 'react-native-navigation'
import { registerScreens } from './src/navigation/router'
import home from './src/navigation/stacks/home'

registerScreens()

Navigation.events().registerAppLaunchedListener(() => {
  home()
})

Navigation.events().registerComponentDidAppearListener(({ componentId, componentName }) => {
  console.log('Global event listener: ', componentId, componentName)
});
