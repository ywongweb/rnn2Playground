import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Text, View, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

class Home extends PureComponent {
  static propTypes = {}

  render() {
    return (
      <View>
        <Text>new_scene Home</Text>
        <Text>new_scene Home</Text>
        <Text>new_scene Home</Text>
        <Text>new_scene Home</Text>
        <Text>new_scene Home</Text>
        <Text>new_scene Home</Text>
      </View>
    )
  }
}

export default Home
