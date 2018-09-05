import { Navigation } from 'react-native-navigation'

const home = () => {
  Navigation.setRoot({
    root: {
      component: {
        name: 'HOME',
      },
    },
  })
}

export default home