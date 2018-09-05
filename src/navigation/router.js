import { Navigation } from 'react-native-navigation'
import Home from '../screens/Home'

export function registerScreens(store, Provider) {
  Navigation.registerComponent('HOME', () => Home, Provider, store)
}
