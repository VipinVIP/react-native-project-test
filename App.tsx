// import React, {useEffect, useState} from 'react'
// import SplashScreen from './src/screens/SplashScreen'
// import {NavigationContainer} from '@react-navigation/native'
// import AppNavigation from './src/navigation/AppNavigation'

// const App = () => {
//   const [showSplash, setshowSplash] = useState(true)
//   // Timer for splashscreen
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setshowSplash(false)
//     }, 2000)

//     return () => clearTimeout(timer)
//   }, [])

//   return showSplash ? (
//     <SplashScreen />
//   ) : (
//     <NavigationContainer>
//       <AppNavigation />
//     </NavigationContainer>
//   )
// }

// export default App

import React from 'react'
import {Provider} from 'react-redux'
import {store} from './src/context/store'
import Main from './src/Main'

const App = () => {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  )
}

export default App
