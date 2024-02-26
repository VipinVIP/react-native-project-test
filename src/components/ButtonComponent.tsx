import {useNavigation} from '@react-navigation/native'
import React from 'react'
import {StyleSheet, Text, TouchableOpacity} from 'react-native'
import {loginUser, signupUser} from '../hooks/AuthHook'
import {useDispatch} from 'react-redux'
import {userLogin} from '../context/userSlice'
import {clearStorageItem, setStringItem} from '../utils/Utils'
import Constants from '../utils/Constants'
import {userDetails} from '../context/userDetailsSlice'

type ButtonPropType = {
  text: string
  navigationLocation?: string | undefined
  laterNavigationLocation?: string | null
  values?: {fullName?: string; email: string; password: string}
  functionality: string
}
const ButtonComponent = (props: ButtonPropType) => {
  const dispatch = useDispatch()

  const action = async () => {
    if (props.functionality == 'login') {
      let {statusCode, loginResp} = await loginUser({
        email: props.values?.email,
        password: props.values?.password,
      })

      if (statusCode === '200') {
        await setStringItem(Constants.IS_LOGIN, 'true')
        await setStringItem(Constants.JWT_TOKEN, loginResp.token)
        await setStringItem(Constants.USER_ID, loginResp.user_id)
        dispatch(userLogin(true))
        dispatch(
          userDetails({userID: loginResp.user_id, jwtToken: loginResp.token}),
        )
      }
    } else if (props.functionality == 'signup') {
      let {statusCode, signupResp} = await signupUser({
        fullName: props.values?.fullName,
        email: props.values?.email,
        password: props.values?.password,
      })

      if (statusCode === '200') {
        await setStringItem(Constants.IS_LOGIN, 'true')
        await setStringItem(Constants.JWT_TOKEN, signupResp.token)
        await setStringItem(Constants.USER_ID, signupResp.user_id)
        dispatch(userLogin(true))
        dispatch(
          userDetails({userID: signupResp.user_id, jwtToken: signupResp.token}),
        )
      }
    } else if (props.functionality == 'logout') {
      await setStringItem(Constants.IS_LOGIN, 'false')
      dispatch(userLogin(false))
      await clearStorageItem(Constants.JWT_TOKEN)
      await clearStorageItem(Constants.USER_ID)
    } else if (props.functionality == 'navigate') {
      goToPassedScreen()
    }
  }

  const navigation = useNavigation()
  const goToPassedScreen = () => {
    navigation.navigate(props?.navigationLocation, {
      location: props.laterNavigationLocation,
    })
  }
  return (
    <TouchableOpacity style={styles.button} onPress={action}>
      <Text style={styles.buttonText}>{props.text}</Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    backgroundColor: '#A1D5E3',
    padding: 10,
    width: '100%',
    borderRadius: 5,
  },
  buttonText: {
    fontWeight: '700',
    fontSize: 20,
    color: '#000',
  },
})
export default ButtonComponent
