import React, {useEffect, useState} from 'react'
import {StyleSheet, Text, View} from 'react-native'
import ButtonComponent from '../components/ButtonComponent'
import {useSelector} from 'react-redux'
import {getProfileDetails, respType} from '../hooks/ProfileHook'

const ProfileScreen = () => {
  const userJWTToken = useSelector(
    (state: any) => state.userDetailsReducer.jwtToken,
  )

  const userID = useSelector((state: any) => state.userDetailsReducer.userID)
  const [data, setData] = useState<respType>()
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        // Call your function here
        const result = await getProfileDetails(userID, userJWTToken)
        // Update state with the result
        setData(result)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    fetchUserProfile()
  }, [])
  return (
    <View style={styles.profilePage}>
      <View style={styles.containerView}>
        <View style={styles.contactCircle}>
          <Text style={styles.contactIconText}>
            {data?.profileDetails?.fullName[0]}
          </Text>
        </View>
        <Text style={styles.contactNameText}>
          Hi {data?.profileDetails?.fullName} !
        </Text>
        <Text>{data?.profileDetails?.email}</Text>
        <Text>Total Contacts : {data?.profileDetails?.totalContacts}</Text>
        <ButtonComponent text="LOGOUT" functionality="logout" />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  contactCircle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    borderRadius: 50,
    width: 100,
    height: 100,
    marginLeft: -10,
  },
  contactIconText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#FFF',
  },
  contactNameText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  containerView: {
    marginVertical: 100,
    marginHorizontal: 50,
    gap: 20,
  },
  profilePage: {display: 'flex', flex: 1, backgroundColor: '#FFF'},
})

export default ProfileScreen
