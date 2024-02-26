import React, {useState, useEffect} from 'react'
import {NavigationContainer} from '@react-navigation/native'
import HomeStackNavigation from '../src/navigation/AppNavigation'
import {useDispatch, useSelector} from 'react-redux'
import {userLogin} from './context/userSlice'
import Constants from './utils/Constants'
import {getItem} from './utils/Utils'
import AuthNavigation from './navigation/AuthNavigation'
import SplashScreen from './screens/SplashScreen'
import {userDetails} from './context/userDetailsSlice'

const Main = () => {
  const isLoggedIn = useSelector((state: any) => state.userReducer.isLoggedIn)
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    setIsLoading(true)
    ;(async () => {
      const isLogin = await getItem(Constants.IS_LOGIN)

      if (isLogin === 'true') {
        dispatch(userLogin(true))
        const jwtToken = (await getItem(Constants.JWT_TOKEN)) ?? ''
        const userID = (await getItem(Constants.USER_ID)) ?? ''
        dispatch(userDetails({userID: userID, jwtToken: jwtToken}))
        console.log('Called Dispatch')
      } else {
        dispatch(userLogin(false))
      }
      setIsLoading(false)
    })()
  }, [])
  return isLoading ? (
    <SplashScreen />
  ) : (
    <NavigationContainer>
      {isLoggedIn ? <HomeStackNavigation /> : <AuthNavigation />}
    </NavigationContainer>
  )
}

export default Main
