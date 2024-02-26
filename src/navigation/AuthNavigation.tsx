import {createNativeStackNavigator} from '@react-navigation/native-stack'
import LoginScreen from '../screens/LoginScreen'
import SignupScreen from '../screens/SignupScreen'
import ForgotPassword from '../screens/ForgotPassword'
import ChangePassword from '../screens/ChangePassword'
import OTPScreen from '../screens/OTPScreen'

const StackNav = createNativeStackNavigator()

const AuthNavigation = () => {
  return (
    <StackNav.Navigator>
      <StackNav.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          headerShown: false,
        }}></StackNav.Screen>
      <StackNav.Screen
        name="SignUpScreen"
        component={SignupScreen}
        options={{
          headerShown: false,
        }}
      />
      <StackNav.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{
          headerShown: false,
        }}
      />
      <StackNav.Screen
        name="ChangePassword"
        component={ChangePassword}
        options={{
          headerShown: false,
        }}
      />
      <StackNav.Screen
        name="OTPScreen"
        component={OTPScreen}
        options={{
          headerShown: false,
        }}
      />
    </StackNav.Navigator>
  )
}

export default AuthNavigation
