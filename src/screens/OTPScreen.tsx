import React from 'react'
import {Image, StyleSheet, TextInput, View} from 'react-native'
import ButtonComponent from '../components/ButtonComponent'

const OTPScreen = ({route}: any) => {
  const location = route.params.location
  return (
    <View style={styles.SignupScreen}>
      <View style={styles.wrapperContainer}>
        <Image source={require('../assets/logo-dark.png')}></Image>
        <View style={styles.inputsContainer}>
          <View style={styles.otpContainer}>
            <TextInput style={styles.input} />
            <TextInput style={styles.input} />
            <TextInput style={styles.input} />
            <TextInput style={styles.input} />
            <TextInput style={styles.input} />
            <TextInput style={styles.input} />
          </View>
          <ButtonComponent
            text="VERIFY"
            navigationLocation={location}
            functionality="navigate"
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  otpContainer: {
    flexDirection: 'row',
    marginHorizontal: 5,
    gap: 15,
    marginBottom: 15,
  },
  input: {
    height: 50,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    borderColor: '#0B0B0B',
  },
  SignupScreen: {
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  inputsContainer: {
    width: '100%',
    alignItems: 'center',
    gap: 15,
  },
  wrapperContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 200,
    marginBottom: 300,
  },
})

export default OTPScreen
