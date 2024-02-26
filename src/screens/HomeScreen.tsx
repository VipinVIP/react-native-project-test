import React, {useEffect, useState} from 'react'
import {FlatList, StyleSheet, Text, TextInput, View} from 'react-native'
import {useSelector} from 'react-redux'
import {getContactList} from '../hooks/ProfileHook'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

// const data = [
//   {
//     contact_name: 'Rose Mathew',
//     card_id: '70af708a-1be7-4a8a-a87e-6b601180ba93',
//   },
//   {
//     contact_name: 'DevaPriya L',
//     card_id: '7f7ab49a-786a-402a-abcd-ac14abca1512',
//   },
//   {
//     contact_name: 'Vijay Rajesh',
//     card_id: 'b61b75a2-45c3-42ca-a149-f6ea4bb177d2',
//   },
//   {
//     contact_name: 'Anly Solly',
//     card_id: 'b6d9433e-942b-484d-a7ea-300da4ae71b4',
//   },
// ]
const colors = ['#FFCB67', '#FF6767', '#74F372', '#83DAFF']

const Item = ({contact_name}) => {
  const random = Math.floor(contact_name.length % colors.length)
  return (
    <View style={styles.item}>
      <View style={[styles.circle, {backgroundColor: colors[random]}]}>
        <Text style={styles.circleText}>{contact_name[0]}</Text>
      </View>
      <Text style={styles.title}>{contact_name}</Text>
    </View>
  )
}

const HomeScreen = () => {
  const userJWTToken = useSelector(
    (state: any) => state.userDetailsReducer.jwtToken,
  )

  const userID = useSelector((state: any) => state.userDetailsReducer.userID)

  const [searchText, setSearchText] = React.useState('')

  const [data, setData] = useState<[]>()
  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        // Call your function here
        const result = await getContactList(userID, userJWTToken)
        // Update state with the result
        setData(result.CardList)
        console.log(result.CardList)
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }
    fetchUserProfile()
  }, [])

  return (
    <View style={styles.Homepage}>
      <View style={styles.containerView}>
        <Text style={styles.heading}>Contacts</Text>
        <View style={styles.searchBarContainer}>
          <TextInput
            style={styles.searchBar}
            placeholder="Search contacts"
            onChangeText={text => setSearchText(text)}
          />

          <MaterialIcons name="search" size={25} />
        </View>
        <FlatList
          data={data}
          renderItem={({item}) => <Item contact_name={item.contact_name} />}
          keyExtractor={item => item.card_id}
        />

        <View style={styles.cameraContainer}>
          <MaterialIcons name="camera-alt" size={25} />
        </View>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  Homepage: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  containerView: {
    marginTop: 100,
    marginHorizontal: 30,
    // borderColor: 'black',
    // borderWidth: 1,
    flex: 1,
    gap: 20,
  },
  heading: {
    fontSize: 40,
    fontWeight: '400',
    color: '#000',
  },
  searchBar: {
    height: 40,
    padding: 10,
    width: '90%',
    paddingStart: 25,
    backgroundColor: '#D9D9D9',
    borderColor: '#00000000',
    borderRadius: 10,
  },
  searchBarContainer: {
    flexDirection: 'row',
    backgroundColor: '#D9D9D9',
    alignItems: 'center',
    borderRadius: 10,
  },
  item: {
    backgroundColor: '#fff',
    paddingVertical: 5,
    marginVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  circle: {
    width: 45,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    marginRight: 10,
  },
  circleText: {
    color: 'black',
    fontSize: 20,
  },
  title: {
    fontSize: 16,
    color: '#0B0B0B',
  },
  cameraFlex: {
    borderColor: 'red',
    borderWidth: 1,
  },

  cameraContainer: {
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#A1D5E3',
    borderRadius: 15,
    alignSelf: 'flex-end',
    marginBottom: 30,
  },
})

export default HomeScreen
