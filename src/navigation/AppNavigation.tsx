import React from 'react'
import HomeScreen from '../screens/HomeScreen'
import {
  BottomTabBar,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import ProfileScreen from '../screens/ProfileScreen'
import {useIsFocused} from '@react-navigation/native'
import GroupScreen from '../screens/GroupScreen'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const BottomNav = createBottomTabNavigator()

const AppNavigation = () => {
  return (
    <BottomNav.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          fontSize: 15,
          marginVertical: 5,
        },
        tabBarStyle: {
          paddingVertical: 10,
          height: 70,
          backgroundColor: '#FFF',
          borderTopColor: '#00000000',
        },
        tabBarActiveTintColor: '#1E3A41',
        tabBarInactiveTintColor: '#6D8B92',
      }}>
      <BottomNav.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons
              name="contacts"
              size={32}
              color={useIsFocused() ? '#1E3A41' : '#6D8B92'}
            />
          ),
        }}
      />
      <BottomNav.Screen
        name="GroupScreen"
        component={GroupScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Groups',
          tabBarIcon: ({color, size}) => (
            <MaterialIcons
              name="groups"
              size={36}
              color={useIsFocused() ? '#1E3A41' : '#6D8B92'}
            />
          ),
        }}
      />
      <BottomNav.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="account"
              size={32}
              color={useIsFocused() ? '#1E3A41' : '#6D8B92'}
            />
          ),
        }}
      />
    </BottomNav.Navigator>
  )
}

export default AppNavigation
