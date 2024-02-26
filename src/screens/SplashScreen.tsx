import React from 'react'
import {StyleSheet, Text, View} from 'react-native'

const SplashScreen = () => {
  return (
    <View style={styles.splashView}>
      <Text style={styles.text}>Splash screen</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  splashView: {
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:''
  },
  text: {
    fontSize: 30,
  },
})

export default SplashScreen
