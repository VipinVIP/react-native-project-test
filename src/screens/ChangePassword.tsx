import React, {useState} from 'react'
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native'
import InputComponent from '../components/InputComponent'
import ButtonComponent from '../components/ButtonComponent'

const ChangePassword = () => {
  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  return (
    <View style={styles.LoginScreen}>
      <View style={styles.wrapperContainer}>
        <Image
          source={require('../assets/logo-dark.png')}
          style={styles.logo}></Image>
        <View style={styles.inputsContainer}>
          <InputComponent
            placeholder="Old Password"
            hidden={false}
            header="Old Password"
            value={oldPassword}
            setter={setOldPassword}
          />
          <InputComponent
            placeholder="New Password"
            hidden={true}
            header="New Password"
            value={newPassword}
            setter={setNewPassword}
          />
          <ButtonComponent
            text="CHANGE"
            navigationLocation="LoginScreen"
            functionality="navigate"
          />
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

export default ChangePassword
