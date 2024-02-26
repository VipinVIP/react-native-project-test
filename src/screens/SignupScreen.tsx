import React, {useState} from 'react'
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import InputComponent from '../components/InputComponent'
import ButtonComponent from '../components/ButtonComponent'
import {useNavigation} from '@react-navigation/native'

const SignupScreen = () => {
  const navigation = useNavigation()

  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const goToLoginScreen = () => {
    navigation.navigate('LoginScreen' as never)
  }
  return (
    <View style={styles.SignupScreen}>
      <View style={styles.wrapperContainer}>
        <Image
          source={require('../assets/logo-dark.png')}
          style={styles.logo}></Image>
        <View style={styles.inputsContainer}>
          <InputComponent
            placeholder="FullName"
            hidden={false}
            header="Name"
            value={fullName}
            setter={setFullName}
          />
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
            text="SIGN UP"
            navigationLocation="HomePageWithBottomNav"
            values={{fullName, email, password}}
            functionality="signup"
          />
        </View>

        <View style={styles.bottomTextWrapper}>
          <Text>Already Have an account ? </Text>
          <TouchableOpacity onPress={goToLoginScreen}>
            <Text style={styles.redText}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  SignupScreen: {
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
  bottomTextWrapper: {
    flexDirection: 'row',
  },
  redText: {
    color: 'red',
  },
})

export default SignupScreen
