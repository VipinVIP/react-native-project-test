import React, {useState} from 'react'
import {Image, StyleSheet, View} from 'react-native'
import InputComponent from '../components/InputComponent'
import ButtonComponent from '../components/ButtonComponent'

const ForgotPassword = () => {
  const [email, setEmail] = useState('')
  return (
    <View style={styles.ForgotPassword}>
      <View style={styles.wrapperContainer}>
        <Image
          source={require('../assets/logo-dark.png')}
          style={styles.logo}></Image>
        <View style={styles.inputsContainer}>
          <InputComponent
            placeholder="Email"
            hidden={false}
            header="Email"
            value={email}
            setter={setEmail}
          />
          <ButtonComponent
            text="SEND OTP"
            navigationLocation="OTPScreen"
            laterNavigationLocation="ChangePassword"
            functionality="navigate"
          />
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  ForgotPassword: {
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  inputsContainer: {
    width: '100%',
    gap: 15,
  },
  wrapperContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
    gap: 150,
    marginTop: 200,
    marginBottom: 100,
  },
  logo: {},
  bottomTextWrapper: {
    flexDirection: 'row',
  },
  redText: {
    color: 'red',
  },
})

export default ForgotPassword
