import React, {useState} from 'react'
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import InputComponent from '../components/InputComponent'
import ButtonComponent from '../components/ButtonComponent'
import {useNavigation} from '@react-navigation/native'
import {loginUser} from '../hooks/AuthHook'

const LoginScreen = () => {
  const navigation = useNavigation()

  const goToSignUpScreen = () => {
    navigation.navigate('SignUpScreen' as never)
  }
  const goToForgotPassword = () => {
    navigation.navigate('ForgotPassword' as never)
  }

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <View style={styles.LoginScreen}>
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
          <InputComponent
            placeholder="Password"
            hidden={true}
            header="Password"
            value={password}
            setter={setPassword}
          />
          <ButtonComponent
            text="LOGIN"
            navigationLocation="HomePageWithBottomNav"
            values={{email, password}}
            functionality="login"
          />
          <TouchableOpacity onPress={goToForgotPassword}>
            <Text style={styles.forgotPasswordText}>Forgot Password ?</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.bottomTextWrapper}>
          <Text>Don't Have an account ? </Text>
          <TouchableOpacity onPress={goToSignUpScreen}>
            <Text style={styles.redText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  LoginScreen: {
    display: 'flex',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  inputsContainer: {
    width: '100%',
    gap: 15,
  },
  wrapperContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 200,
    marginBottom: 100,
  },
  logo: {},
  forgotPasswordText: {
    textAlign: 'center',
    marginTop: 10,
  },

  bottomTextWrapper: {
    flexDirection: 'row',
  },
  redText: {
    color: 'red',
  },
})

export default LoginScreen
